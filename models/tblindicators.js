const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblindicators', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iType: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    iSubType: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    iWhen: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    iValue: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    iWho: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    iIntValue: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tblindicators',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "iType",
        using: "BTREE",
        fields: [
          { name: "iType" },
          { name: "iSubType" },
        ]
      },
    ]
  });
};
