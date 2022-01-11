'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beat = sequelize.define('Beat', {
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    audioUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    key: DataTypes.STRING,
    typeId: DataTypes.INTEGER
  }, {});
  Beat.associate = function(models) {
    // associations can be defined here
    Beat.belongsTo(models.User, {foreignKey: 'userId'});
    Beat.belongsTo(models.Type, {foreignKey: 'typeId'});
    Beat.hasMany(models.Comment, {foreignKey: 'beatId'});
    Beat.hasMany(models.Like, {foreignKey: 'beatId'})
  };
  return Beat;
};
