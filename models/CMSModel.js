const { sequelize } = require("@/db/connection");
const { DataTypes } = require("sequelize");
const { UserAccount } = require("./tbl_user_accounts");

const CMSModel = sequelize.define(
  "tbl_cms",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "tbl_cms",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      }
    ],
  }
);
CMSModel.belongsTo(UserAccount, { foreignKey: 'userId' });

module.exports = {
  CMSModel,
};