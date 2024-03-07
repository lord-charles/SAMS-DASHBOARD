const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblworkingdays', {
    wdStart: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    wdEnd: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    wdName: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    wdGroup: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idWorkingDate: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'tblworkingdays',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idWorkingDate" },
        ]
      },
      {
        name: "wdStart",
        using: "BTREE",
        fields: [
          { name: "wdStart" },
          { name: "wdEnd" },
        ]
      },
      {
        name: "iGroup",
        using: "BTREE",
        fields: [
          { name: "wdGroup" },
        ]
      },
    ]
  });
};
