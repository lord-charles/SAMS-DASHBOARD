const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpimpactpayment', {
    IDX: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "IDX"
    },
    SID: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "staff id"
    },
    lastUpdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    Status: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    Notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Duress: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ReportRef: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    idxidx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PayAmt: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    TS: {
      type: DataTypes.DATE,
      allowNull: true
    },
    chkStaff: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    chkSync: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tmpimpactpayment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idxidx" },
        ]
      },
      {
        name: "IDX",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IDX" },
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
        name: "ReportRef",
        using: "BTREE",
        fields: [
          { name: "ReportRef" },
        ]
      },
    ]
  });
};
