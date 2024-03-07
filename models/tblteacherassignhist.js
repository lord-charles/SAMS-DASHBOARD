const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblteacherassignhist', {
    idTAddHist: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tassDay: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tassUID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tassSID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tblteacherassignhist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTAddHist" },
        ]
      },
      {
        name: "tassDay",
        using: "BTREE",
        fields: [
          { name: "tassDay" },
          { name: "tassSID" },
        ]
      },
    ]
  });
};
