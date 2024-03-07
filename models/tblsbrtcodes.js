const { sequelize } = require("@/db/connection");
const { DataTypes } = require("sequelize");

  const SbrtCode = sequelize.define('SbrtCode', {
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    examples: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    budgetCode: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tblsbrtcodes',
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
      {
        name: "cht",
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });

module.exports={
  SbrtCode
}
