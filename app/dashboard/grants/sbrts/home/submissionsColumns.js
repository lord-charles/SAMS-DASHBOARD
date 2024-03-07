import { Link } from "@nextui-org/link";

const columns = [
  { name: "Submitted", uid: "Submitted" },
  { name: "From", uid: "From" },
  { name: "Type", uid: "Type" },
  { name: "Submission", uid: "Submission" },
  { name: "Year", uid: "Year" },
  { name: "School", uid: "School" },
  // { name: "Cumulative", uid: "paid" },
];

export const submissionsRender = ({ row, columnKey }) => {
  const cellValue = row[columnKey];
  switch (columnKey) {
    default:
      return cellValue;
  }
};

export { columns };
