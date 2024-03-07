const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rparreports', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "auto index primary key"
    },
    TS: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "all report tables must have TS"
    },
    USR: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "all tables must have User Name"
    },
    UID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "all tables must have UID link to tblUser"
    },
    SREF: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    fSGB1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "SGB1 Number of male school governing body members"
    },
    fSGB2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "SGB2 Number of female school governing body member"
    },
    fSGB3: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "SGB3 Has the school governing body been trained by GESS?"
    },
    fBNK: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Bank Has the school opened a bank account?"
    },
    fDEV: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Dev Has school development plan in place"
    },
    fBUG: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "BG1 Has school submitted a budget"
    },
    fBD2: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "BG2 Has school budget been uploaded"
    },
    fTR1A: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "TR1 Has school received Tranche 1 cap grant"
    },
    fTR1B: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "TR1A Has school accounted for Tranche 1 cap grant"
    },
    fTR1L: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "TR1L Has school submitted ledgers for Tranche 1 cap grant"
    },
    fTR2A: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "TR2 Has school received Tranche 2 cap grant"
    },
    fTR2B: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "TR2A Has school accounted for Tranche 2 cap grant"
    },
    fTR2L: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "TR2L Has school submitted ledgers for Tranche 2 cap grant"
    }
  }, {
    sequelize,
    tableName: 'rparreports',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "TS",
        using: "BTREE",
        fields: [
          { name: "TS" },
          { name: "USR" },
          { name: "UID" },
        ]
      },
      {
        name: "SREF",
        using: "BTREE",
        fields: [
          { name: "SREF" },
        ]
      },
    ]
  });
};
