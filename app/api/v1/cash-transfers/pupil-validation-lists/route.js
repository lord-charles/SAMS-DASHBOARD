import { sequelize } from "@/db/connection";
import { CTReport } from "@/models/tblctreport";
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
  const origin = request.headers.get("origin");
  const page = parseInt(searchParams.get("page"), 10);
  const searchQuery = searchParams.get("query");
  const pageSize = 10;

  let rows = [];

  let count = pageSize;
  if (searchQuery) {
    const countQuery = `
        SELECT COUNT(*) AS count
        FROM (
        SELECT DISTINCT tblctreport.state, tblctreport.county, tblctreport.payam, tblctreport.education, tblctreport.code, tblctreport.school
        FROM tblctreport
        WHERE
        tblctreport.school LIKE :searchQuery
        OR tblctreport.county LIKE :searchQuery
        OR tblctreport.payam LIKE :searchQuery
        OR tblctreport.state LIKE :searchQuery
        GROUP BY tblctreport.state, tblctreport.county, tblctreport.payam, tblctreport.education, tblctreport.code, tblctreport.school
        ) AS countedResults
        `;

    const countResult = await sequelize.query(countQuery, {
      replacements: { searchQuery: `%${searchQuery}%` },
      type: QueryTypes.SELECT,
      plain: true,
    });

    count = countResult?.count;
  } else {
    const countQuery = `
      SELECT COUNT(*) AS count FROM (SELECT DISTINCT state, county, payam, education, code, school FROM tblctreport) AS tblctreport`;
    const countResult = await sequelize.query(countQuery, {
      type: QueryTypes.SELECT,
      plain: true,
    });

    count = countResult?.count;
  }
  if (searchQuery) {
    if (page >= 1) {
      const result = await CTReport.findAll({
        attributes: [
          [Sequelize.literal("tblctreport.state"), "stateCode"],
          [Sequelize.literal("tblctreport.county"), "countyName"],
          [Sequelize.literal("tblctreport.payam"), "payamName"],
          [Sequelize.literal("tblctreport.education"), "educationLevel"],
          [Sequelize.literal("tblctreport.code"), "code"],
          [Sequelize.literal("tblctreport.school"), "schoolName"],
          [Sequelize.fn("COUNT", Sequelize.literal("idx")), "pupilCount"],
        ],
        where: {
          [Op.or]: [
            { school: { [Op.like]: `%${searchQuery}%` } },
            { county: { [Op.like]: `%${searchQuery}%` } },
            { payam: { [Op.like]: `%${searchQuery}%` } },
            { state: { [Op.like]: `%${searchQuery}%` } },
          ],
        },
        group: ["state", "county", "payam", "education", "code", "school"],
        offset: (page - 1) * pageSize,
        limit: pageSize,
        order: [
          ["state", "ASC"],
          ["county", "ASC"],
          ["payam", "ASC"],
          ["education", "ASC"],
          ["school", "ASC"],
        ],
      });
      rows = result.map((row, index) => ({ id: index + 1, ...row.get() }));
    }
  } else {
    if (page >= 1) {
      const result = await CTReport.findAll({
        attributes: [
          [Sequelize.literal("tblctreport.state"), "stateCode"],
          [Sequelize.literal("tblctreport.county"), "countyName"],
          [Sequelize.literal("tblctreport.payam"), "payamName"],
          [Sequelize.literal("tblctreport.education"), "educationLevel"],
          [Sequelize.literal("tblctreport.code"), "code"],
          [Sequelize.literal("tblctreport.school"), "schoolName"],
          [Sequelize.fn("COUNT", Sequelize.literal("idx")), "pupilCount"],
        ],
        group: ["state", "county", "payam", "education", "code", "school"],
        offset: (page - 1) * pageSize,
        limit: pageSize,
      });
      rows = result.map((row, index) => ({ id: index + 1, ...row.get() }));
    } else {
      rows = await CTReport.findAll({
        attributes: [
          [
            Sequelize.literal(
              "DISTINCT CONCAT(tblctreport.state, tblctreport.county, tblctreport.payam, tblctreport.education, tblctreport.code, tblctreport.school)"
            ),
            "id",
          ],
          [Sequelize.literal("tblctreport.state"), "stateCode"],
          [Sequelize.literal("tblctreport.county"), "countyName"],
          [Sequelize.literal("tblctreport.payam"), "payamName"],
          [Sequelize.literal("tblctreport.education"), "educationLevel"],
          [Sequelize.literal("tblctreport.code"), "code"],
          [Sequelize.literal("tblctreport.school"), "schoolName"],
          [Sequelize.fn("COUNT", Sequelize.literal("idx")), "pupilCount"],
        ],
        order: [
          ["state", "ASC"],
          ["county", "ASC"],
          ["payam", "ASC"],
          ["education", "ASC"],
          ["school", "ASC"],
        ],
        group: ["state", "county", "payam", "education", "code", "school"],
      });
    }
  }
  return new Response(JSON.stringify({ rows, count }), {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
}
