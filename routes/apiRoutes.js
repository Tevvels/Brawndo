const db = require('../models');

module.exports = (app) => {
	// get route that returns all plants
	app.get('/api/plants', (req, res) => {
		db.Plant.findAll({}).then((data) => {
			res.json(data);
		});
	});

	// post route that inserts a new plant
	app.post('/api/plants', (req, res) => {
		db.Plant.create(req.body).then((data) => res.json(data));
	});
};
