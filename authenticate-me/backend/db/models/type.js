'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Name can not be empty'
        },
        len: {
          args: [1, 100],
          msg: 'Name can not exceed 100 characters'
        }
      }
    }
  }, {});
  Type.associate = function(models) {
    // associations can be defined here
    Type.hasMany(models.Beat, {
      foreignKey: 'typeId',
      onDelete: 'CASCADE',
      hooks: true
    })
  };
  return Type;
};
