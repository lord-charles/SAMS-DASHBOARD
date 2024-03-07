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
  const date = searchParams.get("date");
  const origin = request.headers.get("origin");
  try {
    const cachedValue = await redis.get(`live-data:${date}`);
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
      COUNT(DISTINCT sch.sRef) AS 'number_of_states',
  
      SUM(CASE WHEN att.atPresent=1 THEN 1 ELSE 0 END) AS 'total_present',
      SUM(CASE WHEN att.atPresent=0 THEN 1 ELSE 0 END) AS 'total_absent',
      SUM(CASE WHEN stu.stGender='M' AND att.atPresent=1 THEN 1 ELSE 0 END) AS 'male_present',
      SUM(CASE WHEN stu.stGender='F' AND att.atPresent=1 THEN 1 ELSE 0 END) AS 'female_present',
      SUM(CASE WHEN stu.stGender='M' AND att.atPresent=0 THEN 1 ELSE 0 END) AS 'male_absent',
      SUM(CASE WHEN stu.stGender='F' AND att.atPresent=0 THEN 1 ELSE 0 END) AS 'female_absent',
      COUNT(att.idAtt) AS 'total_students'
  FROM tblattendance_diff AS att
      INNER JOIN tblform AS frm ON att.atFormID = frm.idForm
      INNER JOIN tblschool AS sch ON frm.fSchID = sch.idSchool
      INNER JOIN tblstudent AS stu ON att.atStudentID = stu.idStudent
  WHERE
      att.atSuperceded = '0'
      AND att.atDay = ?
      AND sch.sSchType <> 'ADM';
  `,
      values: [date],
    });
    await redis.set(`live-data:${date}`, JSON.stringify(states[0]));

    return new Response(JSON.stringify(states[0]), {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {}
}
