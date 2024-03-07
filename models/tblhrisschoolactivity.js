const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblhrisschoolactivity', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    school_code: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    report_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    report_from: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    report_to: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    days_reported: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    staff_reported: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_classes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fortnight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    flag: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblhrisschoolactivity',
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
