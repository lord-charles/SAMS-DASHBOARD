import { Op } from "sequelize";
import { Permission } from "@/models/Permission";

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
    // const permissions = await UserAccount.findAll();
    // console.log(permissions);
    let permissions = [];
    if (searchQuery) {
      permissions = await Permission.findAndCountAll({
        where: {
          [Op.or]: [{ name: { [Op.like]: `%${searchQuery}%` } }],
        },
        offset: (page - 1) * pageSize,
        limit: pageSize,
      });
    } else {
      if (page >= 1) {
        permissions = await Permission.findAndCountAll({
          offset: (page - 1) * pageSize,
          limit: pageSize,
        });
      } else {
        permissions = await Permission.findAndCountAll();
      }
    }
    return new Response(JSON.stringify(permissions), {
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
    const permissionName = body?.name;
    const existingPermission = await Permission.findOne({
      where: { name: permissionName },
    });

    if (existingPermission) {
      const errorMessage = "Permission with this name already exists!";
      return new Response(JSON.stringify({ error: errorMessage }), {
        status: 400, // Bad Request
        headers: {
          "Access-Control-Allow-Origin": origin || "*",
          "Content-Type": "application/json",
        },
      });
    }
    const newPermission = await Permission.create({
      name: permissionName,
    });

    const message = "Permission created successfully!";
    return new Response(JSON.stringify({ message }), {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
