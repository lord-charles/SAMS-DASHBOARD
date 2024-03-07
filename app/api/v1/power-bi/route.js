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
export async function GET(request) {
  const origin = request.headers.get("origin");
  try {
    // const users = await UserAccount.findAll();
    // console.log(users);

    return new Response(JSON.stringify(users), {
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
    const result = await fetch(
      `https://api.powerbi.com/v1.0/myorg/groups/${process.env.POWERBI_GROUP_ID}/reports/${process.env.POWERBI_REPORT_ID}/GenerateToken`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const token = await result.json();
    return new Response(JSON.stringify(token), {
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
