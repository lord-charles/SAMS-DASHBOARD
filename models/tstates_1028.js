const { sequelize } = require("@/db/connection");
const { DataTypes } = require("sequelize");

  const State1028 = sequelize.define('tstates_1028', {
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
    tableName: 'tstates_1028',
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
    State1028
  };

