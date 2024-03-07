const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbltrackerfiles', {
    idxFiles: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    method: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    utime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    from: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    attachment: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    county: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    process: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    show: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tableversion: {
      type: DataTypes.STRING(4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tbltrackerfiles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idxFiles" },
        ]
      },
    ]
  });
};
