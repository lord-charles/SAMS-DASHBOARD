const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblattreports_del', {
    idAttReport: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    arSchID: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "school ref"
    },
    arFormID: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "form ref"
    },
    arRptDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "date & time of report"
    },
    arMsg: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "report msg"
    },
    arUser: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "report by"
    },
    arRptWhen: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "date report is about"
    }
  }, {
    sequelize,
    tableName: 'tblattreports_del',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAttReport" },
        ]
      },
      {
        name: "arSchID",
        using: "BTREE",
        fields: [
          { name: "arSchID" },
          { name: "arFormID" },
          { name: "arUser" },
        ]
      },
      {
        name: "arRptWhen",
        using: "BTREE",
        fields: [
          { name: "arRptWhen" },
        ]
      },
      {
        name: "arUser",
        using: "BTREE",
        fields: [
          { name: "arUser" },
        ]
      },
    ]
  });
};
