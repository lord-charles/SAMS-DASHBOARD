const { sequelize } = require("@/db/connection");
const { DataTypes } = require("sequelize");

const { Permission } = require("./Permission");
const { RolePermission } = require("./RolePermission");

const Role = sequelize.define("tbl_roles", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
Role.belongsToMany(Permission, {
  through: RolePermission,
  foreignKey: "roleId",
  otherKey: "permissionId",
});
module.exports = {
  Role,
};
