import { UserAccount } from "@/models/tbl_user_accounts";
import { Op } from "sequelize";
import { CMSModel } from "@/models/CMSModel";

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
    let cms = [];
    if (searchQuery) {
      cms = await CMSModel.findAndCountAll({
        where: {
          [Op.or]: [
            { title: { [Op.like]: `%${searchQuery}%` } },
            { description: { [Op.like]: `%${searchQuery}%` } },
            { type: { [Op.like]: `%${searchQuery}%` } },
          ],
        },
        include: [
          {
            model: UserAccount,
            attributes: ["id", "firstName", "lastName"],
          },
        ],
        offset: (page - 1) * pageSize,
        limit: pageSize,
      });
    } else {
      if (page >= 1) {
        cms = await CMSModel.findAndCountAll({
          include: [
            {
              model: UserAccount,
              attributes: ["id", "firstName", "lastName"],
            },
          ],
          offset: (page - 1) * pageSize,
          limit: pageSize,
        });
      } else {
        cms = await CMSModel.findAndCountAll({
          include: [
            {
              model: UserAccount,
              attributes: ["id", "firstName", "lastName"],
            },
          ],
        });
      }
    }
    return new Response(JSON.stringify(cms), {
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
export async function POST(request) {
  const origin = request.headers.get("origin");
  try {
    const body = await request.json();
    const existingCMS = await CMSModel.findOne({
      where: {
        [Op.or]: [{ type: body?.type }],
      },
    });

    if (existingCMS) {
      return new Response(
        JSON.stringify({ error: "CMS type can only be of one type!" }),
        {
          status: 400,
          headers: {
            "Access-Control-Allow-Origin": origin || "*",
            "Content-Type": "application/json",
          },
        }
      );
    }
    const cmsModelAttributes = {
      userId: body?.userId,
      title: body?.title,
      description: body?.description,
      type: body?.type,
    };
    const cmsModel = await CMSModel.create(cmsModelAttributes);
    const message = "Post created successfully!";
    return new Response(JSON.stringify({ message }), {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
