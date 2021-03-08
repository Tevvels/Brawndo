const db = require('../models');
const express = require('express');
var router = express.Router();

module.exports = (app) => {
	app.get('/', function (req, res) {
		// If plants exist in database, redirect to /garden. If no plants, redirect to /garden/create
		db.Plant.findAll().then((data) => {
			// * below functionality not currently working...need to debug
			// console.log(data);
			if (data) {
				res.redirect('/garden');
			} else {
				res.redirect('/garden/add');
			}
		});
	});

	// get route that displays all plants
	app.get('/garden', function (req, res) {
		console.log('get garden called');
		db.Plant.findAll().then(function (data) {
			console.log(data);
			let hbsObject = { garden: data };
			 res.render('index', hbsObject);
		});
	});

	// route to display 'add plant' page
	app.get('/garden/add', function (req, res) {
		res.render('addPlant');
	});

	// post route that inserts a new plant into Plants in brawndo_db
	app.post('/garden/add', (req, res) => {
		console.log('hello')
		db.Plant.create(req.body).then(/*res.redirect('/garden')*/);
	});
};
