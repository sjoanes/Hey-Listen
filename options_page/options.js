
document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("whitelist").value = localStorage.getItem('whitelist') || '';
	document.getElementById("delay").value = localStorage.getItem('delay') || 20;

	if (localStorage.getItem('answer_mode') === 'romanji') {
		document.getElementById("romanji").checked = true;
	} else {
		document.getElementById("hira").checked = true;
	}

	document.getElementById("save").addEventListener('click', function() {
		localStorage.setItem('whitelist', document.getElementById("whitelist").value);
		localStorage.setItem('delay', document.getElementById("delay").value);
		localStorage.setItem('answer_mode', document.getElementById("romanji").checked ? 'romanji' : 'hira');
	});
});
