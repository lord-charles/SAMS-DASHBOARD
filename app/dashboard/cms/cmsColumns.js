import CMSActions from "./cmsActions";

const columns = [
  { name: "Author", uid: "tbl_user_account" },
  { name: "Title", uid: "title" },
  { name: "Description", uid: "description" },
  { name: "Type", uid: "type" },
  { name: "Updated At", uid: "updatedAt" },
  { name: "Actions", uid: "actions" },
];

export const cmsRender = ({ row, columnKey, year }) => {
  const cellValue = row[columnKey];
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  switch (columnKey) {
    case "tbl_user_account":
      return (
        <span>{cellValue?.firstName+" "+cellValue?.lastName}</span>
      );
    case "description":
      return (
        <div dangerouslySetInnerHTML={{ __html: cellValue }} />
      );
    case "updatedAt":
      return (
        <p className="capitalize">
          {new Date(cellValue)?.toLocaleString("en-us", options)}
        </p>
      );
    case "type":
      return (
        <span className="capitalize">
          {cellValue}
        </span>
      );
    case "actions":
      return <CMSActions row={row}/>;
    default:
      return cellValue;
  }
};

export { columns };
