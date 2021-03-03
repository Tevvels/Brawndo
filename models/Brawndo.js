const {Sequelize, Model, DataTypes} = require("sequelize")
const sequelize = require("../config/connection")

class Brawndo extends Model{}

Brawndo.init({title:DataTypes.STRING, text:DataTypes.STRING},{sequelize})
module.exports=Brawndo