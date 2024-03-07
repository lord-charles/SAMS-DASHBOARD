const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbldisabled', {
    idDStudent: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    drASID: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    drAdded: {
      type: DataTypes.DATE,
      allowNull: false
    },
    drStudentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    drSeeNoNo: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drSeeYesSome: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drSeeYesAlot: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drSeeCannotDo: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drHearNoNo: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drHearYesSome: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drHearYesAlot: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drHearCannotDo: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drWalkNoNo: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drWalkYesSome: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drWalkYesAlot: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drWalkCannotDo: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drRemNoNo: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drRemYesSome: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drRemYesAlot: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drRemCannotDo: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drSelfcareNoNo: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drSelfcareYesSome: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drSelfcareYesAlot: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drSelfcareCannotDo: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drLangNoNo: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drLangYesSome: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drLangYesAlot: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drLangCannotDo: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    drSchool: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    drFormCode: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    drShortCode: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    drSchoolID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    drAcYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbldisabled',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idDStudent" },
        ]
      },
      {
        name: "form_scode",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "drFormCode" },
          { name: "drShortCode" },
        ]
      },
      {
        name: "drStudentID",
        using: "BTREE",
        fields: [
          { name: "drStudentID" },
        ]
      },
      {
        name: "drSchool",
        using: "BTREE",
        fields: [
          { name: "drSchool" },
        ]
      },
    ]
  });
};
