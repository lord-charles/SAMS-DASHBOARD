const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpimpactauthorised', {
    aiIDX: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    aiRef: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    aiAllowedTeachers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    aiRequiredData: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    aiPeriod: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aiYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aiApprovedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    aiSAMSRef: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    aiSent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "always zero, flag used to control sending on hris"
    },
    chkSync: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    chkError: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmpimpactauthorised',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "aiIDX" },
        ]
      },
      {
        name: "aiSAMSRef",
        using: "BTREE",
        fields: [
          { name: "aiSAMSRef" },
        ]
      },
    ]
  });
};
