const { sequelize } = require("@/db/connection");
const { DataTypes } = require("sequelize");
const { School } = require("./tblschool");

  const SbrtFile = sequelize.define('SbrtFile', {
    idxFiles: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    method: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    utime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    from: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    attachment: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    period: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    process: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    show: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tableversion: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    ip: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    os: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    computer: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    s3upl: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    checked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tblsbrtfiles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idxFiles" },
        ]
      },
      {
        name: "iRpt1",
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "iRpt2",
        using: "BTREE",
        fields: [
          { name: "show" },
          { name: "type" },
          { name: "period" },
        ]
      },
      {
        name: "cht",
        using: "BTREE",
        fields: [
          { name: "idxFiles" },
          { name: "code" },
          { name: "period" },
          { name: "show" },
        ]
      },
    ]
  });

SbrtFile.belongsTo(School, { foreignKey: 'code', targetKey:'sRef' });

module.exports={
  SbrtFile
}
