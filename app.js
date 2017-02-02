initialize();

function initialize() {
	var answerRef = {attempts: 0};
	injectHtmlOverlay();
	injectCss();
	addGlobalKeypressHandler(answerRef);
	updateDomWithQuestion(answerRef);
	sapSetup(answerRef)
}

function sapSetup(answerRef) {
	setInterval(function() {
		updateDomWithQuestion(answerRef);
		document.getElementById("hey-listen").style.display = "initial";
	}, 10000);
}

// This will get a question from the background script and update the DOM
function updateDomWithQuestion(answerRef) {
	chrome.runtime.sendMessage({action: "prompt"}, function(response) {
		document.getElementById("fact").innerHTML = response.hint;
		document.getElementById("mnemonic").innerHTML = response.mnemonic;

		for (var i = 0; i < response.choices.length; i++) {
			document.getElementById("btn" + i).innerHTML = response.choices[i];
		}

		answerRef.answer = response.answer;
	});
}

function addGlobalKeypressHandler(answerRef) {
	document.addEventListener("keypress", function(event) {
		var adjusted = event.keyCode === 65 ? 0 :     	// a
					   event.keyCode === 83 ? 1 : 		// s
					   event.keyCode === 68 ? 2 : 		// d
					   event.keyCode === 70 ? 3 : 4;	// f (4 is never the answer)
		if (adjusted === answerRef.answer) {
			document.getElementById("hey-listen").style.display = "none";
		} else {
			answerRef.attempts++;
		}

		if (answerRef.attempts > 2) {
			document.getElementById("mnemonic").style.display = "initial";
		}
	});
}

function injectHtmlOverlay() {
	var wrapper = document.createElement("div");
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", chrome.extension.getURL("app.html"), false);
	xhttp.send();
	wrapper.innerHTML = xhttp.responseText;
	wrapper.setAttribute("id", "hey-listen")
	wrapper.setAttribute("style",
		"position: absolute;" +
		" left: 0px; top: 0px;" +
		" background-color: rgb(255, 255, 255); " +
		" z-index: 2000;" +
		" height: 1083px;" +
		" width: 100%;");
	document.body.insertBefore(wrapper, document.body.firstChild);
}

function injectCss() {
	var link = document.createElement("link");
	link.href = chrome.extension.getURL("style.css");
	link.type = "text/css";
	link.rel = "stylesheet";
	document.head.appendChild(link);
}