const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcounties_1028', {
    idCounty: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cName: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    cState: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: -1
    },
    cEMISNo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cShape: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "county shape coords kml"
    },
    cShapeMeta: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tcounties_1028',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCounty" },
        ]
      },
      {
        name: "cState",
        using: "BTREE",
        fields: [
          { name: "cState" },
        ]
      },
    ]
  });
};
