const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsstischacc_log', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ts: {
      type: DataTypes.DATE,
      allowNull: true
    },
    field_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    value_old: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    value_new: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    pk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsstischacc_log',
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
        name: "pk",
        using: "BTREE",
        fields: [
          { name: "pk" },
        ]
      },
      {
        name: "dash",
        using: "BTREE",
        fields: [
          { name: "pk" },
          { name: "field_name" },
          { name: "value_new" },
          { name: "user_id" },
          { name: "ts" },
        ]
      },
    ]
  });
};
