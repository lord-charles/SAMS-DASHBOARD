const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpmapdata', {
    coordSRef: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    },
    coordSchLng: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "actual from schdata"
    },
    coordSchLat: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      comment: "actual from sch data"
    },
    coordMapLng: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      comment: "actual or average pos of schools in payam or sch in county"
    },
    coordMapLat: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tmpmapdata',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "coordSRef" },
        ]
      },
    ]
  });
};
