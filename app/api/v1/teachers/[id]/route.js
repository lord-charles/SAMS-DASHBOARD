import { TeacherList } from "@/models/tblteacherlist";
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
  const teacherId = request.url.split("teachers/")[1];
  const origin = request.headers.get("origin");
  try {
    const teacher = await TeacherList.findByPk(teacherId);
    if (!teacher) {
      return new Response(
        JSON.stringify({ error: "Teacher not found" }),
        {
          status: 404,
          headers: {
            "Access-Control-Allow-Origin": origin || "*",
            "Content-Type": "application/json",
          },
        }
      );
    }
    return new Response(JSON.stringify(teacher?.toJSON()), {
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
  const teacherId = request.url.split("teachers/")[1];
  const origin = request.headers.get("origin");
  try {
    const body = await request.json();
    const teacher = await TeacherList.findByPk(teacherId);
    if (!teacher) {
      return new Response(JSON.stringify({ error: "Teacher not found" }), {
        status: 404,
        headers: {
          "Access-Control-Allow-Origin": origin || "*",
          "Content-Type": "application/json",
        },
      });
    }
    await teacher.update(body)

    const message = "Teacher updated successfully!"
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
  const teacherId = request.url.split("teachers/")[1];
  const origin = request.headers.get("origin");

  try {
    const teacher = await TeacherList.findByPk(teacherId);

    if (!teacher) {
      return new Response(
        JSON.stringify({ error: "Teacher not found" }),
        {
          status: 404,
          headers: {
            "Access-Control-Allow-Origin": origin || "*",
            "Content-Type": "application/json",
          },
        }
      );
    }
    await teacher.destroy();

    const message = `Teacher deleted successfully`;
    
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
