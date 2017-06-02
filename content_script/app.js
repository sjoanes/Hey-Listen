initialize();

function initialize() {
	chrome.runtime.sendMessage({action: "init"}, function(response) {
		if (response.isFirstTime) {
			window.open(chrome.extension.getURL("options_page/options.html"));
		}

		if (!(new RegExp(response.whitelist, "i").test(window.location.href))) {
			return;
		}

		var answerRef = {attempts: 0, delay: response.delay};
		setTimeout(function() {
			injectHtmlOverlay();
			injectCss();
			addInputHandlers(answerRef);
			updateDomWithQuestion(answerRef);
		}, response.initialDelay * 1000);
	});
}

function annoy(answerRef) {
	setTimeout(function() {
		updateDomWithQuestion(answerRef);
		document.getElementById("hey-listen").style.display = "initial";
	}, answerRef.delay * 1000);
}

function putInContext(char, context) {
	return char + context;
}

// This will get a question from the background script and update the DOM
function updateDomWithQuestion(answerRef) {
	chrome.runtime.sendMessage({action: "prompt"}, function(response) {
		document.getElementById("hey-listen").focus()
		document.getElementById("hl-fact").innerHTML = putInContext(response.clue, response.context);
		document.getElementById("hl-mnemonic").innerHTML = response.mnemonic;

		for (var i = 0; i < response.choices.length; i++) {
			document.getElementById("hl-btn" + i).innerHTML = putInContext(response.choices[i], response.context);
		}

		answerRef.answer = response.answer;
		answerRef.clue = response.clue;
		answerRef.context = response.context;
	});
}

function reset(answerRef) {
	for (var i = 0; i < 4; i++) {
		document.getElementById("hl-btn" + i).disabled = false;
	}
	document.getElementById("hey-listen").style.display = "none";
	document.getElementById("hl-mnemonic").style.display = "none";
	annoy(answerRef, answerRef.delay)
	answerRef.attempts = 0;
}

function solved(answerRef) {
	chrome.runtime.sendMessage(
		{
			action: "solved",
			attempts: answerRef.attempts,
			clue: answerRef.clue,

		},
		function() {}
	);
}

function makeAttempt(guessIndex, answerRef) {
	var guess = document.getElementById("hl-btn" + guessIndex).innerText;
	if (guess === putInContext(answerRef.answer, answerRef.context)) {
		solved(answerRef);
		reset(answerRef);
	} else {
		document.getElementById("hl-btn" + guessIndex).disabled = true;
		answerRef.attempts++;
	}

	if (answerRef.attempts > 1) {
		document.getElementById("hl-mnemonic").style.display = "initial";
	}
}

function addInputHandlers(answerRef) {
	// keyboard hotkeys
	document.addEventListener("keypress", function(event) {
		var adjusted = event.keyCode === 65 ? 0 :     	// a
					   event.keyCode === 83 ? 1 : 		// s
					   event.keyCode === 68 ? 2 : 		// d
					   event.keyCode === 70 ? 3 : 4;	// f (4 is never the answer)
		if (adjusted < 4) {
			makeAttempt(adjusted, answerRef);
		}
	});

	// clicking on answer buttons
	for (var i = 0; i < 4; i++) {
		var btn = document.getElementById("hl-btn" + i);
		function closure(i) { return function() { makeAttempt(i, answerRef); } }
		btn.addEventListener("click", closure(i));
	}

	// show hint
	document.getElementById("hl-show-mnemonic").addEventListener("click", function() {
		answerRef.attempts = 100;
		document.getElementById("hl-mnemonic").style.display = "initial";
	});

	// Go to options page
	var url = chrome.extension.getURL("options_page/options.html");
	document.getElementById("hl-goto-options").addEventListener("click", function() {
		window.open(url);
	});
}

function injectHtmlOverlay() {
	var wrapper = document.createElement("div");
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", chrome.extension.getURL("content_script/app.html"), false);
	xhttp.send();
	wrapper.innerHTML = xhttp.responseText;
	wrapper.setAttribute("id", "hey-listen")
	document.body.insertBefore(wrapper, document.body.firstChild);
}

function injectCss() {
	var link = document.createElement("link");
	link.href = chrome.extension.getURL("content_script/style.css");
	link.type = "text/css";
	link.rel = "stylesheet";
	document.head.appendChild(link);
}