const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblschauth', {
    idSchAuth: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    saRef: {
      type: DataTypes.STRING(12),
      allowNull: false,
      unique: "saRef"
    },
    saKey: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "api\/edit auth key"
    },
    saExpiry: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "expiry date for this key"
    }
  }, {
    sequelize,
    tableName: 'tblschauth',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSchAuth" },
        ]
      },
      {
        name: "saRef",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "saRef" },
        ]
      },
    ]
  });
};
