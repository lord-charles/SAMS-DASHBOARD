import { query } from "../authConfig.mjs";

export async function createRolesTable() {
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS tbl_roles (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `;

  return await query({ query: createTableSQL });
}

export async function seedRoles() {
  const roles = ["admin", "user", "guest"];

  for (let roleName of roles) {
    const sql = `
      INSERT IGNORE INTO tbl_roles (name) VALUES (?);
    `;

    await query({
      query: sql,
      values: [roleName],
    });
  }
}
export async function createPermissionsTable() {
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS tbl_permissions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `;

  return await query({ query: createTableSQL });
}

export async function seedPermissions() {
  const permissions = ["create user", "edit user", "delete user", "create cms", "edit cms", "delete cms"];

  for (let permissionName of permissions) {
    const sql = `
      INSERT IGNORE INTO tbl_permissions (name) VALUES (?);
    `;

    await query({
      query: sql,
      values: [permissionName],
    });
  }
}

export async function createUserRolesTable() {
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS tbl_user_roles (
      userId INT,
      roleId INT,
      PRIMARY KEY (userId, roleId),
      FOREIGN KEY (userId) REFERENCES tbl_user_accounts(id) ON DELETE CASCADE,
      FOREIGN KEY (roleId) REFERENCES tbl_roles(id) ON DELETE CASCADE,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `;

  return await query({ query: createTableSQL });
}

export async function seedUserRoles() {
  // Replace with actual userIds and roleIds
  const userRolesData = [
    { userId: 1, roleId: 1 }, // user with id 1 has admin role
    // Add more entries as needed
  ];

  for (let data of userRolesData) {
    const sql = `
      INSERT IGNORE INTO tbl_user_roles (userId, roleId) VALUES (?, ?);
    `;

    await query({
      query: sql,
      values: [data.userId, data.roleId],
    });
  }
}

export async function createRolesPermissionsTable() {
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS tbl_role_permissions (
      roleId INT,
      permissionId INT,
      PRIMARY KEY (roleId, permissionId),
      FOREIGN KEY (roleId) REFERENCES tbl_roles(id) ON DELETE CASCADE,
      FOREIGN KEY (permissionId) REFERENCES tbl_permissions(id) ON DELETE CASCADE,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `;

  return await query({ query: createTableSQL });
}

export async function seedRolePermissions() {
  // Replace with actual roleIds and permissionIds
  const rolePermissionsData = [
    { roleId: 1, permissionId: 1 }, // admin role has create_user permission
    // Add more entries as needed
  ];

  for (let data of rolePermissionsData) {
    const sql = `
      INSERT IGNORE INTO tbl_role_permissions (roleId, permissionId) VALUES (?, ?);
    `;

    await query({
      query: sql,
      values: [data.roleId, data.permissionId],
    });
  }
}
