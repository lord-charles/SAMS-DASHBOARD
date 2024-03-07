const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtenrnph', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(3),
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
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tblsbrtenrnph',
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
          { name: "to" },
          { name: "from" },
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
