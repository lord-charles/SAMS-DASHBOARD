import { Role } from "@/models/Role";
import { RolePermission } from "@/models/RolePermission";
import { UserRole } from "@/models/UserRole";

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

export async function DELETE(request) {
  const origin = request.headers.get("origin");
  const roleId = request.url.split("roles/")[1];

  try {
    // Check if roleId is provided
    if (!roleId) {
      const errorMessage = "Role ID is required!";
      return new Response(JSON.stringify({ error: errorMessage }), {
        status: 400, // Bad Request
        headers: {
          "Access-Control-Allow-Origin": origin || "*",
          "Content-Type": "application/json",
        },
      });
    }
    // Delete associated role permissions
    await RolePermission.destroy({
      where: { roleId },
    });

    await UserRole.destroy({
      where: { roleId },
    });

    // Delete the role
    const deletedRowCount = await Role.destroy({
      where: { id: roleId },
    });
    const message = "Role and associated records deleted successfully!";
    return new Response(JSON.stringify({ message }), {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        error: "Unknown error, please contact your system Administrator.",
      }),
      {
        status: 500,
      }
    );
  }
}
