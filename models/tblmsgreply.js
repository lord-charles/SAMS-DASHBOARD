const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblmsgreply', {
    idMsgReply: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mrMsgID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mrReply: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    mrSuccess: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mrRef: {
      type: DataTypes.STRING(12),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblmsgreply',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idMsgReply" },
        ]
      },
      {
        name: "mrMsgID",
        using: "BTREE",
        fields: [
          { name: "mrMsgID" },
        ]
      },
      {
        name: "mrMsgID_2",
        using: "BTREE",
        fields: [
          { name: "mrMsgID" },
        ]
      },
    ]
  });
};
