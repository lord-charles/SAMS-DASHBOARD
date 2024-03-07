import StudentActions from "./studentActions";

const columns = [
  { name: "Reference", uid: "stRef" },
  { name: "Gender", uid: "stGender"},
  { name: "Date of Birth", uid: "stDOB"},
  { name: "Name", uid: "fullName"},
  { name: "State", uid: "stState"},
  { name: "Orphan", uid: "stOrphan" },
  { name: "Special Needs", uid: "stSpecialNeeds"},
  { name: "Actions", uid: "actions" },
];

export const studentRender = ({ row, columnKey }) => {
  const cellValue = row[columnKey];
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  switch (columnKey) {
    case "stDOB":
      return (
        <p className="capitalize">
          {new Date(cellValue)?.toLocaleString("en-us", options)}
        </p>
      );
    case "actions":
      return <StudentActions row={row} />;
    default:
      return cellValue;
  }
};

export { columns };
