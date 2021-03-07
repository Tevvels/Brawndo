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
			type: DataTypes.BOOLEAN ,
			defaultValue: 'true',
		},
		waterFrequency: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		lastWatered: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: 12,
		},
	});

	return Plant;
};
