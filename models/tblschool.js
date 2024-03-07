const { sequelize } = require("@/db/connection");
const { DataTypes } = require("sequelize");
const { Payam } = require("./tpayam");
const { SchoolForm } = require("./tblform");
const School = sequelize.define(
  "tblschool",
  {
    idSchool: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    sName: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    sHead: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sSchType: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    sMgmt: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    sRef: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    sVer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    sOperatingDays: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sTermTimes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sAlertPhone: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    sPayam: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "replaces county link",
    },
    sExtRef1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sExtRef2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sActive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1,
    },
    sWarningHr: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 11,
      comment: "non-report warning hour",
    },
    sAlertHr: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15,
      comment: "non report alert hour",
    },
    sAddr: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    sCodeTwo: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    sClosed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "school is now closed, will be dropped from future reporting",
    },
    sClosedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    sLat: {
      type: DataTypes.FLOAT(10, 6),
      allowNull: true,
    },
    sLng: {
      type: DataTypes.FLOAT(10, 6),
      allowNull: true,
    },
    SElev: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sChange: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    sChangeBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    sParentSchool: {
      type: DataTypes.STRING(12),
      allowNull: true,
      comment: "link to sRef of parent school",
    },
    sPayam_10: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "link to 10 state payam",
    },
    sExtendedSchType: {
      type: DataTypes.STRING(6),
      allowNull: false,
      comment: "old sSchType before PRE/NUR etc were removed",
    },
  },
  {
    sequelize,
    tableName: "tblschool",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "idSchool" }],
      },
      {
        name: "iVerRef",
        unique: true,
        using: "BTREE",
        fields: [{ name: "sRef" }, { name: "sVer" }],
      },
      {
        name: "sPayam",
        using: "BTREE",
        fields: [{ name: "sPayam" }],
      },
      {
        name: "sExtRef1",
        using: "BTREE",
        fields: [{ name: "sExtRef1" }],
      },
      {
        name: "sSchType",
        using: "BTREE",
        fields: [{ name: "sSchType" }],
      },
      {
        name: "sVer",
        using: "BTREE",
        fields: [{ name: "sVer" }],
      },
      {
        name: "sClosed",
        using: "BTREE",
        fields: [{ name: "sClosed" }],
      },
      {
        name: "sRef",
        using: "BTREE",
        fields: [{ name: "sRef" }],
      },
      {
        name: "sParentSchool",
        using: "BTREE",
        fields: [{ name: "sParentSchool" }],
      },
      {
        name: "sPayam_10",
        using: "BTREE",
        fields: [{ name: "sPayam_10" }],
      },
    ],
  }
);

School.belongsTo(Payam, {
  foreignKey: "sPayam",
  targetKey: "idPayam",
});

// School.hasMany(SchoolForm, { foreignKey: "fSchID" });

module.exports = {
  School,
};
