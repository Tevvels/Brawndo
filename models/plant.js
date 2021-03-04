module.exports = (sequelize, DataTypes) => {
	const Plant = sequelize.define('Plant', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 80],
			},
		},
		outdoor: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		indoor: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		indoor: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		waterFrequency: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		waterTime: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}

	});

	return Plant;
};
