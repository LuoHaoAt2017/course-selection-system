const { Model } = require('sequelize');

module.exports = function (sequelize, Sequelize) {
  class Teacher extends Model {
    static associate(models) {
      Teacher.hasOne(models.Course, {
        primaryKey: {
          name: 'tid',
          type: Sequelize.DataTypes.UUID,
          allowNull: true,
        },
        as: 'course'
      });
    }
  }

  Teacher.init({
    tid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    tname: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize: sequelize,
    modelName: 'Teacher',
    tableName: 'Teacher'
  });

  return Teacher;
}