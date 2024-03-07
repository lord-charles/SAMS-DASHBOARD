const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtequity', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quartercode: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    snapdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    quarter: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    staid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    couid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    county: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    openSch: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eliSch: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eliSchPri: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eliSchSec: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eliGirls: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '1bSch': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2aPaid': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2aApproved': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2bT1Apv': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2bT1PriApv': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2bT1SecApv': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2bT2Apv': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2bT2PriApv': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2bT2SecApv': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2bT1Rec': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2bT1PriRec': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2bT1SecRec': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2bT2Rec': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2bT2PriRec': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2bT2SecRec': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2cSgb': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2cSss': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2cTpdEli': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2cTpd': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2cLclm': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2cTdm': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2cMentor': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '3bAttEver': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '3bAtt5': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '3bAtt6': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '3bEnrOpen': {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrtequity',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idx" },
        ]
      },
    ]
  });
};
