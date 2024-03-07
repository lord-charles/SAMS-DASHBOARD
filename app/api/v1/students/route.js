import { Op, Sequelize } from "sequelize";
import { Student } from "@/models/tblstudent";

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
    let students = [];
    if (searchQuery) {
      students = await Student.findAndCountAll({
        attributes: [
          [Sequelize.literal("tblstudent.idStudent"), "id"],
          [Sequelize.literal("tblstudent.stRef"), "stRef"],
          [Sequelize.literal("tblstudent.stGender"), "stGender"],
          [Sequelize.literal("tblstudent.stDOB"), "stDOB"],
          [
            Sequelize.literal(
              'CONCAT(tblstudent.stFName, " ", IFNULL(tblstudent.stMNames, ""), " ", tblstudent.stLName)'
            ),
            "fullName",
          ],
          [Sequelize.literal("tblstudent.stState"), "stState"],
          [Sequelize.literal("tblstudent.stOrphan"), "stOrphan"],
          [Sequelize.literal("tblstudent.stSpecialNeeds"), "stSpecialNeeds"],
        ],
        where: {
          [Op.or]: [
            { stFName: { [Op.like]: `%${searchQuery}%` } },
            { stMNames: { [Op.like]: `%${searchQuery}%` } },
            { stLName: { [Op.like]: `%${searchQuery}%` } },
            { stRef: { [Op.like]: `%${searchQuery}%` } },
          ],
        },
        offset: (page - 1) * pageSize,
        limit: pageSize,
      });
    } else {
      if (page >= 1) {
        students = await Student.findAndCountAll({
          attributes: [
            [Sequelize.literal("tblstudent.idStudent"), "id"],
            [Sequelize.literal("tblstudent.stRef"), "stRef"],
            [Sequelize.literal("tblstudent.stGender"), "stGender"],
            [Sequelize.literal("tblstudent.stDOB"), "stDOB"],
            [
              Sequelize.literal(
                'CONCAT(tblstudent.stFName, " ", IFNULL(tblstudent.stMNames, ""), " ", tblstudent.stLName)'
              ),
              "fullName",
            ],
            [Sequelize.literal("tblstudent.stState"), "stState"],
            [Sequelize.literal("tblstudent.stOrphan"), "stOrphan"],
            [Sequelize.literal("tblstudent.stSpecialNeeds"), "stSpecialNeeds"],
          ],
          offset: (page - 1) * pageSize,
          limit: pageSize,
        });
      } else {
        students = await Student.findAndCountAll({
          attributes: [
            [Sequelize.literal("tblstudent.idStudent"), "id"],
            [Sequelize.literal("tblstudent.stRef"), "stRef"],
            [Sequelize.literal("tblstudent.stGender"), "stGender"],
            [Sequelize.literal("tblstudent.stDOB"), "stDOB"],
            [
              Sequelize.literal(
                'CONCAT(tblstudent.stFName, " ", IFNULL(tblstudent.stMNames, ""), " ", tblstudent.stLName)'
              ),
              "fullName",
            ],
            [Sequelize.literal("tblstudent.stState"), "stState"],
            [Sequelize.literal("tblstudent.stOrphan"), "stOrphan"],
            [Sequelize.literal("tblstudent.stSpecialNeeds"), "stSpecialNeeds"],
          ],
        });
      }
    }
    return new Response(JSON.stringify(students), {
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
