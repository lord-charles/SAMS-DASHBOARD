const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cachestudent', {
    idStudent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stFName: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    stMNames: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: ""
    },
    stLName: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    stDob: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stGender: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    stRef: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    },
    stASID: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    fRef: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    fDesc: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    eRef: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    sRef: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    sName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    idState: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    idCounty: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    idPayam: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    used: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cachestudent',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "stRef" },
        ]
      },
      {
        name: "idState",
        using: "BTREE",
        fields: [
          { name: "idState" },
        ]
      },
      {
        name: "idCounty",
        using: "BTREE",
        fields: [
          { name: "idCounty" },
        ]
      },
      {
        name: "idPayam",
        using: "BTREE",
        fields: [
          { name: "idPayam" },
        ]
      },
    ]
  });
};
