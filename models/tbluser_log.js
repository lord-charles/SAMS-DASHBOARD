const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbluser_log', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    utime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    field: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    old: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    new: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pk: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbluser_log',
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
    ]
  });
};
