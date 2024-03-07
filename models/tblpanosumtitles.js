const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblpanosumtitles', {
    idx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    indicator: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    indno: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    shortcode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    relation: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    calculation: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    utime: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tblpanosumtitles',
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
