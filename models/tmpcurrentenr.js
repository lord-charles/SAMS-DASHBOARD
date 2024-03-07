const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpcurrentenr', {
    sRef: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    ppEnrYr: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ppEnr: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    enM: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    enF: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en1M: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en1F: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en2M: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en2F: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en3M: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en3F: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en4M: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en4F: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en5M: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en5F: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en6M: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en6F: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en7M: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en7F: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en8M: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    en8F: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tmpcurrentenr',
    timestamps: false,
    indexes: [
      {
        name: "sRef",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sRef" },
        ]
      },
    ]
  });
};
