import schoolTrackerRepository from "@/redis-models/RedisSchoolTracker";

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
  const schoolId = request.url.split("ct-tracker-school/")[1];

  try {
    const data = await request.json();
    const school = await schoolTrackerRepository.fetch(schoolId);
    const updatedSchoolData = {
      ...school,
      ...data,
    };
    await schoolTrackerRepository.save(updatedSchoolData);

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
  const schoolId = request.url.split("ct-tracker-school/")[1];

  try {
    const school = await schoolTrackerRepository.fetch(schoolId);

    return new Response(JSON.stringify(school), {
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
