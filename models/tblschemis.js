const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblschemis', {
    idEMIS: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    emisRef: {
      type: DataTypes.STRING(12),
      allowNull: true,
      comment: "tblschool::sRef"
    },
    emisState: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    emisCounty: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    emisPayam: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    emisType: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    emisName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    emisNorm: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    emisLat: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    emisLon: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblschemis',
    timestamps: false,
    indexes: [
      {
        name: "emisRef",
        using: "BTREE",
        fields: [
          { name: "emisRef" },
        ]
      },
      {
        name: "idEMIS",
        using: "BTREE",
        fields: [
          { name: "idEMIS" },
        ]
      },
    ]
  });
};
