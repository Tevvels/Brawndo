module.exports = (sequelize, DataTypes) => {
	const Plant = sequelize.define('Plant', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 80],
			},
		},
	});

	return Plant;
};
