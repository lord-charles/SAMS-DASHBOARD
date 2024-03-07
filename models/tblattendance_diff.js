const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblattendance_diff', {
    idAtt: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    atDay: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    atStudentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    atFormID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    atPresent: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    atSuperceded: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    atUCode: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    atTS: {
      type: DataTypes.DATE,
      allowNull: false
    },
    atMethod: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    atApproved: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tblattendance_diff',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAtt" },
          { name: "atDay" },
        ]
      },
      {
        name: "iStudent",
        using: "BTREE",
        fields: [
          { name: "atStudentID" },
        ]
      },
      {
        name: "iDay",
        using: "BTREE",
        fields: [
          { name: "atDay" },
        ]
      },
      {
        name: "iForm",
        using: "BTREE",
        fields: [
          { name: "atFormID" },
        ]
      },
      {
        name: "iSuperceded",
        using: "BTREE",
        fields: [
          { name: "atSuperceded" },
        ]
      },
    ]
  });
};
