const { DataTypes } = require("sequelize");
const { sequelize } = require("@/db/connection");
const { State } = require("./tstates");

const CTReport = sequelize.define(
  "tblctreport",
  {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    active: {
      type: DataTypes.TINYINT.UNSIGNED.ZEROFILL,
      allowNull: false,
    },
    activetmp: {
      type: DataTypes.TINYINT.UNSIGNED.ZEROFILL,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    idSta: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    stateName: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    idSta32: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    state32: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    stateName32: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    idSta28: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    state28: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    stateName28: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    idSta10: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    state10: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    stateName10: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    idCou: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    county: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    idCou32: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    county32: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    idCou28: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    county28: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    idCou10: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    county10: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    idPay: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payam: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    idPay32: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payam32: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    idPay28: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payam28: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    idPay10: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    payam10: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    school: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    code: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    education: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    form: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    formstream: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    firstname: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    middlename: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    lastname: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    reference: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    idEnr: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    over18: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    eligible: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    attendance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    paymentMethod: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      comment: "Payment method",
    },
    validated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Validated form completed at school",
    },
    ctenrform: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Received cash transfer enrolment form",
    },
    chiefletter: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Received letter from chief",
    },
    dateValidated: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Date validated",
    },
    dateValidationSa: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    dateCtefSa: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    dateCorrected: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    dateApproved: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Date approved",
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Pupil has been paid",
    },
    dateReleased: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    datePaid: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Date paid",
    },
    collected: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Pupil has collected their Cash Transfer",
    },
    monthValidated: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    monthApproved: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    monthPaid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    utime: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dateAccCtef: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Accountability CTEF received",
    },
    correctionDone: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Correction done ",
    },
    dateCollected: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    serialCtef: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    signedPayment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    serialAccCtef: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    remarks: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    uReceivedP5: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    uReceivedNewSchools: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    uReceivedChk: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    uReceivedChkTmp: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "tblctreport",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "idx" }],
      },
      {
        name: "index",
        unique: true,
        using: "BTREE",
        fields: [{ name: "year" }, { name: "reference" }],
      },
      {
        name: "active",
        using: "BTREE",
        fields: [{ name: "active" }],
      },
      {
        name: "year",
        using: "BTREE",
        fields: [{ name: "year" }],
      },
      {
        name: "code",
        using: "BTREE",
        fields: [{ name: "code" }],
      },
      {
        name: "state",
        using: "BTREE",
        fields: [{ name: "state" }],
      },
      {
        name: "idx",
        using: "BTREE",
        fields: [{ name: "idx" }],
      },
    ],
  }
);

CTReport.belongsTo(State, { foreignKey: "idSta", targetKey: "idState" });
module.exports = {
  CTReport,
};
