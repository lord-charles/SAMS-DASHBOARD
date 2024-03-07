const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblcttmp1', {
    reference: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ctefserial: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblcttmp1',
    timestamps: false
  });
};
