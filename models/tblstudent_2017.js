const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblstudent_2017', {
    idStudent: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stGender: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    stDOB: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stFName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    stMNames: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    stLName: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    stAdded: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stRef: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    stState: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    stASID: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    stVer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stDOA: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "date of admission"
    },
    stDOD: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "date of departure"
    },
    stRepeater: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    stOrphan: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    stSpecialNeeds: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    stPName: {
      type: DataTypes.STRING(40),
      allowNull: false,
      comment: "parents name"
    },
    stPOcc: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "parents occupation"
    },
    stPPhone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "parents phone"
    },
    stPAddr: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "parents address"
    },
    stRemarks: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "remarks from class register"
    },
    stMasterASID: {
      type: DataTypes.STRING(12),
      allowNull: true,
      comment: "used when de-duplicating students contains earlier\/first ASID for a student."
    },
    stFirstLanguage: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    stLeavingExams: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    stGrade: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    stRefugee: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    stOrigin: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: "\"\""
    }
  }, {
    sequelize,
    tableName: 'tblstudent_2017',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idStudent" },
        ]
      },
      {
        name: "stRef",
        using: "BTREE",
        fields: [
          { name: "stRef" },
        ]
      },
      {
        name: "stASID",
        using: "BTREE",
        fields: [
          { name: "stASID" },
        ]
      },
      {
        name: "stVer",
        using: "BTREE",
        fields: [
          { name: "stVer" },
        ]
      },
      {
        name: "stMasterASID",
        using: "BTREE",
        fields: [
          { name: "stMasterASID" },
        ]
      },
      {
        name: "stDOB",
        using: "BTREE",
        fields: [
          { name: "stDOB" },
        ]
      },
      {
        name: "stGender",
        using: "BTREE",
        fields: [
          { name: "stGender" },
        ]
      },
    ]
  });
};
