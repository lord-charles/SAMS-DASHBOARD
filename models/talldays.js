const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('talldays', {
    dDay: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    dReportRequired: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dTS: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'talldays',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dDay" },
        ]
      },
    ]
  });
};
