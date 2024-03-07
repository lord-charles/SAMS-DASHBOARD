import studentTrackerRepository from "@/redis-models/RedisStudentTracker";

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
export async function PUT(request) {
  const origin = request.headers.get("origin");
  const studentId = request.url.split("ct-tracker/")[1];

  try {
    const data = await request.json();
    const student = await studentTrackerRepository.fetch(studentId);
    const updatedStudentData = {
      ...student,
      ...data,
    };
    await studentTrackerRepository.save(updatedStudentData)

    return new Response(
      JSON.stringify({ message: "Record updated successfully" }),
      {
        headers: {
          "Access-Control-Allow-Origin": origin || "*",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  }
}
export async function GET(request) {
  const origin = request.headers.get("origin");
  const studentId = request.url.split("ct-tracker/")[1];
  try {
    const student = await studentTrackerRepository.fetch(studentId)

    return new Response(JSON.stringify(student), {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  }
}
