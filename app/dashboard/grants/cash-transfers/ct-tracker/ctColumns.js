import { Chip } from "@nextui-org/chip";
import CTActions from "./ctActions";

const columns = [
  // { name: "Row", uid: "id" },
  { name: "State", uid: "state" },
  { name: "State Name", uid: "name" },
  { name: "County", uid: "county", sortable: true },
  { name: "Payam", uid: "payam", sortable: true },
  { name: "Over 18", uid: "over18" },
  { name: "School", uid: "school", sortable: true },
  { name: "Code", uid: "code" },
  { name: "Education", uid: "education", sortable: true },
  { name: "Mandatory Learner ID", uid: "learnerUniqueID" },
  { name: "Form", uid: "form" },
  { name: "Stream", uid: "formstream" },
  { name: "Reference", uid: "reference" },
  { name: "First Name", uid: "firstName" },
  { name: "Middle Name", uid: "middleName" },
  { name: "Last Name", uid: "lastName" },
  { name: "Validation Date", uid: "dateValidatedAtSchool" },
  { name: "CTEF Received at SA", uid: "ctefReceivedAtSA" },
  { name: "CTEF Serial Number", uid: "ctefSerialNumber" },
  { name: "Date Corrected on SSSAMS", uid: "dateCorrectedOnSSSAMS" },
  { name: "Date Approved", uid: "dateApproved" },
  { name: "Signature on Payment List", uid: "signatureOnPaymentList" },
  { name: "Date Collected at School", uid: "dateCollectedAtSchool" },
  { name: "Date Paid at School", uid: "datePaidSchool" },
  { name: "Accountability CTEF Received", uid: "accountabilityCtefReceived" },
  {
    name: "Accountability CTEF Serial Number",
    uid: "accountabilityCtefSerialNumber",
  },
  { name: "Accountability CTEF Signed", uid: "accountabilityCTEFSigned" },
  { name: "Action", uid: "actions" },
];

export const ctRender = ({ row, columnKey }) => {
  const cellValue = row[columnKey];
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }
  switch (columnKey) {
    // case "county":
    //   return (
    //     <div className="flex flex-col">
    //       <p className="text-bold text-small capitalize">{cellValue}</p>
    //       <p className="text-bold text-tiny capitalize text-default-400">
    //         {row.county}
    //       </p>
    //     </div>
    //   );
    case "name":
      return (
        <div className="w-44">
          <p>{cellValue}</p>
        </div>
      );
    case "county":
      return (
        <div className="w-44">
          <p>{cellValue}</p>
        </div>
      );
    case "dob":
      return (
        <div className="w-44">
          <p>{cellValue}</p>
        </div>
      );
    case "school":
      return (
        <div className="w-32">
          <p>{cellValue}</p>
        </div>
      );
    case "form":
      return (
        <div className="w-32">
          <p>{cellValue}</p>
        </div>
      );
    case "stream":
      return (
        <div className="w-32">
          <p>{cellValue}</p>
        </div>
      );
    case "code":
      return (
        <div className="w-32">
          <p>{cellValue}</p>
        </div>
      );
    case "over18":
      return (
        <Chip
          className="capitalize text-xs p-3"
          color={cellValue === "Y" ? "success" : "danger"}
          size="sm"
          variant="flat"
        >
          {cellValue === "Y" ? "Yes" : "No"}
        </Chip>
      );
    case "signatureOnPaymentList":
    case "accountabilityCTEFSigned":
      return (
        <Chip
          className="capitalize text-xs p-3"
          color={Number(cellValue) === 1 ? "success" : "danger"}
          size="sm"
          variant="flat"
        >
          {Number(cellValue) === 1 ? "Yes" : "No"}
        </Chip>
      );
    case "dateValidatedAtSchool":
    case "dateApproved":
    case "ctefReceivedAtSA":
    case "dateCorrectedOnSSSAMS":
    case "dateCollectedAtSchool":
    case "accountabilityCtefReceived":
      return (
        <Chip
          className="capitalize text-xs p-3"
          color={
            cellValue !== null && cellValue !== undefined ? "success" : "danger"
          }
          size="sm"
          variant="flat"
        >
          {cellValue !== null && cellValue !== undefined ? new Date(cellValue)?.toLocaleString('en-us', options) : "N/A"}
        </Chip>
      );
    case "actions":
      return <CTActions row={row} />;
    default:
      return cellValue;
  }
};

export { columns };
