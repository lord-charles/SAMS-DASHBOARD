const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbluiddata', {
    idUidData: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    udUID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    udKey: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    udValue: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbluiddata',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idUidData" },
        ]
      },
      {
        name: "udUID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "udUID" },
          { name: "udKey" },
        ]
      },
    ]
  });
};
