const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tlog', {
    idtLog: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    logTimestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    logClass: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    logSeverity: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    logMessage: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    logReference: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tlog',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idtLog" },
        ]
      },
      {
        name: "logTimestamp",
        using: "BTREE",
        fields: [
          { name: "logTimestamp" },
        ]
      },
    ]
  });
};
