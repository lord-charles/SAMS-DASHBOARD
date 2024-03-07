import { signJwtAccessToken } from "@/app/lib/jwt";
import { UserAccount } from "@/models/tbl_user_accounts";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const body = await request.json();
  let user;

  try {
    user = await UserAccount.findOne({
      where: {
        username: body?.username,
      },
    });
    if (user && user?.status !== "active") {
      return new Response(
        JSON.stringify({
          error:
            "This account has been deactivated. Please contact your System administrator.",
        }),
        {
          status: 403,
        }
      );
    }
  } catch (error) {
    console.error("Database error:", error);
    return new Response(
      JSON.stringify({
        error: "Service is currently unavailable. Please try again later.",
      }),
      {
        status: 503,
      }
    );
  }
  if (user && (await bcrypt.compare(body?.password, user?.password))) {
    user = user.toJSON();
    const accessToken = signJwtAccessToken(user);
    const result = {
      ...user,
      success: true,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } else {
    return new Response(JSON.stringify({ error: "Invalid credentials!" }), {
      status: 401,
    });
  }
}
