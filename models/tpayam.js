const { sequelize } = require("@/db/connection");
const { DataTypes } = require("sequelize");
const { County } = require("./tcounties");
const { School } = require("./tblschool");
const Payam = sequelize.define(
  "tpayam",
  {
    idPayam: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    pyName: {
      type: DataTypes.STRING(24),
      allowNull: false,
    },
    pyEMISNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pyCounty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "link to tCounties",
    },
    pyActive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    pyHardToReach: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "0 = near city centre, 1 = hard to reach",
    },
    pyIs28StateModel: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "is 28 state model add on 1 dec 16",
    },
  },
  {
    sequelize,
    tableName: "tpayam",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "idPayam" }],
      },
      {
        name: "pyCounty",
        using: "BTREE",
        fields: [{ name: "pyCounty" }],
      },
    ],
  }
);

Payam.belongsTo(County, {
  foreignKey: "pyCounty",
  targetKey: "idCounty",
});

// Payam.hasMany(School, { foreignKey: "sPayam" });

module.exports = {
  Payam,
};
