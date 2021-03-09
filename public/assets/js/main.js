// functionality to enable logo button link
const logo = document.getElementById('logo');

logo.addEventListener('click', (e) => {
	e.stopPropagation();
	e.preventDefault();
	fetch('/garden', {
		method: 'GET',
	}).then((data) => {
		window.location.replace('/garden');
	});
});
