const { sequelize } = require("@/db/connection");
const { DataTypes } = require("sequelize");
const { State } = require("./tstates");
const { Payam } = require("./tpayam");
const County = sequelize.define(
  "tcounties",
  {
    idCounty: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    cName: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    cState: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: -1,
    },
    cEMISNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cShape: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "county shape coords kml",
    },
    cShapeMeta: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "tcounties",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "idCounty" }],
      },
      {
        name: "cState",
        using: "BTREE",
        fields: [{ name: "cState" }],
      },
    ],
  }
);

County.belongsTo(State, {
  foreignKey: "cState",
  targetKey: "idState",
});

// County.hasMany(Payam, { foreignKey: "pyCounty" });

module.exports = {
  County,
};
