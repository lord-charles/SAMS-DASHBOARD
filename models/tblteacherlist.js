const { sequelize } = require("@/db/connection");
const { DataTypes } = require("sequelize");

  const TeacherList = sequelize.define('tblteacherlist', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    activetmp: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    source: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    schoolCode: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    teacherCode: {
      type: DataTypes.CHAR(15),
      allowNull: true,
      unique: "teacherCode"
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    middleName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fullName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    position: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    workStatus: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    nationalNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    salaryGrade: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    firstAppointment: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    refugee: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    countryOfOrigin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trainingLevel: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    professionalQual: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblteacherlist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idx" },
        ]
      },
      {
        name: "teacherCode",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "teacherCode" },
        ]
      },
    ]
  });

  module.exports = {
    TeacherList,
  };