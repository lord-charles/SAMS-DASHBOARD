import { verifyJwt } from "@/app/lib/jwt";
import { redis } from "@/app/lib/redis";
import { query } from "@/db/config.js";

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
  const year = searchParams.get("year");
  const origin = request.headers.get("origin");
  try {
    const cachedValue = await redis.get(`dashboard-statistics-teacher:${year}`);
    if (cachedValue) {
      return new Response(cachedValue, {
        headers: {
          "Access-Control-Allow-Origin": origin || "*",
          "Content-Type": "application/json",
        },
      });
    }
    const states = await query({
      query: `SELECT
      CASE 
          WHEN gender IN ('M', 'Male') THEN 'Male'
          WHEN gender IN ('F', 'Female') THEN 'Female'
          ELSE 'Unknown'
      END AS gender,
      COUNT(*) AS count
      FROM tblteacherlist
      WHERE active = 1
      AND year = ?
      GROUP BY CASE 
              WHEN gender IN ('M', 'Male') THEN 'Male'
              WHEN gender IN ('F', 'Female') THEN 'Female'
              ELSE 'Unknown'
           END;`,
      values: [year],
    });
    await redis.set(
      `dashboard-statistics-teacher:${year}`,
      JSON.stringify(states)
    );

    return new Response(JSON.stringify(states), {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
