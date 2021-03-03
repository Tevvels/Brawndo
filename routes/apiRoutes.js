const db = require('..models/');

module.exports = (app) => {
	// get route that returns all plants
	app.get('/api/plants', (req, res) => {
		db.Plant.findAll({}).then((data) => {
			res.json(data);
		});
	});
};
