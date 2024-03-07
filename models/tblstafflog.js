const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblstafflog', {
    idStaffLog: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    slTS: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    slType: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "add\/remove"
    },
    slSchRef: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "school"
    },
    slStaffRef: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "teacher"
    },
    slUserRef: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "user"
    },
    slSource: {
      type: DataTypes.STRING(22),
      allowNull: false,
      comment: "phone no"
    }
  }, {
    sequelize,
    tableName: 'tblstafflog',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idStaffLog" },
        ]
      },
    ]
  });
};
