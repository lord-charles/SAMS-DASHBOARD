const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtatt', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    day: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    male: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    female: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tblsbrtatt',
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
        name: "index",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "day" },
          { name: "code" },
        ]
      },
      {
        name: "iRpt",
        using: "BTREE",
        fields: [
          { name: "day" },
          { name: "code" },
          { name: "total" },
        ]
      },
      {
        name: "code",
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
