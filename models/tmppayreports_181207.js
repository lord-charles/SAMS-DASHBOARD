const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmppayreports_181207', {
    Name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "Name"
    },
    Deleted: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    Month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FacilityID: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    FacilityName: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    MaxStaff: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "PTR"
    },
    NoStaff: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Number that got paid"
    },
    UserID: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    IDX: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idxidx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NoPaid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "new aug 18"
    },
    ReportPeriod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "new aug 18"
    }
  }, {
    sequelize,
    tableName: 'tmppayreports_181207',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idxidx" },
        ]
      },
      {
        name: "Name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Name" },
        ]
      },
      {
        name: "Deleted",
        using: "BTREE",
        fields: [
          { name: "Deleted" },
        ]
      },
      {
        name: "Time",
        using: "BTREE",
        fields: [
          { name: "Time" },
        ]
      },
      {
        name: "FacilityID",
        using: "BTREE",
        fields: [
          { name: "FacilityID" },
        ]
      },
    ]
  });
};
