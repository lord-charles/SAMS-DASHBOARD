const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpenrsummary', {
    rDay: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    rSch: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    rEnr: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rptID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rMale: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rFemale: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rNPMale: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rNPFemale: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tmpenrsummary',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rptID" },
        ]
      },
      {
        name: "rSch",
        using: "BTREE",
        fields: [
          { name: "rSch" },
        ]
      },
      {
        name: "rDaySch",
        using: "BTREE",
        fields: [
          { name: "rDay" },
          { name: "rSch" },
        ]
      },
      {
        name: "rDay",
        using: "BTREE",
        fields: [
          { name: "rDay" },
        ]
      },
    ]
  });
};
