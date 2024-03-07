const { sequelize } = require("@/db/connection");
const { DataTypes } = require("sequelize");
const { SbrtFile } = require("./tblsbrtfiles");
const { SbrtCode } = require("./tblsbrtcodes");

  const SbrtBudgetB1 = sequelize.define('SbrtBudgetB1', {
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
      type: DataTypes.STRING(4),
      allowNull: false
    },
    activityDesc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    budgetCode: {
      type: DataTypes.STRING(5),
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
    revCode: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    flagItem: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrtbgtb_1',
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
      {
        name: "exp",
        using: "BTREE",
        fields: [
          { name: "idxFiles" },
          { name: "budgetCode" },
        ]
      },
    ]
  });
SbrtBudgetB1.belongsTo(SbrtFile, { foreignKey: 'idxFiles', targetKey: 'idxFiles' });
SbrtBudgetB1.belongsTo(SbrtCode, { foreignKey: 'budgetCode', targetKey:"code" });

module.exports={
  SbrtBudgetB1
}
