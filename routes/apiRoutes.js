const db = require('../models');
const express = require('express');
const moment = require('moment');

module.exports = (app) => {
	// get route that displays all plants
	app.get('/garden', function (req, res) {
		db.Plant.findAll().then(function (data) {
			// console.log(data);
			let hbsObject = { garden: data };
			let newArr = [];
			function formatDate(hbsObject) {
				// console.log(hbsObject);
				hbsObject.garden.forEach((plant) => {
					let lastWater = plant.dataValues.lastWatered;
					let waterFrequency = plant.dataValues.waterFrequency;
					let current = moment();

					let diff = (current - lastWater) / 1000 / 60 / 60 / 24;
					let waterPct = Math.floor((diff / waterFrequency) * 100);

					console.log('formatted water pct: ' + waterPct);

					// constructing new object that includes waterPct
					let newPlant = {
						id: plant.dataValues.id,
						name: plant.dataValues.name,
						outdoorIndoor: plant.dataValues.outdoorIndoor,
						waterFrequency: plant.dataValues.waterFrequency,
						lastWatered: plant.dataValues.lastWatered,
						waterPct: waterPct,
					};

					newArr.push(newPlant);
				});
			}
			formatDate(hbsObject);
			let newHbsObj = { garden: newArr };
			// console.log(newHbsObj);
			res.render('index', newHbsObj);
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
		).then(() => {
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
