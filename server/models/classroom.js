const { Model } = require('sequelize');
module.exports = function (sequelize, Sequelize) {
  class Classroom extends Model {
    static associate(models) {
      Classroom.hasMany(models.Student, {
        foreignKey: {
          name: 'cid',
          type: Sequelize.DataTypes.UUID,
          allowNull: true,
        },
        as: 'students',
      });
    }
  }

  Classroom.init({
    rid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    rname: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize: sequelize,
    modelName: 'Classroom',
    tableName: 'Classroom'
  });

  return Classroom;
}