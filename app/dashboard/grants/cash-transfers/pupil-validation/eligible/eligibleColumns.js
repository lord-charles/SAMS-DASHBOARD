import { Chip } from "@nextui-org/chip";

const columns = [
  { name: "Form", uid: "username", sortable: true },
  { name: "Learner Unique ID", uid: "fullName", sortable: true },
  { name: "Reference", uid: "reference" },
  { name: "Name", uid: "name" },
  { name: "DOB", uid: "dob" },
  { name: "Gender", uid: "gennder" },
  { name: "Age Status", uid: "age" },
  { name: "Disability", uid: "disability" },
  { name: "Area of difficulty", uid: "difficulty" },
  { name: "Guardian name", uid: "guardian_name" },
  { name: "Contact", uid: "contact" },
  { name: "Relevant Code", uid: "code" },
  { name: "Correction Needed", uid: "correction" },
];

export const eligibleRender = ({ row, columnKey }) => {
  const cellValue = row[columnKey];
  switch (columnKey) {
    case "status":
      return (
        <Chip
          className="capitalize text-xs p-3"
          color={cellValue === "active" ? "success" : "danger"}
          size="sm"
          variant="flat"
        >
          {cellValue}
        </Chip>
      );
    default:
      return cellValue;
  }
};

export { columns };
