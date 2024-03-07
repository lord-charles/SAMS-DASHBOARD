const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtuploads', {
    idxUploads: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    section: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    originalfilename: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    utime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    show: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    validate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idxUsers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    validateUtime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    validateUsers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    s3upl: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    exists: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    checked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    fsdel: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tblsbrtuploads',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idxUploads" },
        ]
      },
    ]
  });
};
