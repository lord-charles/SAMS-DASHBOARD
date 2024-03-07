const { sequelize } = require("@/db/connection");
const { DataTypes } = require("sequelize");
const Permission = sequelize.define("tbl_permissions", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = {
  Permission,
};
