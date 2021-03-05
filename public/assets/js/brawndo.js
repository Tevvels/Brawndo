console.log('Branwdo.js connected!');

document.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM loaded!');

	const addPlantForm = document.getElementById('add-plant-form');

	if (addPlantForm) {
		addPlantForm.addEventListener('submit', (e) => {
			e.preventDefault();
			console.log('Submit button clicked!');

			const newPlant = {
				name: document.getElementById('plantName').value.trim(),
				indoorOutdoor: document.getElementById('indoorOutdoor'),
				waterFrequency: document.getElementById('waterFrequency').value.trim(),
				waterTime: document.getElementById('waterTime').value.trim(),
			};

			console.log(newPlant);

			fetch('/garden/add', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},

				body: JSON.stringify(newPlant),
			}).then(() => {
				// document.getElementById('plantName').value = '';
				location.reload();
			});
		});
	}

	var options;
	var elems = document.querySelectorAll('.datepicker');
	var instances = M.Datepicker.init(elems, options);
});
