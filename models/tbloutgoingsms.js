const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbloutgoingsms', {
    idOutgoingSMS: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    osSent: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    osMsg: {
      type: DataTypes.STRING(175),
      allowNull: true
    },
    osTo: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    osQueued: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tbloutgoingsms',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idOutgoingSMS" },
        ]
      },
      {
        name: "osSent",
        using: "BTREE",
        fields: [
          { name: "osSent" },
        ]
      },
    ]
  });
};
