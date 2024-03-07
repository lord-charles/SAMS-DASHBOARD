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
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const year = parseInt(searchParams.get("year"), 10);
  const page = parseInt(searchParams.get("page"), 10);
  const searchQuery = searchParams.get("query");
  const origin = request.headers.get("origin");
  const pageSize = 10;

  try {
    let students = {
      items: [],
      count: await studentTrackerRepository
        .search()
        .where("year")
        .eq(year)
        .return.count(),
    };
    if (year >= 2021) {
      if (searchQuery) {
        students.items = await studentTrackerRepository
          .search()
          .where("school")
          .matches(searchQuery)
          .or("code")
          .matches(searchQuery)
          .or("firstName")
          .matches(searchQuery)
          .or("lastName")
          .matches(searchQuery)
          .or("name")
          .matches(searchQuery)
          .or("county")
          .matches(searchQuery)
          .and("year")
          .eq(year)
          .return.page((page - 1) * pageSize, pageSize);
        students.count = await studentTrackerRepository
          .search()
          .where("school")
          .matches(searchQuery)
          .or("code")
          .matches(searchQuery)
          .or("firstName")
          .matches(searchQuery)
          .or("lastName")
          .matches(searchQuery)
          .or("name")
          .matches(searchQuery)
          .or("county")
          .matches(searchQuery)
          .and("year")
          .eq(year)
          .return.count();
      } else {
        if (page >= 1) {
          students.items = await studentTrackerRepository
            .search()
            .where("year")
            .eq(year)
            .return.page((page - 1) * pageSize, pageSize);
        } else {
          students.items = await studentTrackerRepository
            .search()
            .where("year")
            .eq(year)
            .return.all();
        }
      }
    }
    return new Response(JSON.stringify(students), {
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
