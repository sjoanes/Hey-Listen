var db;

function randomIndex(list) {
	return Math.floor(Math.random() * list.length);
}

function getRandomOptions(list) {
	return [1,2,3,4].map(function() {
		return list[randomIndex(list)].answer;
	});
}

function makeQuestion(callback) {
	var openCursorRequest = db.transaction(["readings"], "readwrite")
		.objectStore("readings")
		.index('exp')
		.openCursor(null, 'next');

	openCursorRequest.onsuccess = function (event) {
        if (event.target.result) {
        	var question = event.target.result.value;
        	var options = getRandomOptions(readings);
        	options[randomIndex(options)] = question.answer;

        	if (localStorage.getItem('answer_mode') === 'romanji') {
        		options = options.map(wanakana.toRomaji);
        		question.answer = wanakana.toRomaji(question.answer)
        	}

            callback({
				clue: question.clue,
				choices: options,
				answer: question.answer,
				mnemonic: question.hint
			});
        }
	}

	openCursorRequest.onerror = function(event) {
		console.log("Fail", event);
	}
}

function gainExperience(clue, attempts) {
	var objectStore = db.transaction(["readings"], "readwrite").objectStore("readings");
	var getRequest = objectStore.get(clue);

	getRequest.onsuccess = function (event) {
		var updated = getRequest.result;
		var failAttempts = attempts == 1 ? Math.floor((Math.random() * 2) % 2) : attempts; // assume %50 of 1 failed attempts are misinputs

        updated.streak = failAttempts ? 0 : (updated.streak || 0) + 1;
        updated.exp += updated.streak * (4 - Math.min(3, failAttempts));
        objectStore.put(updated);
	}
}

function setupDb() {
	var item = 0;
	var level = 0;
	var request = window.indexedDB.open("factbank", 1);
	request.onerror = function(event) { console.log(event.target.errorCode); };
	request.onsuccess = function(event) {
		db = request.result;

		var objectStore = db.transaction(["readings"], "readwrite").objectStore("readings");
		putIfDoesntExist(0, readings, objectStore);

		// this updates the vocabulary list without touching the experience(exp) values
		// Also initializes each item with experience so the user is exposed to new items in chunks
	    function putIfDoesntExist(i, array, store) {
			if (i >= array.length) return;

			var getRequest = objectStore.get(readings[i].clue);
			getRequest.onsuccess = function(event) {
				item = item + 1 == 10 ? 0 : item + 1;
				level = item == 0 ? level + 1 : level;
				readings[i].exp = event.target.result && event.target.result.exp || level * 50;
				objectStore.put(readings[i]).onsuccess = function() { putIfDoesntExist(i + 1, array) };
			}
		}
	};

	request.onupgradeneeded = function(event) {
	    db = event.target.result;
	    var store = db.createObjectStore('readings', {keyPath: 'clue'});
		store.createIndex("exp", "exp", { unique: false });
	};
}

function setupMessageHandler() {
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			console.log(request);
			if (request.action === "prompt") {
			    makeQuestion(sendResponse);
			    return true;
			} else if (request.action === "init") {
				sendResponse({
					isFirstTime: isFirstTime(),
					whitelist: makeRegex(localStorage.getItem("whitelist")),
					delay: localStorage.getItem("delay") || 10
				});
			} else if (request.action === "solved") {
				gainExperience(request.clue, request.attempts);
			}
		}
	);
}

function isFirstTime() {
	var isFirstTime = localStorage.getItem("isFirstTime") === null;
	localStorage.setItem("isFirstTime", false);

	return isFirstTime;
}

function makeRegex(whitelist) {
	return whitelist ? "(http://|https://)www\.(" + whitelist.split(",").join('|') + ")\." : "a^";
}

function init() {
	setupDb();
	setupMessageHandler();
}

init();