import { Chip } from "@nextui-org/chip";
import CTSchoolActions from "./ctSchoolActions";

const columns = [
  // { name: "Row", uid: "id" },
  { name: "State", uid: "name", sortable: true },
  { name: "County", uid: "county", sortable: true },
  { name: "Payam", uid: "payam", sortable: true },
  { name: "School", uid: "school", sortable: true },
  { name: "Code", uid: "code", flex: 2 },
  { name: "Education", uid: "education", sortable: true },
  { name: "# Pupils", uid: "eligible" },
  { name: "Validated at School", uid: "validatedAtSchool" },
  { name: "Validation Forms received at SA", uid: "validationFormsReceivedSA" },
  { name: "Date corrected on SSSAMS", uid: "dateCorrectedSSSAMS" },
  { name: "# Corrected on SSSAMS", uid: "noDateCorrectedSSSAMS" },
  { name: "CTEF received at SA", uid: "ctefReceivedSA" },
  { name: "# CTEFs Serial Number", uid: "ctefSerialNumber" },
  { name: "Date Approved", uid: "dateApproved" },
  { name: "Payment Method", uid: "paymentMethod" },
  { name: "Date CT funds released to school/bank", uid: "dateCTFundsReleased" },
  { name: "Date Paid at School", uid: "datePaidAtSchool" },
  { name: "Accountability CTEF Received", uid: "accountabilityCTEFReceived" },
  {
    name: "# Accountability CTEF Received",
    uid: "noAccountabilityCTEFReceived",
  },
  { name: "Actions", uid: "actions" },
];

export const ctSchoolRender = ({ row, columnKey }) => {
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
    case "state":
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
    case "code":
      return (
        <div className="w-32">
          <p>{cellValue}</p>
        </div>
      );
    case "validatedAtSchool":
    case "validationFormsReceivedSA":
    case "dateCorrectedSSSAMS":
    case "ctefReceivedSA":
    case "datePaidAtSchool":
    case "dateApproved":
    case "dateCTFundsReleased":
    case "datePaidAtSchool":
    case "accountabilityCTEFReceived":
      return (
        <Chip
          className="capitalize text-xs p-3"
          color={
            cellValue !== "" && cellValue !== null && cellValue !== undefined
              ? "success"
              : "danger"
          }
          size="sm"
          variant="flat"
        >
          {cellValue !== "" && cellValue !== null && cellValue !== undefined
            ? new Date(cellValue)?.toLocaleString('en-us', options)
            : "N/A"}
        </Chip>
      );
    case "actions":
      return <CTSchoolActions row={row} />;
    default:
      return cellValue;
  }
};

export { columns };
