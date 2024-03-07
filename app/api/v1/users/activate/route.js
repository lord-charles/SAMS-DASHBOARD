import { UserAccount } from "@/models/tbl_user_accounts";
import { Op, Sequelize } from "sequelize";
import bcrypt from "bcryptjs";

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

export async function PUT(request) {
  const origin = request.headers.get("origin");
  try {
    const body = await request.json();
    const userId = body?.userId;
    const status = body?.status;

    const existingUser = await UserAccount.findByPk(userId);
    if (!existingUser) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: {
          "Access-Control-Allow-Origin": origin || "*",
          "Content-Type": "application/json",
        },
      });
    }
    if (status !== undefined) {
      existingUser.status = status;
    }
    await existingUser.save();
    return new Response(
      JSON.stringify({ message: "User updated successfully!" }),
      {
        status: 200, // OK
        headers: {
          "Access-Control-Allow-Origin": origin || "*",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log("System error", error);
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
