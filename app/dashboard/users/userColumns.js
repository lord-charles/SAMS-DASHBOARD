import UserActions from "./userActions";
import { Chip } from "@nextui-org/chip";

const columns = [
  { name: "Username", uid: "username", sortable: true },
  { name: "Full Name", uid: "fullName", sortable: true },
  { name: "Email", uid: "email", sortable: true },
  { name: "Phone Number", uid: "phoneNumber", sortable: true },
  { name: "Role", uid: "userType", sortable: true },
  { name: "Actions", uid: "actions" },
];

export const userRender = ({ row, columnKey }) => {
  const cellValue = row[columnKey];
  switch (columnKey) {
    case "fullName":
      return <p>{`${row.firstname} ${row.lastname}`}</p>;
    case "userType":
      return (
        <Chip
          className="capitalize text-xs p-3"
          color={
            cellValue === "SuperAdmin"
              ? "success"
              : cellValue === "HeadTeacher"
              ? "primary"
              : "danger"
          }
          size="sm"
          variant="flat"
        >
          {cellValue}
        </Chip>
      );
    case "actions":
      return <UserActions row={row} />;
    default:
      return cellValue;
  }
};

export { columns };
