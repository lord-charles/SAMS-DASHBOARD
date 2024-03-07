const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpstudentage', {
    stRef: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    },
    stDOB: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "date from student record"
    },
    stAge: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Age in years"
    },
    stCalc: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "when calculated"
    },
    stGender: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    stFormYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stSRef: {
      type: DataTypes.STRING(12),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tmpstudentage',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "stRef" },
        ]
      },
      {
        name: "stGender",
        using: "BTREE",
        fields: [
          { name: "stGender" },
        ]
      },
      {
        name: "saSRef",
        using: "BTREE",
        fields: [
          { name: "stSRef" },
        ]
      },
      {
        name: "stAge",
        using: "BTREE",
        fields: [
          { name: "stAge" },
        ]
      },
      {
        name: "stSRef",
        using: "BTREE",
        fields: [
          { name: "stSRef" },
        ]
      },
    ]
  });
};
