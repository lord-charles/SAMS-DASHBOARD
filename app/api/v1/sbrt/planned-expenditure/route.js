import { SbrtBudgetB1 } from "@/models/tblsbrtbgtb_1";
import { SbrtCode } from "@/models/tblsbrtcodes";
import { SbrtFile } from "@/models/tblsbrtfiles";
import { School } from "@/models/tblschool";
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
  const year = searchParams.get("year");
  try {

    const result = await SbrtBudgetB1.findAll({
    attributes: [
        "budgetCode",
        [Sequelize.literal('SbrtCode.code'), 'code'],
        [Sequelize.literal('SbrtCode.name'), 'name'],
        [Sequelize.fn('sum', Sequelize.literal("total")), 'total'],
    ],
    include: [
        {
        model: SbrtFile,
            attributes: [],
            include: [
                {
                    model: School,
                    attributes: [],
                    where: {
                        sVer: '0',
                    },
                },
            ],
            where: {
                period: {
                    [Op.like]: `${year}%`,
                  },
            }
        },
        {
        model: SbrtCode,
        attributes: [],
        },
    ],
    where: {
        [Op.and]: [
            { budgetCode: { [Op.like]: `%E%` } },
        ]
    },
    group: ['SbrtBudgetB1.budgetCode', 'SbrtCode.name'],
    order: [
        [Sequelize.col('SbrtBudgetB1.budgetCode'), 'ASC'],
    ],
    });

    return new Response(JSON.stringify(result), {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return new Response(
        JSON.stringify({
          error: "Unknown error, please contact your system Administrator.",
        }),
        {
          status: 500,
        }
      );
  }
}

