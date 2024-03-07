const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpgeoflat_1028', {
    PID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    pyName: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    CID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cName: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    SID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sState: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    sAbbrv: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    pyHardToReach: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tmpgeoflat_1028',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PID" },
        ]
      },
      {
        name: "SID",
        using: "BTREE",
        fields: [
          { name: "SID" },
        ]
      },
      {
        name: "CID",
        using: "BTREE",
        fields: [
          { name: "CID" },
        ]
      },
    ]
  });
};
