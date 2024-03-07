const { sequelize } = require("@/db/connection");
const { DataTypes } = require("sequelize");
const { School } = require("./tblschool");
const { Enrolment } = require("./tblenrolment");
const SchoolForm = sequelize.define(
  "tblform",
  {
    idForm: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    fDesc: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    fSchID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fRef: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    fVer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    fAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    fYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fYearStream: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    fRemoved: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "set when deleted in school editor",
    },
  },
  {
    sequelize,
    tableName: "tblform",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "idForm" }],
      },
      {
        name: "fSchID",
        using: "BTREE",
        fields: [{ name: "fSchID" }],
      },
      {
        name: "IDX_fRef",
        using: "BTREE",
        fields: [{ name: "fRef" }],
      },
      {
        name: "fVer",
        using: "BTREE",
        fields: [{ name: "fVer" }],
      },
      {
        name: "fYear",
        using: "BTREE",
        fields: [{ name: "fYear" }],
      },
    ],
  }
);

// SchoolForm.belongsTo(School, {
//   foreignKey: "fSchID",
// });
module.exports = {
  SchoolForm,
};
