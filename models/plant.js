module.exports = (sequelize, DataTypes) => {
	const Plant = sequelize.define('Plant', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 80],
			},
		},
		outdoorIndoor: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		waterFrequency: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		lastWatered: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastWatered: {
			type: DataTypes.DATE,
			allowNull: false,
		},
	});

	return Plant;
};
