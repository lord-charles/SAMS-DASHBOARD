const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtarchivedreports', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ts_fr: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fn: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    s3: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    id_report: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    type_report: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrtarchivedreports',
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
