const { sequelize } = require("@/db/connection");
const { DataTypes } = require("sequelize");

const RolePermission = sequelize.define("tbl_role_permissions", {
  // No additional fields needed
});
module.exports = {
  RolePermission,
};
