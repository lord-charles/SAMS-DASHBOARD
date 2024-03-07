const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtbgtb', {
    idxBgtB: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idxFiles: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sn: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    activityDesc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    budgetCode: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    inputDetail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    unitCost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    noUnits: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    capGrants: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    int: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fees: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    other: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tblsbrtbgtb',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idxBgtB" },
        ]
      },
    ]
  });
};
