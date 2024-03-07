import { Op } from "sequelize";
import { Role } from "@/models/Role";
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
  const { searchParams } = new URL(request.url);
  const origin = request.headers.get("origin");
  const page = parseInt(searchParams.get("page"), 10);
  const searchQuery = searchParams.get("query");
  const pageSize = 10;
  try {
    // const roles = await UserAccount.findAll();
    // console.log(roles);
    let roles = [];
    if (searchQuery) {
      roles = await Role.findAndCountAll({
        where: {
          [Op.or]: [{ name: { [Op.like]: `%${searchQuery}%` } }],
        },
        offset: (page - 1) * pageSize,
        limit: pageSize,
      });
    } else {
      if (page >= 1) {
        roles = await Role.findAndCountAll({
          offset: (page - 1) * pageSize,
          limit: pageSize,
        });
      } else {
        roles = await Role.findAndCountAll();
      }
    }
    return new Response(JSON.stringify(roles), {
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

export async function POST(request) {
  const origin = request.headers.get("origin");

  try {
    const body = await request.json();
    const roleName = body?.name;
    const permissionIds = body?.permissionIds;
    const existingRole = await Role.findOne({
      where: { name: roleName },
    });

    if (existingRole) {
      const errorMessage = "Role with this name already exists!";
      return new Response(JSON.stringify({ error: errorMessage }), {
        status: 400, // Bad Request
        headers: {
          "Access-Control-Allow-Origin": origin || "*",
          "Content-Type": "application/json",
        },
      });
    }
    const [role, created] = await Role.findOrCreate({
      where: { name: roleName },
    });

    if (created && permissionIds?.length > 0) {
      const permissions = await Permission.findAll({
        where: { id: permissionIds },
      });

      for (const permission of permissions) {
        await RolePermission.findOrCreate({
          where: {
            roleId: role.id,
            permissionId: permission.id,
          },
        });
      }
    }

    const message = "Role created successfully!";
    return new Response(JSON.stringify({ message }), {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
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
