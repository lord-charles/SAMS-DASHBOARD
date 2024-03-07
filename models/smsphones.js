const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('smsphones', {
    idSmsPhone: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    smsPhone: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    smsSchRef: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    smsPri: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 99999999
    },
    smsFrom: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    smsName: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'smsphones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSmsPhone" },
        ]
      },
      {
        name: "smsPhonePri",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "smsSchRef" },
          { name: "smsPri" },
        ]
      },
    ]
  });
};
