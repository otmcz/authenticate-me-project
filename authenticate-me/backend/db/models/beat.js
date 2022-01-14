'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beat = sequelize.define('Beat', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Title can not be empty'
        },
        len: {
          args: [1, 100],
          msg: 'Title can not exceed 100 characters'
        }
      }
    },
    imageUrl: DataTypes.STRING,
    audioUrl: DataTypes.STRING,
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    },
    key: DataTypes.STRING,
    typeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Types' }
    }
  }, {});
  Beat.associate = function(models) {
    // associations can be defined here
    Beat.belongsTo(models.User, { foreignKey: 'userId' });
    Beat.belongsTo(models.Type, { foreignKey: 'typeId'});
    Beat.hasMany(models.Comment, {
      foreignKey: 'beatId',
      onDelete: 'CASCADE',
      hooks: true
    });
    Beat.hasMany(models.Like, {
      foreignKey: 'beatId',
      onDelete: 'CASCADE',
      hooks: true
    })
  };
  return Beat;
};
