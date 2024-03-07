import { verifyJwt } from "@/app/lib/jwt";

export async function GET(request) {
  const authHeader = request.headers.get("Authorization");
  let accessToken;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    accessToken = authHeader.split(" ")[1]; // Extracting the token
  }

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(
      JSON.stringify({
        error: "Unauthorized",
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const hello = {
    message: "Hello there!",
  };

  return new Response(JSON.stringify(hello), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
