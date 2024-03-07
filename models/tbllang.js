const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbllang', {
    lMsgId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lMsg: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    lLang: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'tbllang',
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
    ]
  });
};
