const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpattsummary', {
    idAttSummary: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    asRef: {
      type: DataTypes.STRING(12),
      allowNull: false,
      comment: "link to school sRef"
    },
    asLast: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "last date attendance reported"
    },
    asCountEver: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "total reports made"
    },
    asCountYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "# years been reporting"
    },
    asBoys: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "# boys last report"
    },
    asGirls: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "# girls last reported"
    },
    asFormCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    asFormReported: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "# forms reported upon"
    },
    asLastUpdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "last updated"
    }
  }, {
    sequelize,
    tableName: 'tmpattsummary',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAttSummary" },
        ]
      },
      {
        name: "asRef",
        using: "BTREE",
        fields: [
          { name: "asRef" },
        ]
      },
    ]
  });
};
