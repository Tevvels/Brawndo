const db = require('../models');
const express = require('express');
const moment = require('moment');

module.exports = (app) => {
	// get route that displays all plants
	app.get('/garden', function (req, res) {
		db.Plant.findAll().then(function (data) {
			// console.log(data);
			let hbsObject = { garden: data };
			function formatDate(hbsObject) {
				// console.log(hbsObject);
				hbsObject.garden.forEach((plant) => {
					let lastWater = plant.dataValues.lastWatered;
					let current = moment();
					console.log('last water: ' + lastWater);
					console.log('current: ' + current);

					let diff = current - lastWater;
					console.log('diff: ' + diff);

					let formatted = diff / 1000 / 60 / 60 / 24;
					console.log('formatted: ' + formatted);

					let waterFrequency = plant.dataValues.waterFrequency;
					console.log('water freq: ' + waterFrequency);

					let waterPercent = formatted / waterFrequency;
					console.log('Water Pct: ' + waterPercent);

					let formatPct = Math.floor(waterPercent * 100);
					console.log('format pct: ' + formatPct);
				});
			}
			formatDate(hbsObject);
			res.render('index', hbsObject);
		});
		console.log('get garden called');
		return;
	});

	// route to update lastWatered to current date
	app.put('/garden/update/:id', function (req, res) {
		console.log('update lastWatered function called');
		db.Plant.update(
			{
				lastWatered: moment(),
			},
			{
				where: {
					id: req.params.id,
				},
			}
		).then(function (data) {
			res.redirect('/garden');
		});
	});

	// route to display 'add plant' page
	app.get('/garden/add', function (req, res) {
		console.log('"/garden/add" called');
		return res.render('addPlant');
	});

	// post route that inserts a new plant into Plants in brawndo_db
	app.post('/garden/add', (req, res) => {
		console.log('/garden/add post route called');
		db.Plant.create(req.body).then(res.redirect('/garden'));
	});

	app.get('/', function (req, res) {
		res.redirect('/garden');
	});
};
