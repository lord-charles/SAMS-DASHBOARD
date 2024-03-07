const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrttina', {
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
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    schoolName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    schoolCode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    county: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    payam: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    budgetYear: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrttina',
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
