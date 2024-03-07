const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblimpactschacc_uploads', {
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
    },
    s3upl: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    checked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    fsdel: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tblimpactschacc_uploads',
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
