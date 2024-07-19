const { Model, DataTypes } = require('sequelize');//see Comment.js for explanation
const sequelize = require('../config/connection');
//Post class extends the Sequelize Model class
class Post extends Model {}
//initializes the building of the Post model
Post.init(
  { // see Comment.js for explanation
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    }, // see Comment.js for explanation
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: { // see Comment.js for explanation
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { // see Comment.js for explanation
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);
// see Comment.js for explanation
module.exports = Post;
