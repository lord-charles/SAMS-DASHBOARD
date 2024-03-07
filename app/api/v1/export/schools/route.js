import { School } from "@/models/tblschool";
const XLSX = require("xlsx");

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
  const headers = Object.keys(School.rawAttributes)
  School.findAll().then(async data=>{
    const worksheet = XLSX.utils.json_to_sheet([headers, ...data.map(row=>headers.map(attribute=>row[attribute]))])
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1')
    const fileName = `school_data_${year}.xlsx`
    XLSX.writeFile(workbook, fileName)

    const response = await fetch(`${process.env.APP_URL}/${fileName}`);
    return new Response(response.body, {
        headers: {
            ...response.headers,
          "Access-Control-Allow-Origin": origin || "*",
          "Content-Disposition": `attachment; filename=school_data_${year}.xlsx`,
        },
      });
  }).catch(error=>{
    return new Response(JSON.stringify({ error }), {
        status: 500,
      });
  })
}
