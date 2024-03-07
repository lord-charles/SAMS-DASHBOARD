const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblholidays', {
    idHoliday: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iDay: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    iReason: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    iType: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    iIndex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    iSort: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    iUser: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tblholidays',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idHoliday" },
        ]
      },
    ]
  });
};
