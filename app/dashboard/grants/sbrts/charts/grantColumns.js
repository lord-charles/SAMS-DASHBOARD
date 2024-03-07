import { Link } from "@nextui-org/link";
import GrantActions from "./grantActions";

const columns = [
  { name: "Grant Name", uid: "grantName" },
  { name: "Amount", uid: "amount" },
  { name: "Expenditure", uid: "expenditure" },
  { name: "Unaccounted", uid: "unaccounted" },
  { name: "Actions", uid: "actions" },
  // { name: "Cumulative", uid: "paid" },
];

export const grantsRender = ({ row, columnKey, year }) => {
  const cellValue = row[columnKey];
  switch (columnKey) {
    case "stateName":
      return (
        <Link
          href={`/dashboard/grants/cash-transfers/home?year=${row?.year}&id=${row?.id}&view=${row?.view}&statemodel=10`}
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

    case "actions":
      return <GrantActions />;
    default:
      return cellValue;
  }
};

export { columns };
