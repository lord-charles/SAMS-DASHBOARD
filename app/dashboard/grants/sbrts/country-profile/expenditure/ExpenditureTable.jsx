import { Link } from "@nextui-org/link";
import React from "react";

function ExpenditureTable() {
  const data = [
    {
      State: "E1 - Physical Inputs",
      "Target Schools": "4",
      "A. SGB Sec": "33",
    },
    {
      State: "E2 - Learning Quality",
      "Target Schools": "198",
      "A. SGB Sec": "1,327",
    },
    {
      State: "E3 - General Support",
      "Target Schools": "59",
      "A. SGB Sec": "653",
    },
  ];
  const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
  };
  const cellStyle = {
    border: "1px solid black",
    padding: "8px",
  };
  const renderRows = () => {
    return data.map((row, index) => (
      <tr key={index}>
        {Object.keys(row).map((key, index) => (
          <td key={index} style={cellStyle}>
            {row[key]}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <table border="1" style={tableStyle}>
      <thead>
        <tr>
          <th style={cellStyle} rowSpan="2">
            Code
          </th>
          <th style={cellStyle} rowSpan="3">
            Amount
          </th>
          <th style={cellStyle} rowSpan="3">
            Percent
          </th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
}

export default ExpenditureTable;
