function getBL() {
	return document.getElementById("blacklist");
}

document.addEventListener('DOMContentLoaded', function () {
	getBL().value = localStorage.getItem('blacklist') || '*';
	document.getElementById("save").addEventListener('click', function() {
		localStorage.setItem('blacklist', getBL().value)
	});
});
