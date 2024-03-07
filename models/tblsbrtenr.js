const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtenr', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    from: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    to: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    male: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    female: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    total: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    '1M': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    '1F': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    '2M': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    '2F': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    '3M': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    '3F': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    '4M': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    '4F': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    '5M': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    '5F': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    '6M': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    '6F': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    '7M': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    '7F': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    '8M': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    '8F': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    current: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    ph_male: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph_female: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph_total: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ph_1M: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ph_1F: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ph_2M: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ph_2F: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ph_3M: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ph_3F: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ph_4M: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ph_4F: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ph_5M: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ph_5F: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ph_6M: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ph_6F: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ph_7M: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ph_7F: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ph_8M: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    ph_8F: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrtenr',
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
      {
        name: "iUnique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
          { name: "from" },
          { name: "to" },
        ]
      },
      {
        name: "iRpt",
        using: "BTREE",
        fields: [
          { name: "to" },
          { name: "code" },
          { name: "total" },
        ]
      },
      {
        name: "iEnr",
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
