import { TeacherList } from "@/models/tblteacherlist";
import { Op, Sequelize } from "sequelize";

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
  const year = searchParams.get("year");
  const pageSize = 10;
  try {
    let teachers = [];
    if (searchQuery) {
      teachers = await TeacherList.findAndCountAll({
        attributes: [
          [Sequelize.literal("tblteacherlist.idx"), "id"],
          [Sequelize.literal("tblteacherlist.fullName"), "fullName"],
          [Sequelize.literal("tblteacherlist.teacherCode"), "teacherCode"],
          [Sequelize.literal("tblteacherlist.position"), "position"],
          [Sequelize.literal("tblteacherlist.category"), "category"],
          [Sequelize.literal("tblteacherlist.gender"), "gender"],
          [
            Sequelize.literal("tblteacherlist.firstAppointment"),
            "firstAppointment",
          ],
          [Sequelize.literal("tblteacherlist.phoneNumber"), "phone"],
          [Sequelize.literal("tblteacherlist.notes"), "notes"],
        ],
        where: {
          [Op.and]: [
            {
              [Op.or]: [
                { fullName: { [Op.like]: `%${searchQuery}%` } },
                { position: { [Op.like]: `%${searchQuery}%` } },
                { teacherCode: { [Op.like]: `%${searchQuery}%` } },
              ],
            },
            { year: { [Op.like]: `%${year}%` } },
          ],
        },
        offset: (page - 1) * pageSize,
        limit: pageSize,
      });
    } else {
      if (page >= 1) {
        teachers = await TeacherList.findAndCountAll({
          attributes: [
            [Sequelize.literal("tblteacherlist.idx"), "id"],
            [Sequelize.literal("tblteacherlist.fullName"), "fullName"],
            [Sequelize.literal("tblteacherlist.teacherCode"), "teacherCode"],
            [Sequelize.literal("tblteacherlist.position"), "position"],
            [Sequelize.literal("tblteacherlist.category"), "category"],
            [Sequelize.literal("tblteacherlist.gender"), "gender"],
            [
              Sequelize.literal("tblteacherlist.firstAppointment"),
              "firstAppointment",
            ],
            [Sequelize.literal("tblteacherlist.phoneNumber"), "phone"],
            [Sequelize.literal("tblteacherlist.notes"), "notes"],
          ],
          where: {
            [Op.or]: [{ year: { [Op.like]: `%${year}%` } }],
          },
          offset: (page - 1) * pageSize,
          limit: pageSize,
        });
      } else {
        teachers = await TeacherList.findAndCountAll({
          attributes: [
            [Sequelize.literal("tblteacherlist.idx"), "id"],
            [Sequelize.literal("tblteacherlist.fullName"), "fullName"],
            [Sequelize.literal("tblteacherlist.teacherCode"), "teacherCode"],
            [Sequelize.literal("tblteacherlist.position"), "position"],
            [Sequelize.literal("tblteacherlist.category"), "category"],
            [Sequelize.literal("tblteacherlist.gender"), "gender"],
            [
              Sequelize.literal("tblteacherlist.firstAppointment"),
              "firstAppointment",
            ],
            [Sequelize.literal("tblteacherlist.phoneNumber"), "phone"],
            [Sequelize.literal("tblteacherlist.notes"), "notes"],
          ],
          where: {
            [Op.or]: [{ year: { [Op.like]: `%${year}%` } }],
          },
        });
      }
    }
    return new Response(JSON.stringify(teachers), {
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
