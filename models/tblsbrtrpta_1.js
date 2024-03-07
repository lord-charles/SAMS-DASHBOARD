const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtrpta_1', {
    idxRptA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idxFiles: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    schoolName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    schoolCode: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    education: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    noPupils: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    county: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payam: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    period: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrtrpta_1',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idxRptA" },
        ]
      },
    ]
  });
};