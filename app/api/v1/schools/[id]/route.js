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
  const schoolId = request.url.split("schools/")[1];
  const origin = request.headers.get("origin");
  try {
    const school = await School.findByPk(schoolId);
    if (!school) {
      return new Response(
        JSON.stringify({ error: "School not found" }),
        {
          status: 404,
          headers: {
            "Access-Control-Allow-Origin": origin || "*",
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(JSON.stringify(school?.toJSON()), {
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
  const schoolId = request.url.split("schools/")[1];
  const origin = request.headers.get("origin");
  try {
    const body = await request.json();
    const school = await School.findByPk(schoolId);
    if (!school) {
      return new Response(JSON.stringify({ error: "School not found" }), {
        status: 404,
        headers: {
          "Access-Control-Allow-Origin": origin || "*",
          "Content-Type": "application/json",
        },
      });
    }
    await school.update(body)

    const message = "School updated successfully!"
    return new Response(JSON.stringify({message}), {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Server error:", error);
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
}

export async function DELETE(request) {
  const schoolId = request.url.split("schools/")[1];
  const origin = request.headers.get("origin");

  try {
    const school = await School.findByPk(schoolId);

    if (!school) {
      return new Response(
        JSON.stringify({ error: "School not found" }),
        {
          status: 404,
          headers: {
            "Access-Control-Allow-Origin": origin || "*",
            "Content-Type": "application/json",
          },
        }
      );
    }
    await school.destroy();

    const message = `School deleted successfully`;
    
    return new Response(JSON.stringify({ message }), {
      status: 200, 
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Server error:", error);
    
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  }
}
