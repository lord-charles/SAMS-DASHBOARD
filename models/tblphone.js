const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblphone', {
    idPhone: {
      type: DataTypes.STRING(22),
      allowNull: false,
      primaryKey: true
    },
    pBlocked: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pDefUser: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pDefClass: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pLastSeen: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pLang: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "ENG"
    }
  }, {
    sequelize,
    tableName: 'tblphone',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPhone" },
        ]
      },
      {
        name: "pDefUser",
        using: "BTREE",
        fields: [
          { name: "pDefUser" },
        ]
      },
    ]
  });
};
