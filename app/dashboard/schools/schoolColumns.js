import SchoolActions from "./schoolActions";

const columns = [
  { name: "Reference", uid: "sRef" },
  { name: "Name", uid: "sName"},
  { name: "School Type", uid: "sSchType"},
  { name: "Name", uid: "fullName"},
  { name: "Phone", uid: "sAlertPhone"},
  { name: "Address", uid: "sAddr"},
  { name: "Actions", uid: "actions" },
];

export const schoolsRender = ({ row, columnKey }) => {
  const cellValue = row[columnKey];
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  switch (columnKey) {
    case "actions":
      return <SchoolActions row={row} />;
    default:
      return cellValue;
  }
};

export { columns };
