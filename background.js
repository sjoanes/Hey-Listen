chrome.runtime.onMessage.addListener(
 	function(request, sender, sendResponse) {
      sendResponse({hint:"hebi", choices: ["Snake", "Deer", "Albatross", "Jew"], answer: 0});
	}
);