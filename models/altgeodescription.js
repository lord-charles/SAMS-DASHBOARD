const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('altgeodescription', {
    gdRef: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gdName: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    gdDescription: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    gdGeo1Name: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    gdGeo2Name: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    gdGeo3Name: {
      type: DataTypes.STRING(24),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'altgeodescription',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "gdRef" },
        ]
      },
    ]
  });
};
