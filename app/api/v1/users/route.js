import connectToDatabase from "@/app/lib/mongoose";
import UserModel from "@/app/lib/mongoose-models/UserModel";

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
  const page = parseInt(searchParams.get("page"), 10) || 1;
  const pageSize = 10;
  const searchQuery = searchParams.get("query");

  const skip = (page - 1) * pageSize;
  let query = {};
  try {
    const db = await connectToDatabase();
    if (searchQuery) {
      query = {
        $or: [
          { firstname: { $regex: searchQuery, $options: "i" } },
          { lastname: { $regex: searchQuery, $options: "i" } },
          { username: { $regex: searchQuery, $options: "i" } },
          { email: { $regex: searchQuery, $options: "i" } },
        ],
      };
    }

    const data = await UserModel.find(query).skip(skip).limit(pageSize);
    const count = await UserModel.countDocuments(query);
    return new Response(JSON.stringify({ rows: data, count }), {
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
