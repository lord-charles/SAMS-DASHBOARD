import { Op, Sequelize } from "sequelize";
import { School } from "@/models/tblschool";

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
  const origin = request.headers.get("origin");
  const page = parseInt(searchParams.get("page"), 10);
  const searchQuery = searchParams.get("query");
  const pageSize = 10;
  try {
    let schools = [];
    if (searchQuery) {
      schools = await School.findAndCountAll({
        attributes: [
          [Sequelize.literal("tblschool.idSchool"), "id"],
          [Sequelize.literal("tblschool.sName"), "sName"],
          [Sequelize.literal("tblschool.sSchType"), "sSchType"],
          [Sequelize.literal("tblschool.sRef"), "sRef"],
          [Sequelize.literal("tblschool.sVer"), "sVer"],
          [Sequelize.literal("tblschool.sAlertPhone"), "sAlertPhone"],
          [Sequelize.literal("tblschool.sAddr"), "sAddr"],
        ],
        where: {
          [Op.or]: [
            { sName: { [Op.like]: `%${searchQuery}%` } },
            { sSchType: { [Op.like]: `%${searchQuery}%` } },
            { sRef: { [Op.like]: `%${searchQuery}%` } },
            { sAddr: { [Op.like]: `%${searchQuery}%` } },
          ],
        },
        offset: (page - 1) * pageSize,
        limit: pageSize,
      });
    } else {
      if (page >= 1) {
        schools = await School.findAndCountAll({
          attributes: [
            [Sequelize.literal("tblschool.idSchool"), "id"],
            [Sequelize.literal("tblschool.sName"), "sName"],
            [Sequelize.literal("tblschool.sSchType"), "sSchType"],
            [Sequelize.literal("tblschool.sRef"), "sRef"],
            [Sequelize.literal("tblschool.sVer"), "sVer"],
            [Sequelize.literal("tblschool.sAlertPhone"), "sAlertPhone"],
            [Sequelize.literal("tblschool.sAddr"), "sAddr"],
          ],
          offset: (page - 1) * pageSize,
          limit: pageSize,
        });
      } else {
        schools = await School.findAndCountAll({
          attributes: [
            [Sequelize.literal("tblschool.idSchool"), "id"],
            [Sequelize.literal("tblschool.sName"), "sName"],
            [Sequelize.literal("tblschool.sSchType"), "sSchType"],
            [Sequelize.literal("tblschool.sRef"), "sRef"],
            [Sequelize.literal("tblschool.sVer"), "sVer"],
            [Sequelize.literal("tblschool.sAlertPhone"), "sAlertPhone"],
            [Sequelize.literal("tblschool.sAddr"), "sAddr"],
          ],
        });
      }
    }
    return new Response(JSON.stringify(schools), {
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
