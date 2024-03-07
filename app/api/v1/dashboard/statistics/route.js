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
    const cachedValue = await redis.get(`dashboard-stats:${year}`);
    if (cachedValue) {
      return new Response(cachedValue, {
        headers: {
          "Access-Control-Allow-Origin": origin || "*",
          "Content-Type": "application/json",
        },
      });
    }
    const studentsResults = await query({
      query: `SELECT
      COUNT(DISTINCT tblschool.idSchool) AS number_of_schools,
      SUM(CASE WHEN tblstudent.stSpecialNeeds = '1' THEN 1 ELSE 0 END) AS students_with_disability,
      COUNT(tblstudent.idStudent) AS enrolled_learners
  FROM
      tblenrolment
      INNER JOIN tblstudent ON tblenrolment.eStudentID = tblstudent.idStudent
      INNER JOIN tblform ON tblenrolment.eFormID = tblform.idForm
      INNER JOIN tblschool ON tblform.fSchID = tblschool.idSchool
  WHERE
      YEAR(tblenrolment.eFrom) = ? AND
      tblstudent.stVer = '0' AND
      tblform.fVer = '0' AND
      tblschool.sVer = '0' AND
      ((tblform.fYear >= '6' AND UPPER(tblschool.sSchType)<>'SEC') OR
      (tblform.fYear <= '4' AND UPPER(tblschool.sSchType)='SEC')) AND
      (tblstudent.stFName <> 'unknown' AND tblstudent.stLName <> 'student');
  `,
      values: [year],
    });
    const validatedEligible = await query({
      query: `
      SELECT
      SUM(COALESCE(tblctreport.active, 0)) AS eligible,
      SUM(COALESCE(tblctreport.validated, 0)) AS validated
FROM
    tblctreport
WHERE
    tblctreport.year = ?;
      `,
      values: [year],
    });
    const teachers = await query({
      query: `
        SELECT 
            COUNT(*) AS count
        FROM tblteacherlist
        WHERE active = 1
        AND year = ?`,
      values: [year],
    });

    const combinedResult = {
      ...studentsResults[0],
      ...validatedEligible[0],
      ...teachers[0],
    };
    await redis.set(`dashboard-stats:${year}`, JSON.stringify(combinedResult));

    return new Response(JSON.stringify(combinedResult), {
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
