var iFrame = document.createElement("iframe");
iFrame.src = chrome.extension.getURL("app.html");
iFrame.setAttribute("style","position: absolute; left: 0px; top: 0px; background-color: rgb(255, 255, 255); opacity: 0.5; z-index: 2000; height: 1083px; width: 100%;");
document.body.insertBefore(iFrame, document.body.firstChild);

var link = document.createElement("link");
link.href = chrome.extension.getURL("style.css");
link.type = "text/css";
link.rel = "stylesheet";
iFrame.contentDocument.head.appendChild(link);

console.log(3)
