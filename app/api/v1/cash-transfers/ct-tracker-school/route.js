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
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get("year");
  const origin = request.headers.get("origin");
  const page = parseInt(searchParams.get("page"), 10);
  const searchQuery = searchParams.get("query");

  const pageSize = 10;

  try {
    let schools = { items: [], count: await schoolTrackerRepository.search().where('year').eq(year).return.count() };
    if (year >= 2021) {
      if (searchQuery) {
        schools.items = await schoolTrackerRepository.search().where('school').matches(searchQuery).or('code').matches(searchQuery).or('name').matches(searchQuery).or('county').matches(searchQuery)
        .and('year').eq(year).return.page(( page - 1) * pageSize, pageSize)
        schools.count = await schoolTrackerRepository.search().where('school').matches(searchQuery).or('code').matches(searchQuery).or('name').matches(searchQuery).or('county').matches(searchQuery)
        .and('year').eq(year).return.count()
      } else {
        if (page >= 1) {
          schools.items = await schoolTrackerRepository.search().where('year').eq(year).return.page(( page - 1) * pageSize, pageSize)
        } else {
          schools.items = await schoolTrackerRepository.search().where('year').eq(year).return.all()
        }
      }
    } else {
    }
    return new Response(JSON.stringify(schools), {
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
