const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsubscription', {
    idSubscription: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    suType: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    suTo: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    suPeriod: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    suFilter: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    suNext: {
      type: DataTypes.DATE,
      allowNull: false
    },
    suFilterType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    suLast: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tblsubscription',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSubscription" },
        ]
      },
      {
        name: "suType",
        using: "BTREE",
        fields: [
          { name: "suType" },
        ]
      },
    ]
  });
};
