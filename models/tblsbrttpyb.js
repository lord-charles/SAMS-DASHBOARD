const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrttpyb', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idxFiles: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    shortCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    afiCode: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    middleName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    '1Lt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '1Amt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2Lt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '2Amt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '3Lt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '3Amt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '4Lt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '4Amt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '5Lt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '5Amt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '6Lt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '6Amt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '7Lt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '7Amt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '8Lt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '8Amt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '9Lt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '9Amt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '10Lt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '10Amt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '11Lt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '11Amt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '12Lt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '12Amt': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gtLt: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gtAmt: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrttpyb',
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
