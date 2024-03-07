const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('altgeo_190215', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    agGeoID: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "same as tblPayam payam ID where possible, but unique 'payam id'"
    },
    agGeo1: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    agGeo2: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    agGeo3: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    agName: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "link to altGeoDescription"
    },
    agGeo3abbrv: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    agGeo2ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "uniqe code for geo2 in this model"
    },
    agGeo3ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "unique code for geo3 in this model"
    },
    agGeo2Alt: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "alt code from 10 state model geo data)"
    }
  }, {
    sequelize,
    tableName: 'altgeo_190215',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "agGeo1Name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "agGeoID" },
          { name: "agName" },
        ]
      },
      {
        name: "agGeoID",
        using: "BTREE",
        fields: [
          { name: "agGeoID" },
        ]
      },
      {
        name: "agName",
        using: "BTREE",
        fields: [
          { name: "agName" },
        ]
      },
    ]
  });
};
