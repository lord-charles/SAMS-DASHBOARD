import { UserAccount } from "@/models/tbl_user_accounts";
import { Op, Sequelize } from "sequelize";
import bcrypt from "bcryptjs";
import { Role } from "@/models/Role";
import { UserRole } from "@/models/UserRole";
import { Permission } from "@/models/Permission";
import { RolePermission } from "@/models/RolePermission";

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
export async function GET(request) {
  const userId = request.url.split("users/user/")[1];
  const origin = request.headers.get("origin");
  try {
    const user = await UserAccount.findByPk(userId, {
      attributes: ["username", "firstName", "middleName", "lastName", "email"],
      include: [
        {
          model: Role,
          through: UserRole,
          // attributes: [],
          include: [
            {
              model: Permission,
              through: RolePermission,
              // attributes: [],
            },
          ],
        },
      ],
    });

    return new Response(JSON.stringify(user?.toJSON()), {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
