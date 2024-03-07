const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('altgeomap', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    gmFacility: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "link to Facility\/School sRef"
    },
    gmGeoID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "ref to a ID not geoID in altGeo"
    }
  }, {
    sequelize,
    tableName: 'altgeomap',
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
        name: "gmFacility",
        using: "BTREE",
        fields: [
          { name: "gmFacility" },
        ]
      },
      {
        name: "gmGeoID",
        using: "BTREE",
        fields: [
          { name: "gmGeoID" },
        ]
      },
    ]
  });
};
