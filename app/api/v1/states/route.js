import { State10 as State } from "@/models/tstates_10";
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
    let states = [];
    if (searchQuery) {
      states = await State.findAndCountAll({
        attributes: [
          [Sequelize.literal("tstates_10.sAbbrv"), "id"],
          [Sequelize.literal("tstates_10.sState"), "name"],
        ],
        where: {
          [Op.or]: [
            { sState: { [Op.like]: `%${searchQuery}%` } },
            { sAbbrv: { [Op.like]: `%${searchQuery}%` } },
          ],
        },
        offset: (page - 1) * pageSize,
        limit: pageSize,
      });
    } else {
      if (page >= 1) {
        states = await State.findAndCountAll({
          attributes: [
            [Sequelize.literal("tstates_10.sAbbrv"), "id"],
            [Sequelize.literal("tstates_10.sState"), "name"],
          ],
          offset: (page - 1) * pageSize,
          limit: pageSize,
        });
      } else {
        states = await State.findAndCountAll({
          attributes: [
            [Sequelize.literal("tstates_10.sAbbrv"), "id"],
            [Sequelize.literal("tstates_10.sState"), "name"],
          ],
        });
      }
    }
    return new Response(JSON.stringify(states), {
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
