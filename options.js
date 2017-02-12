function getBL() {
	return document.getElementById("whitelist");
}

document.addEventListener('DOMContentLoaded', function () {
	getBL().value = localStorage.getItem('whitelist') || '.*';
	document.getElementById("save").addEventListener('click', function() {
		localStorage.setItem('whitelist', getBL().value)
	});
});
