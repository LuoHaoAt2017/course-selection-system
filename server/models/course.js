const { Model } = require('sequelize');

module.exports = function (sequelize, Sequelize) {
  // 课程和教师之间的关系 tid
  class Course extends Model {
    static associate(models) {
      Course.belongsTo(models.Teacher, {
        primaryKey: {
          name: 'tid',
          type: Sequelize.DataTypes.UUID,
          allowNull: true,
        },
        as: 'teacher'
      });
      Course.belongsToMany(models.Student, {
        through: models.Score,
        as: 'students',
        foreignKey: 'cid'
      });
    }
  }

  Course.init({
    cid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    cname: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    tid: {
      type: Sequelize.DataTypes.UUID,
      allowNull: true,
    },
  }, {
    sequelize: sequelize,
    modelName: 'Course',
    tableName: 'Course',
  });

  return Course;
}