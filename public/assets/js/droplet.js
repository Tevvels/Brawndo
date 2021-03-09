const droplet = document.querySelectorAll('.garden_plant--water');

go = () => {
	droplet.forEach((drop) => {
		let watervalue = drop.firstChild.nextSibling.getAttribute('data-watered');
		console.log(watervalue);
		drop.style.background = `linear-gradient(to bottom, white ${watervalue}%, blue ${watervalue}%)`;

		drop.addEventListener('click', (e) => {
			e.stopPropagation();
			e.preventDefault();
			id = e.target.getAttribute('data-id');
			fetch(`/garden/update/${id}`, {
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			}).then((response) => {
				location.reload('/garden');
			});
		});
	});
};

go();

const addBtn = document.getElementById('add-plant');

addBtn.addEventListener('click', (e) => {
	e.stopPropagation();
	e.preventDefault();
	fetch('/garden/add', {
		method: 'GET',
	}).then((data) => {
		console.log('redirect successful');
		window.location.replace('/garden/add');
	});
});
