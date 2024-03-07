const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblstoreddownloads', {
    idStoredDownload: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sdSql: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    sdTitle: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    sdHeadings: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    sdDescription: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    sdCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    sdUsed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tblstoreddownloads',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idStoredDownload" },
        ]
      },
      {
        name: "sdSql",
        using: "BTREE",
        fields: [
          { name: "sdSql", length: 1000 },
        ]
      },
    ]
  });
};
