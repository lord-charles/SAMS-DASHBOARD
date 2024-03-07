import { createAccountsTable, seedAccounts } from "./accounts.mjs";
import { createCMSTable } from "./cms.mjs";
import {
  createPermissionsTable,
  createRolesPermissionsTable,
  createRolesTable,
  createUserRolesTable,
  seedPermissions,
  seedRolePermissions,
  seedRoles,
  seedUserRoles,
} from "./permissions.mjs";

async function main() {
  await createAccountsTable();
  await seedAccounts();

  await createRolesTable();
  await seedRoles();
  await createPermissionsTable();
  await seedPermissions();
  await createUserRolesTable();
  await seedUserRoles();
  await createRolesPermissionsTable();
  await seedRolePermissions();

  await createCMSTable();
  console.log("Seeding completed.");
}

main().catch(console.error);
