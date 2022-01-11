'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    beatId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Beat, {foreignKey: 'beatId'})
    Comment.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Comment;
};
