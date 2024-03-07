const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kbmapping', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    kobo_form: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    kobo_field: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    kobo_type: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    prt_field: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kbmapping',
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
