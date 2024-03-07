const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblalerts', {
    idAlert: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    aDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    aState: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aCounty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aPayam: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    aSch: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    aType: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    aShortMsg: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    aLongMsg: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tblalerts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAlert" },
        ]
      },
      {
        name: "aDate",
        using: "BTREE",
        fields: [
          { name: "aDate" },
          { name: "aType" },
        ]
      },
    ]
  });
};
