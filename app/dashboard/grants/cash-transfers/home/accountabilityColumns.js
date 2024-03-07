import { Link } from "@nextui-org/link";

const columns = [
  // { name: "State Code", uid: "stateCode", sortable: true },
  { name: "Name", uid: "name", sortable: true },
  { name: "SA CTEF Serial", uid: "serialCtef", sortable: true },
  { name: "Eligible", uid: "eligible", sortable: true },
  { name: "Approved", uid: "validated", sortable: true },
  { name: "Signed on Payment List", uid: "signedPayment", sortable: true },
  { name: "Acc CTEF Serial", uid: "serialAccCtef" },
  { name: "Acc CTEF Signed", uid: "signedPayment" },
  { name: "P5 Girls", uid: "uReceivedP5" },
  { name: "New Schools", uid: "uReceivedNewSchools" },
  { name: "Cumulative", uid: "uReceivedCuml" },
  // { name: "Cumulative", uid: "paid" },
];

export const accountabilityRender = ({ row, columnKey, year }) => {
  const cellValue = row[columnKey];
  switch (columnKey) {
    case "name":
      return (
        <Link
          href={`/dashboard/grants/cash-transfers/home?year=${row?.year}&id=${row?.id}`}
          color="primary"
          size="sm"
        >
          {cellValue}
        </Link>
      );
    case "serialCtef":
    case "validated":
    case "signedPayment":
    case "serialAccCtef":
    case "eligible":
    case "uReceivedP5":
    case "uReceivedNewSchools":
    case "uReceivedCuml":
      return cellValue ? Number(cellValue)?.toLocaleString("en-US") : 0;

    // case "actions":
    //   return <AccountabilityActions />;
    default:
      return cellValue;
  }
};

export { columns };
