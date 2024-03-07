import { sequelize } from "@/db/connection";
import { CTReport } from "@/models/tblctreport";
import { NextResponse } from "next/server";
import { Op, QueryTypes, Sequelize } from "sequelize";

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
  const page = parseInt(searchParams.get("page"), 10);
  const searchQuery = searchParams.get("query");
  const pageSize = 10;
  const origin = request.headers.get("origin");

  let rows = [];

  let count = pageSize;


  if (searchQuery) {
    const countQuery = `
    SELECT COUNT(*) AS count
    FROM (
      SELECT
        state,
        stateName10,
        year
      FROM tblctreport
      WHERE
        year = :year
        AND (state LIKE :searchQuery OR stateName10 LIKE :searchQuery)
      GROUP BY state, year, stateName10
    ) AS subquery
  `;

    const countResult = await sequelize.query(countQuery, {
      replacements: {
        year: year,
        searchQuery: `%${searchQuery}%`,
      },
      type: QueryTypes.SELECT,
      plain: true,
    });
    count = countResult?.count;
  } else {
    const countQuery = `
  SELECT COUNT(*) as count
  FROM (
    SELECT
      sta.sState AS stateName,
      ctr.state AS stateCode,
      ctr.year,
      SUM(ctr.eligible) AS eligible,
      SUM(COALESCE(ctr.serialCtef, 0)) AS serialCtef,
      SUM(ctr.validated) AS validated,
      SUM(ctr.signedPayment) AS signedPayment,
      SUM(COALESCE(ctr.serialAccCtef, 0)) AS serialAccCtef,
      SUM(ctr.uReceivedP5) AS pGirls,
      SUM(ctr.uReceivedNewSchools) AS newSchools,
      SUM(ctr.uReceivedChkTmp) AS uReceivedTmp,
      SUM(ctr.uReceivedChk) AS uReceivedCuml
    FROM tblctreport ctr
    INNER JOIN tstates sta ON ctr.idSta = sta.idState
    WHERE ctr.year = :year
    GROUP BY ctr.state, ctr.year, sta.sState
  ) AS result
`;

    const countResult = await sequelize.query(countQuery, {
      replacements: { year: year },
      type: QueryTypes.SELECT,
      plain: true,
    });

    count = countResult?.count;
  }
  try {
        if (searchQuery) {
          if (page >= 1) {
            const rows = await CTReport.findAll({
              attributes: [
                [Sequelize.literal("idx"), "id"],
                [Sequelize.literal("stateName10"), "name"],
                [Sequelize.literal("year"), "year"],
                [Sequelize.literal("SUM(eligible)"), "eligible"],
                [
                  Sequelize.fn(
                    "SUM",
                    Sequelize.literal('COALESCE("serialCtef", 0)')
                  ),
                  "serialCtef",
                ],
                [Sequelize.literal("SUM(validated)"), "validated"], //
                [Sequelize.literal("SUM(signedPayment)"), "signedPayment"], //
                [
                  Sequelize.fn(
                    "SUM",
                    Sequelize.literal('COALESCE("serialAccCtef", 0)')
                  ),
                  "serialAccCtef",
                ],
                [Sequelize.literal("SUM(uReceivedP5)"), "uReceivedP5"], //
                [Sequelize.literal("SUM(uReceivedNewSchools)"), "newSchools"], //
                [Sequelize.literal("SUM(uReceivedChkTmp)"), "uReceivedTmp"], //
                [Sequelize.literal("SUM(uReceivedChk)"), "uReceivedCuml"], //
              ],
              where: {
                year: year,
                [Op.or]: [
                  { state: { [Op.like]: `%${searchQuery}%` } },
                  { stateName10: { [Op.like]: `%${searchQuery}%` } },
                ],
              },
              group: ["idx", "year", "stateName10"],
              offset: (page - 1) * pageSize,
              limit: pageSize,
            });
          }
        } else {
          if (page >= 1) {
            rows = await CTReport.findAll({
              attributes: [
                [Sequelize.literal("idx"), "id"],
                [Sequelize.literal("stateName10"), "name"],
                [Sequelize.literal("year"), "year"],
                [Sequelize.literal("SUM(eligible)"), "eligible"],
                [
                  Sequelize.fn(
                    "SUM",
                    Sequelize.literal('COALESCE("serialCtef", 0)')
                  ),
                  "serialCtef",
                ],
                [Sequelize.literal("SUM(validated)"), "validated"], //
                [Sequelize.literal("SUM(signedPayment)"), "signedPayment"], //
                [
                  Sequelize.fn(
                    "SUM",
                    Sequelize.literal('COALESCE("serialAccCtef", 0)')
                  ),
                  "serialAccCtef",
                ],
                [Sequelize.literal("SUM(uReceivedP5)"), "pGirls"], //
                [Sequelize.literal("SUM(uReceivedNewSchools)"), "newSchools"], //
                [Sequelize.literal("SUM(uReceivedChkTmp)"), "uReceivedTmp"], //
                [Sequelize.literal("SUM(uReceivedChk)"), "uReceivedCuml"], //
              ],
              where: {
                year: year,
              },
              distinct: true,
              group: ["idx", "year", "stateName10"],
              offset: (page - 1) * pageSize,
              limit: pageSize,
            });
          } else {
            rows = await CTReport.findAll({
              attributes: [
                [Sequelize.literal("idx"), "id"],
                [Sequelize.literal("stateName10"), "name"],
                [Sequelize.literal("year"), "year"],
                [Sequelize.literal("SUM(eligible)"), "eligible"],
                [
                  Sequelize.fn(
                    "SUM",
                    Sequelize.literal('COALESCE("serialCtef", 0)')
                  ),
                  "serialCtef",
                ],
                [Sequelize.literal("SUM(validated)"), "validated"], //
                [Sequelize.literal("SUM(signedPayment)"), "signedPayment"], //
                [
                  Sequelize.fn(
                    "SUM",
                    Sequelize.literal('COALESCE("serialAccCtef", 0)')
                  ),
                  "serialAccCtef",
                ],
                [Sequelize.literal("SUM(uReceivedP5)"), "pGirls"], //
                [Sequelize.literal("SUM(uReceivedNewSchools)"), "newSchools"], //
                [Sequelize.literal("SUM(uReceivedChkTmp)"), "uReceivedTmp"], //
                [Sequelize.literal("SUM(uReceivedChk)"), "uReceivedCuml"], //
              ],
              where: {
                year: year,
              },
              group: ["idx", "year", "stateName10"],
            });
          }
    }

    return new Response(JSON.stringify({ rows, count }), {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
}
