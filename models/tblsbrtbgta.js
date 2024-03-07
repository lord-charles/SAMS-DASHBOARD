const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtbgta', {
    idxBgtA: {
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
    forms: {
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
    dateRange: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bankName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bankAccount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    preparedBy: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tblsbrtbgta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idxBgtA" },
        ]
      },
    ]
  });
};
