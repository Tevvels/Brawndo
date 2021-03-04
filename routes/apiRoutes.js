const db = require('../models');
const express = require('express');
// var router = express.Router();

module.exports = (app) => {
	app.get('/', function (req, res) {
		// * If plants exist in database, redirect to /garden
		res.redirect('/garden');
		// * Else redirect to create garden page
		// res.redirect("/createGarden");
	});

	// get route, edited to match sequelize
	app.get('/garden', function (req, res) {
		// replace old function with sequelize function
		db.Plant.findAll()
			// use promise method to pass the burgers...
			.then(function (data) {
				console.log(data);
				// into the main index, updating the page
				var hbsObject = { garden: data };
				return res.render('index', hbsObject);
			});
	});

	// post route that inserts a new plant
	app.post('/garden/create', (req, res) => {
		db.Plant.create(req.body).then((data) => res.redirect('/'));
	});
};
