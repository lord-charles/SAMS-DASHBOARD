const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpenrbyday', {
    rDay: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    rFemale: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rState: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rIdx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rSch: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    rMale: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rLastUpdate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "last touch"
    },
    rPlaceholders: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tmpenrbyday',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rIdx" },
        ]
      },
      {
        name: "rDaySch",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rDay" },
          { name: "rSch" },
        ]
      },
      {
        name: "rSch",
        using: "BTREE",
        fields: [
          { name: "rSch" },
        ]
      },
    ]
  });
};
