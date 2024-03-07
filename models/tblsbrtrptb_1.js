const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtrptb_1', {
    idxRptB: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idxFiles: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    desc: {
      type: DataTypes.STRING(255),
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
    none: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pct: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrtrptb_1',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idxRptB" },
        ]
      },
    ]
  });
};
