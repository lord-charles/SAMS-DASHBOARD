const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtsuma', {
    idxSumA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idxFiles: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "iRpt"
    },
    rev: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    e1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    e2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    e3: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    r1: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    r2: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tblsbrtsuma',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idxSumA" },
        ]
      },
      {
        name: "iRpt",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idxFiles" },
        ]
      },
    ]
  });
};
