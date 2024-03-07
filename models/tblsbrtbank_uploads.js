const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtbank_uploads', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    filesize: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ext: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ts_from: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrtbank_uploads',
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
