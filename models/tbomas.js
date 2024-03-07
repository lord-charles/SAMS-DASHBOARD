const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbomas', {
    idBomas: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "auto index primary key"
    },
    bState: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "State"
    },
    bCounty: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "County"
    },
    bPayam: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "Payam"
    },
    bName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "Name"
    }
  }, {
    sequelize,
    tableName: 'tbomas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idBomas" },
        ]
      },
      {
        name: "bSCP",
        using: "BTREE",
        fields: [
          { name: "bState" },
          { name: "bCounty" },
          { name: "bPayam" },
        ]
      },
    ]
  });
};
