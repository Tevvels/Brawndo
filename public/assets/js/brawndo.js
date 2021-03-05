// const garden = document.querySelector('.garden');

// let article = document.createElement('article');
// let div = document.createElement('div');
// let imgdrop = document.createElement('img');
// let imgfence = document.createElement('img');
// let imggnome = document.createElement('img');
// let divTwo = document.createElement('div');
// let divtype = document.createElement('div');
// let divwater = document.createElement('div');
// let divlocation = document.createElement('div');

// imgfence.setAttribute('src', '../assets/img/029-fence.svg');
// imggnome.setAttribute('src', '../assets/img/012-dwarf.svg');
// imgdrop.setAttribute('src', '../assets/img/036-drop.svg');

// article.classList.add('garden_plant');
// div.classList.add('garden_plant--planttype');
// divTwo.classList.add('garden_plant--subrow');
// divwater.classList.add('garden_plant--water');
// divlocation.classList.add('garden_plant--location');

// div.appendChild(imggnome);
// divwater.appendChild(imgdrop);
// divlocation.appendChild(imgfence);

// divTwo.appendChild(divwater);
// divTwo.appendChild(divlocation);

// article.appendChild(div);
// article.appendChild(divTwo);

// garden.appendChild(article);

// const droplet = document.querySelectorAll('.garden_plant--water');

// let waterPectange = 0;
// let newNumber = parseInt(waterPectange);

// go = () => {
// 	setInterval(() => {
// 		droplet.forEach((drop) => {
// 			return (drop.style.background = `linear-gradient(to bottom, white ${newNumber}%, blue ${newNumber}%)`);
// 		});
// 		console.log(newNumber);
// 		if (newNumber < 100) {
// 			newNumber++;
// 		} else {
// 			window.clearTimeout();
// 		}
// 	}, 500);
// };

// go();

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

	if (addPlantForm) {
		addPlantForm.addEventListener('submit', (e) => {
			e.preventDefault();
			console.log('Submit button clicked!');

			const newPlant = {
				name: document.getElementById('plantName').value.trim(),
				outdoorIndoor: document.getElementById('indoorOutdoor').checked,
				waterFrequency: document.getElementById('waterFrequency').value.trim(),
				lastWatered: document.getElementById('lastWatered').value.trim(),
			};

			console.log(typeof newPlant.waterFrequency);

			fetch('/garden/add', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},

				body: JSON.stringify(newPlant),
			}).then(() => {
				location.reload();
			});
		});
	}
});
