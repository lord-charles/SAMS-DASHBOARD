const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblteacheratt', {
    idTeacherAtt: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    taDay: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    taPresent: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    taTeacherID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    taMethod: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    taTS: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    taSuperceded: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    taSchID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tblteacheratt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTeacherAtt" },
        ]
      },
      {
        name: "taSchID",
        using: "BTREE",
        fields: [
          { name: "taSchID" },
        ]
      },
      {
        name: "taTeacherID",
        using: "BTREE",
        fields: [
          { name: "taTeacherID" },
        ]
      },
    ]
  });
};
