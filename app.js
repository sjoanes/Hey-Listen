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

var link = document.createElement("link");
link.href = chrome.extension.getURL("style.css");
link.type = "text/css";
link.rel = "stylesheet";
document.head.appendChild(link);

document.addEventListener("keypress", function(event) {
	// a = 97
	// s = 115
	// d = 100
	// f = 102
	if (event.keyCode === 97) {
		document.getElementById("hey-listen").style.display = "none";
	}
});
