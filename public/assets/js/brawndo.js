

//
//
//
//
// Code for routes, etc
//
//
//
//

document.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM loaded!');

	const addPlantForm = document.getElementById('add-plant-form');

	
		addPlantForm.addEventListener('submit', (e) => {
			e.preventDefault();
			console.log('Submit button clicked!');

			const newPlant = {
				name: document.getElementById('plantName').value.trim(),
				indoorOutdoor: document.getElementById('indoorOutdoor').checked,
				waterFrequency: document.getElementById('waterFrequency').value.trim(),
				// lastWatered: new Date()
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
				// location.reload();
				console.log(newPlant)
			});
		});
});
