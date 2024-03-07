import { Link } from "@nextui-org/link";
import React from "react";

function PreSchoolTable() {
  const data = [
    {
      State: <Link href="#">Abyei AA</Link>,
      "Target Schools": "4",
      "A. SGB Sec": "33",
      "A. SGB Pri": "4",
      "B. Dev Plan Sec": "30",
      "B. Dev Plan Pri": "4",
    },
    {
      State: <Link href="#">Central Equatoria</Link>,
      "Target Schools": "198",
      "A. SGB Sec": "1,327",
      "A. SGB Pri": "134",
      "B. Dev Plan Sec": "857",
      "B. Dev Plan Pri": "134",
    },
    {
      State: <Link href="#">Eastern Equatoria</Link>,
      "Target Schools": "59",
      "A. SGB Sec": "653",
      "A. SGB Pri": "38",
      "B. Dev Plan Sec": "404",
      "B. Dev Plan Pri": "38",
    },
    {
      State: <Link href="#">Jonglei</Link>,
      "Target Schools": "61",
      "A. SGB Sec": "808",
      "A. SGB Pri": "36",
      "B. Dev Plan Sec": "482",
      "B. Dev Plan Pri": "36",
    },
    {
      State: <Link href="#">Lakes</Link>,
      "Target Schools": "38",
      "A. SGB Sec": "577",
      "A. SGB Pri": "19",
      "B. Dev Plan Sec": "364",
      "B. Dev Plan Pri": "19",
    },
    {
      State: <Link href="#">Northern Bahr el Ghazal</Link>,
      "Target Schools": "57",
      "A. SGB Sec": "758",
      "A. SGB Pri": "31",
      "B. Dev Plan Sec": "61",
      "B. Dev Plan Pri": "31",
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
            State
          </th>
          <th style={cellStyle} rowSpan="3">
            Schools Approved
          </th>
          <th style={cellStyle} colSpan="3">
            Enrolled
          </th>
          <th style={cellStyle} rowSpan="2">
            Amount
          </th>
        </tr>
        <tr>
          <th style={cellStyle}>Boys</th>
          <th style={cellStyle}>Girls</th>
          <th style={cellStyle}>Pupils</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
}

export default PreSchoolTable;
