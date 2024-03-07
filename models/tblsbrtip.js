const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtip', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ip: {
      type: DataTypes.CHAR(15),
      allowNull: false,
      primaryKey: true
    },
    attempts: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    failed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "failed in the last hour"
    },
    event: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    last: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrtip',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idx" },
          { name: "ip" },
        ]
      },
      {
        name: "ip",
        using: "BTREE",
        fields: [
          { name: "ip" },
        ]
      },
    ]
  });
};
