const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tstateanchors', {
    idx: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sa_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tstateanchors',
    timestamps: false
  });
};
