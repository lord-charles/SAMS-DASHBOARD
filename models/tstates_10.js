const { sequelize } = require("@/db/connection");
const { DataTypes } = require("sequelize");

  const State10 = sequelize.define('tstates_10', {
    idState: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sState: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    sAbbrv: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    sActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: -1
    },
    sEMISNo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sShape: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sGeoMeta: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tstates_10',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idState" },
        ]
      },
    ]
  });

  module.exports = {
    State10,
  };