const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblopts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    oVal: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    oType: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    oName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    oSort: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblopts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "iTypeName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "oType" },
          { name: "oName" },
        ]
      },
    ]
  });
};
