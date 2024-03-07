const { Sequelize } = require("sequelize");
const mysql2 = require("mysql2");

export const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    dialectModule: mysql2,
    logging: false,
  }
);
