
document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("whitelist").value = localStorage.getItem('whitelist') || '';
	document.getElementById("delay").value = localStorage.getItem('delay') || 10;

	document.getElementById("save").addEventListener('click', function() {
		localStorage.setItem('whitelist', document.getElementById("whitelist").value);
		localStorage.setItem('delay', document.getElementById("delay").value);
	});
});
