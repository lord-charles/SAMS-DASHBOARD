const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrttinb', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idxFiles: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    shortCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    afiCode: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    middleName: {
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
    }
  }, {
    sequelize,
    tableName: 'tblsbrttinb',
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
        name: "teacherList",
        using: "BTREE",
        fields: [
          { name: "active" },
          { name: "afiCode" },
        ]
      },
    ]
  });
};
