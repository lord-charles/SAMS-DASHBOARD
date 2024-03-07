import PupilActions from "./PupilActions";

const columns = [
  // { name: "Row", uid: "id" },
  { name: "State Code", uid: "stateCode", sortable: true },
  { name: "County", uid: "countyName", sortable: true },
  { name: "Payam", uid: "payamName", sortable: true },
  { name: "Education", uid: "educationLevel", sortable: true },
  { name: "School", uid: "schoolName", sortable: true },
  { name: "Code", uid: "code" },
  { name: "Eligible Students", uid: "pupilCount" },
  { name: "Paid Students", uid: "paid" },
  { name: "Actions", uid: "actions" },
];

export const pupilValidationRender = ({ row, columnKey }) => {
  const cellValue = row[columnKey];
  switch (columnKey) {
    case "countyName":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-small capitalize">{cellValue}</p>
          <p className="text-bold text-tiny capitalize text-default-400">
            {row.county}
          </p>
        </div>
      );
    case "actions":
      return <PupilActions />;
    default:
      return cellValue;
  }
};

export { columns };
