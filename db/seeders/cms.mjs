import { query } from "../authConfig.mjs";

export async function createCMSTable() {
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS tbl_cms (
      id INT AUTO_INCREMENT PRIMARY KEY,
      userId INT,
      title VARCHAR(255) NULL,
      description LONGTEXT NOT NULL,
      type VARCHAR(255) NOT NULL,
      FOREIGN KEY (userId) REFERENCES tbl_user_accounts(id) ON DELETE CASCADE,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `;

  return await query({ query: createTableSQL });
}

// export async function seedCMS() {
//   const accounts = [
//     {
//       firstName: "Strathmore",
//       lastName: "User",
//       username: "STRATH1",
//       email: "strathmoreuser@strathmore.edu",
//       password: "ux@!2023",
//     },
//   ];

//   for (let account of accounts) {
//     account.password = await bcrypt.hash(account.password, 10);
//     const sql = `
//       INSERT IGNORE INTO tbl_user_accounts
//       (firstName, lastName, username, email, password)
//       VALUES (?, ?, ?, ?, ?);
//     `;

//     await query({
//       query: sql,
//       values: [
//         account.firstName,
//         account.lastName,
//         account.username,
//         account.email,
//         account.password,
//       ],
//     });
//   }
// }
