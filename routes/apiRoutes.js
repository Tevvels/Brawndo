const db = require('../models');
const express = require('express');
// var router = express.Router();

module.exports = (app) => {
	app.get('/', function (req, res) {
		// If plants exist in database, redirect to /garden. If no plants, redirect to /garden/create
		db.Plant.findAll().then((data) => {
			// * below functionality not currently working...need to debug
			// console.log(data);
			if (data) {
				res.redirect('/garden');
			} else {
				res.redirect('/garden/create');
			}
		});
	});

	// get route that displays all plants
	app.get('/garden', function (req, res) {
		db.Plant.findAll().then(function (data) {
			console.log(data);
			var hbsObject = { garden: data };
			return res.render('index', hbsObject);
		});
	});

	app.get('/garden/create', function (req, res) {
		res.render('createGarden');
	});

	// post route that inserts a new plant into Plants in brawndo_db
	app.post('/garden/create', (req, res) => {
		db.Plant.create(req.body).then(res.redirect('/garden'));
	});
};
