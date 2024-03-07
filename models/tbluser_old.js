const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbluser_old', {
    idUser: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    uLastPhone: {
      type: DataTypes.STRING(22),
      allowNull: true,
      comment: "link to tblPhone"
    },
    uPayrollRef: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: ""
    },
    uNationalRef: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    uNotes: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    uRef: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    uPwd: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    uGender: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    uVer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    uAdded: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    uPrevID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    uSchID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uSchQRef: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    uLoginLockout: {
      type: DataTypes.DATE,
      allowNull: false
    },
    uLoginFails: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uVis: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: "All"
    },
    uEmail: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ""
    },
    sbrActive: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    sbrAdmin: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    sbrUplMgmt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sbrSubMgmt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sbrCgRptEdit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sbrBankView: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sbrUpdated: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ctRptView: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ctRptEdit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uSuperAdmin: {
      type: DataTypes.TINYINT.UNSIGNED.ZEROFILL,
      allowNull: true,
      defaultValue: 0
    },
    uProfestionalQual: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    uPhoneNo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    uSalaryGrade: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    uYearAppointment: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uDOB: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Date of Birth"
    },
    uNationalIDNo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    uAutoTimeStamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    uRefugee: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    uCountryOrigin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uTrainingLevel: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uAcaYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    uType: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    uBlocked: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "non zero blocks web login"
    },
    uEmailVerified: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    uEmailToken: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    uLastLogin: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    uResetToken: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    uResetTokenTimeout: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    uPwdPrompt: {
      type: DataTypes.STRING(128),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbluser_old',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idUser" },
        ]
      },
      {
        name: "iVerRef",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uVer" },
          { name: "uRef" },
        ]
      },
      {
        name: "uSchQRef",
        using: "BTREE",
        fields: [
          { name: "uSchQRef" },
        ]
      },
      {
        name: "r",
        using: "BTREE",
        fields: [
          { name: "uRef" },
        ]
      },
      {
        name: "uSchID",
        using: "BTREE",
        fields: [
          { name: "uSchID" },
        ]
      },
    ]
  });
};
