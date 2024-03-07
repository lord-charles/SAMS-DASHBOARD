const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblenrolment_2018', {
    idEnrolment: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    eStudentID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eFormID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eRef: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    eFrom: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    eTo: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "null for current enrollment"
    }
  }, {
    sequelize,
    tableName: 'tblenrolment_2018',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEnrolment" },
        ]
      },
      {
        name: "iStudent",
        using: "BTREE",
        fields: [
          { name: "eStudentID" },
        ]
      },
      {
        name: "iForm",
        using: "BTREE",
        fields: [
          { name: "eFormID" },
        ]
      },
      {
        name: "iTo",
        using: "BTREE",
        fields: [
          { name: "eTo" },
        ]
      },
      {
        name: "iFrom",
        using: "BTREE",
        fields: [
          { name: "eFrom" },
        ]
      },
    ]
  });
};
