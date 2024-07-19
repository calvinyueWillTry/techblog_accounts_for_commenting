const { Model, DataTypes } = require('sequelize');//see Comment.js for explanation
const bcrypt = require('bcrypt');//imports the bcrypt library for hashing passwords
const sequelize = require('../config/connection');//see Comment.js for explanation
//User class extends the Sequelize Model class
class User extends Model {
  checkPassword(loginPw) { //compare a provided password
    return bcrypt.compareSync(loginPw, this.password);
  }//with the hashed password stored in the database
}
//
User.init(
  {//see Comment.js for explanation
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: { //string field representing the hashed password of the user
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],//required to have 8 characters in order to be considered valid
      },
    },
  },
  {//Contains hooks that execute before creating or updating a user record
    hooks: { //These hooks use bcrypt.hash to hash the password before storing it in the database
      beforeCreate: async (newUserData) => { //when a new user record is created in the database
        newUserData.password = await bcrypt.hash(newUserData.password, 10);//user's password in newUserData is hashed using bcrypt.hash with a cost factor of 10
        return newUserData;//(which determines the complexity of the hashing algorithm)
      },//hashed password is then returned back to the same variable 
      beforeUpdate: async (updatedUserData) => {//modified  object with the re-hashed password is returned
        updatedUserData.password = await bcrypt.hash( //combines bcrypt and hash
          updatedUserData.password,
          10
        ); //now can be returned and saved in the database
        return updatedUserData;
      },
    },//see Comment.js for explanation
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);
//see Comment.js for explanation
module.exports = User;
