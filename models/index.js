const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
//names the Models class variable to carry over the files
Post.belongsTo(User, { //post must have a user tied to it
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});
//a post can have multiple comments in reponse to it
Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});
//the comments in response to the post, must also have users tied to them
Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});
//These are the models to be exported. 
module.exports = {
  User,
  Post,
  Comment,
};
