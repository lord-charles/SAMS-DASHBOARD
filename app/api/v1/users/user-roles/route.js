import { Op } from "sequelize";
import { Role } from "@/models/Role";
import { Permission } from "@/models/Permission";
import { RolePermission } from "@/models/RolePermission";
import { UserAccount } from "@/models/tbl_user_accounts";
import { UserRole } from "@/models/UserRole";
import { sequelize } from "@/db/connection";

export async function OPTIONS(request) {
  const origin = request.headers.get("origin");
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function POST(request) {
  const origin = request.headers.get("origin");
  let message = "Role(s) assigned successfully!";

  try {
    const body = await request.json();
    const userId = body?.userId;
    const roleIds = body?.roleIds;
    const user = await UserAccount.findByPk(userId);

    if (user && roleIds?.length > 0) {
      try {
        // Start a transaction
        await sequelize.transaction(async (t) => {
          if (roleIds[0] === "") {
            await UserRole.destroy({
              where: {
                userId: userId,
              },
              transaction: t,
            });
            message = "Role(s) removed successfully!";
          } else {
            // Fetch the current user roles
            const currentUserRoles = await UserRole.findAll({
              where: {
                userId: userId,
              },
              transaction: t,
            });

            // Get the existing roleIds
            const existingRoleIds = currentUserRoles.map((userRole) =>
              String(userRole.roleId)
            );

            // Remove user roles that are not in the desired roleIds
            const rolesToRemove = existingRoleIds.filter(
              (roleId) => !roleIds.includes(roleId)
            );
            await UserRole.destroy({
              where: {
                roleId: rolesToRemove,
                userId: userId,
              },
              transaction: t,
            });

            // Create new user roles for roleIds that are not already assigned
            const rolesToAdd = roleIds.filter(
              (roleId) => !existingRoleIds.includes(roleId)
            );
            for (const roleIdToAdd of rolesToAdd) {
              await UserRole.create(
                {
                  roleId: roleIdToAdd,
                  userId: userId,
                },
                { transaction: t }
              );
            }
          }
        });

        // Transaction was successful
        console.log("Transaction committed successfully");
        return new Response(JSON.stringify({ message }), {
          headers: {
            "Access-Control-Allow-Origin": origin || "*",
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        // Transaction failed
        console.error("Transaction failed:", error);
      }
    } else {
      return new Response(
        JSON.stringify(
          { error: "User not found or missing roles!" },
          {
            status: 404,
          }
        ),
        {
          headers: {
            "Access-Control-Allow-Origin": origin || "*",
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        error: "Unknown error, please contact your system Administrator.",
      }),
      {
        status: 500,
      }
    );
  }
}
