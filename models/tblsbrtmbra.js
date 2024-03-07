const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtmbra', {
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
    schoolName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    schoolCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    county: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payam: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    budgetYear: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrtmbra',
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
        name: "main",
        using: "BTREE",
        fields: [
          { name: "idxFiles" },
          { name: "schoolCode" },
          { name: "active" },
        ]
      },
    ]
  });
};
