const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblsbrtbank', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    schoolCode: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    schoolName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bankName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bankAccount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bankBranch: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    preparedBy: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    accountName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ledgerSubmissions: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    bankUploads: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ts_to: {
      type: DataTypes.DATE,
      allowNull: true
    },
    upload_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrtbank',
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
