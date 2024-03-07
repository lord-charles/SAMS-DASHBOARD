const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblpanosumdata', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    shortcode: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    target: {
      type: DataTypes.DECIMAL(30,4),
      allowNull: false
    },
    actual: {
      type: DataTypes.DECIMAL(30,4),
      allowNull: false
    },
    decimals: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    utimeTarget: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    utimeActual: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tblpanosumdata',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idx" },
        ]
      },
    ]
  });
};
