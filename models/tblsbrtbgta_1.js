const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtbgta_1', {
    idxBgtA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idxFiles: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    schoolName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    schoolCode: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    education: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    forms: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    schoolType: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    noPupils: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    county: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payam: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    period: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    dateRange: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bankName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bankAccount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    preparedBy: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bankBranch: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    accountName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emisCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teachersFemale: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teachersMale: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    studentsFemale: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    studentsMale: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    classroomsPermanent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    classroomsTemporary: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    classroomsOpenair: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    schoolVision: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    schoolMission: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrtbgta_1',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idxBgtA" },
        ]
      },
      {
        name: "iRpt",
        using: "BTREE",
        fields: [
          { name: "idxFiles" },
          { name: "bankName" },
          { name: "bankAccount" },
          { name: "preparedBy" },
        ]
      },
    ]
  });
};
