const { sequelize } = require("@/db/connection");
const { DataTypes } = require("sequelize");

const UserRole = sequelize.define("tbl_user_roles", {
  // No additional fields needed
});

module.exports = {
  UserRole,
};
