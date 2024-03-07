import mysql from "mysql2/promise";
import { config } from "dotenv";

// Configure dotenv
config({ path: "./.env.local" });

export async function query({ query, values = [] }) {
  const dbConnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: 3306,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });
  try {
    const [results] = await dbConnection.execute(query, values);
    dbConnection.end();
    return results;
  } catch (error) {
    throw Error(error.message);
  }
}
