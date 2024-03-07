import { query } from "../authConfig.mjs";
import bcrypt from "bcryptjs";

export async function createAccountsTable() {
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS tbl_user_accounts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      firstName VARCHAR(255) NOT NULL,
      middleName VARCHAR(255) NULL,
      lastName VARCHAR(255) NOT NULL,
      username VARCHAR(255) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      status VARCHAR(50) DEFAULT 'active',
      password VARCHAR(255) NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `;

  return await query({ query: createTableSQL });
}

export async function seedAccounts() {
  const accounts = [
    {
      firstName: "Strathmore",
      lastName: "User",
      username: "STRATH1",
      email: "strathmoreuser@strathmore.edu",
      password: "ux@!2023",
    },
  ];

  for (let account of accounts) {
    account.password = await bcrypt.hash(account.password, 10);
    const sql = `
      INSERT IGNORE INTO tbl_user_accounts
      (firstName, lastName, username, email, password)
      VALUES (?, ?, ?, ?, ?);
    `;

    await query({
      query: sql,
      values: [
        account.firstName,
        account.lastName,
        account.username,
        account.email,
        account.password,
      ],
    });
  }
}
