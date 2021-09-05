const { Model } = require('sequelize');

module.exports = function (sequelize, Sequelize) {

  class Circle extends Model {
  }

  Circle.init({
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    px: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
    py: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
    radius: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false,
    }
  }, {
    sequelize: sequelize,
    modelName: 'Circle',
    freezeTableName: true,
    timestamps: true,
    createdAt: 'createdTime', // 时间戳
    updatedAt: 'updatedTime', // 时间戳
  });

  return Circle;
}
