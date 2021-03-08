const db = require('../models');
const express = require('express');
var router = express.Router();

module.exports = (app) => {
	app.get('/', function (req, res) {
		res.redirect('/garden');
	});

	// get route that displays all plants
	app.get('/garden', function (req, res) {
		db.Plant.findAll().then(function (data) {
			// console.log(data);
			let hbsObject = { garden: data };
			res.render('index', hbsObject);
		});
		console.log('get garden called');
	});

	// route to display 'add plant' page
	app.get('/garden/add', function (req, res) {
		console.log('"/garden/add" called');
		return res.render('addPlant');
	});

	// post route that inserts a new plant into Plants in brawndo_db
	app.post('/garden/add', (req, res) => {
		console.log('hello');
		db.Plant.create(req.body).then(res.redirect('/garden'));
	});
};
