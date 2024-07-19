const { Model, DataTypes } = require('sequelize'); //creates a  model using Sequelize, imports the Model and DataTypes classes from the Sequelize library
const sequelize = require('../config/connection');//connects to mySQL database and imports the Sequelize connection from connection.js
//defines a Comment class that extends the Sequelize Model class
class Comment extends Model {}
//initializes the Comment model with the following attributes/options
Comment.init(
  {//Primary Key to be the unique identifier of the comment
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, //must be filled in 
      primaryKey: true,
      autoIncrement: true, //automatically increases by 1 for each entry. 
    }, //string field representing the content of the comment
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { //Sequelize connection used for this model
    sequelize,
    freezeTableName: true, //table name should be the same as the model name (no plural or "__")
    underscored: true,//Converts camel-cased attribute names to snake case when generating the table columns
    modelName: 'comment',//model's name
  }
);
//exports the Comment model so that it can be imported and used in other parts of the application
module.exports = Comment;
