const { sequelize } = require("@/db/connection");
const { DataTypes } = require("sequelize");
const { Role } = require("./Role");
const { UserRole } = require("./UserRole");

const UserAccount = sequelize.define(
  "tbl_user_accounts",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    middleName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "username",
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "email",
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "active",
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "tbl_user_accounts",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "username",
        unique: true,
        using: "BTREE",
        fields: [{ name: "username" }],
      },
      {
        name: "email",
        unique: true,
        using: "BTREE",
        fields: [{ name: "email" }],
      },
    ],
  }
);
UserAccount.belongsToMany(Role, {
  through: UserRole,
  foreignKey: "userId",
  otherKey: "roleId",
});

module.exports = {
  UserAccount,
};
