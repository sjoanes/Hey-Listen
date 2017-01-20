var wrapper = document.createElement("div");
var xhttp = new XMLHttpRequest();
var answer = {};

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

var link = document.createElement("link");
link.href = chrome.extension.getURL("style.css");
link.type = "text/css";
link.rel = "stylesheet";
document.head.appendChild(link);

document.addEventListener("keypress", function(event) {
	var adjusted = event.keyCode === 97 ? 0 :     	// a
				   event.keyCode === 115 ? 1 : 		// s
				   event.keyCode === 100 ? 2 : 		// d
				   event.keyCode === 102 ? 3 : 4;	// f (4 is never the answer)
	if (adjusted === answer.option) {
		document.getElementById("hey-listen").style.display = "none";
	}
});

chrome.runtime.sendMessage({action: "prompt"}, function(response) {
	document.getElementById("fact").innerHTML = response.hint;

	for (var i = 0; i < response.choices.length; i++) {
		document.getElementById("btn" + i).innerHTML = response.choices[i];
	}

	answer.option = response.answer;
});