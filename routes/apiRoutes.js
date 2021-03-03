const db = require('..models/');

module.exports = (app) => {
	app.get('/brawndo', (req, res) => {
		db.Brawndo.findAll({}).then((data) => {
			console.log(data);
			res.json(data);
		});
	});
};
