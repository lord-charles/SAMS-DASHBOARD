import { CMSModel } from "@/models/CMSModel";
import { UserAccount } from "@/models/tbl_user_accounts";

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
  const cmsId = request.url.split("cms/")[1];
  const origin = request.headers.get("origin");
  try {
    const cmsModel = await CMSModel.findByPk(cmsId, {
      include: [
        {
          model: UserAccount,
          attributes: ["id", "firstName", "lastName"],
        },
      ],
    });

    return new Response(JSON.stringify(cmsModel?.toJSON()), {
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
export async function PUT(request) {
  const cmsId = request.url.split("cms/")[1];
  const origin = request.headers.get("origin");
  try {
    const body = await request.json()
    const cmsModel = await CMSModel.findByPk(cmsId);

    if (!cmsModel) {
      return new Response(JSON.stringify({ error: 'CMS record not found' }), {
        status: 404,
        headers: {
          "Access-Control-Allow-Origin": origin || "*",
          "Content-Type": "application/json",
        },
      });
    }

    await cmsModel.update(body);

    let message = "Record updated successfully!"
    return new Response(JSON.stringify({message}), {
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

export async function DELETE(request) {
  const cmsId = request.url.split("cms/")[1];
  const origin = request.headers.get("origin");
  try {
    const result = await CMSModel.destroy({
        where: {
          id: cmsId
        },
      });

      let message = "Record deleted successfully!"
      if (result === 1) {
        message = 'Record deleted successfully.';
      } else {
        message = 'Record not found or not deleted.';
      }
    return new Response(JSON.stringify({message}), {
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
