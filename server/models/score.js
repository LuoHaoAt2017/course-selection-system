const { Model } = require('sequelize');

module.exports = function(sequelize, Sequelize) {

  class Score extends Model {

  }

  Score.init({
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    sid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    cid: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    score: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: true,
    }
  }, {
    sequelize: sequelize,
    modelName: 'Score',
    tableName: 'Score',
  });

  return Score;
}