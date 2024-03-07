const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtusers', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idxref: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    active: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "y-yes,n-no,b-banned"
    },
    admin: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uplview: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uplmgmt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    submgmt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subedit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rptedit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bnkview: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    utime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    added: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrtusers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idx" },
        ]
      },
    ]
  });
};
