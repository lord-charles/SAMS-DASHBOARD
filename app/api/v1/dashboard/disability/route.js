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
    const cachedValue = await redis.get(
      `dashboard-statistics-disability:${year}`
    );
    if (cachedValue) {
      console.log("cachedValue");
      return new Response(cachedValue, {
        headers: {
          "Access-Control-Allow-Origin": origin || "*",
          "Content-Type": "application/json",
        },
      });
    }
    const states = await query({
      query: `SELECT
      tstates.sAbbrv AS state,
      tstates.sState AS state_name,
      SUM(CASE WHEN tblstudent.stGender = 'M' THEN 1 ELSE 0 END) AS male,
      SUM(CASE WHEN tblstudent.stGender = 'F' THEN 1 ELSE 0 END) AS female,
      COUNT(tblstudent.idStudent) AS total
  FROM
      tblenrolment
      INNER JOIN tblstudent ON tblenrolment.eStudentID = tblstudent.idStudent
      INNER JOIN tblform ON tblenrolment.eFormID = tblform.idForm
      INNER JOIN tblschool ON tblform.fSchID = tblschool.idSchool
      INNER JOIN tpayam ON tblschool.sPayam = tpayam.idPayam
      INNER JOIN tcounties ON tpayam.pyCounty = tcounties.idCounty
      INNER JOIN tstates ON tcounties.cState = tstates.idState
  WHERE
      YEAR(tblenrolment.eFrom) = ? AND
      tblstudent.stVer = '0' AND
      tblstudent.stSpecialNeeds = '1' AND
      tblform.fVer = '0' AND
      tblschool.sVer = '0' AND
      ((tblform.fYear >= '6' AND UPPER(tblschool.sSchType)<>'SEC') OR
      (tblform.fYear <= '4' AND UPPER(tblschool.sSchType)='SEC')) AND
      (tblstudent.stFName <> 'unknown' AND tblstudent.stLName <> 'student')
  GROUP BY
      tstates.sAbbrv,
      tstates.sState
  `,
      values: [year],
    });
    await redis.set(
      `dashboard-statistics-disability:${year}`,
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
