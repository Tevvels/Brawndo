console.log('Branwdo.js connected!');

document.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM loaded!');

	const createBurgerBtn = document.getElementById('create-form');

	if (createBurgerBtn) {
		createBurgerBtn.addEventListener('submit', (e) => {
			e.preventDefault();
			console.log('submitted!');

			const newBurger = {
				burger_name: document.getElementById('burger').value.trim(),
				devoured: false,
			};

			fetch('/api/burgers', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},

				body: JSON.stringify(newBurger),
			}).then(() => {
				document.getElementById('burger').value = '';
				location.reload();
			});
		});
	}
});
