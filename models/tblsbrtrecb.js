const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtrecb', {
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
    sn: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eCode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    catCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    outputs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    unitCost: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    totalCost: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrtrecb',
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
