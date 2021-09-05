const { Model } = require('sequelize');
module.exports = function (sequelize, Sequelize) {
  class Student extends Model {
    static associate(models) {
      Student.belongsTo(models.Classroom, {
        foreignKey: {
          name: 'cid',
          type: Sequelize.DataTypes.UUID,
          allowNull: true,
        },
        as: 'classroom'
      });
      Student.belongsToMany(models.Course, {
        through: models.Score,
        as: 'courses',
        foreignKey: 'sid'
      });
    }
  }

  Student.init({
    sid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    sname: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    birth: {
      type: Sequelize.DataTypes.DATE,
      allowNull: true,
    },
    gender: {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: true,
    },
    cid: { // 外键有多的一方维护
      type: Sequelize.DataTypes.UUID,
      allowNull: true,
    }
  }, {
    sequelize: sequelize, // 我们需要传递连接实例
    modelName: 'Student', // 我们需要选择模型名称
    tableName: 'Student',
  });

  return Student;
}
// 连接模型

// 题目地址
// https://zhuanlan.zhihu.com/p/197840403