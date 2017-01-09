var iFrame = document.createElement ("iframe");
iFrame.src = chrome.extension.getURL ("app.html");
document.body.insertBefore (iFrame, document.body.firstChild);