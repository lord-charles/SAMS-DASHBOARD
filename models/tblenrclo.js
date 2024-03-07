const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblenrclo', {
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    day: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    acFr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    acTo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ctPayFr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ctPayTo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblenrclo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "year" },
        ]
      },
    ]
  });
};
