const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('s3archivecfg', {
    tblname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    inc: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 's3archivecfg',
    timestamps: false
  });
};
