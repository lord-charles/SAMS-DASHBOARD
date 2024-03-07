import { Link } from "@nextui-org/link";
import React from "react";

function T1TypeTable() {
  const data = [
    {
      State: <Link href="#">Abyei AA</Link>,
      "Target Schools": "4",
      "A. SGB Sec": "33",
      "A. SGB Pri": "4",
      "B. Dev Plan Sec": "30",
      "B. Dev Plan Pri": "4",
      "C. Budget Sec": "30",
      "C. Budget Pri": "4",
      "D. Ledger Sec": "30",
      "D. Ledger Pri": "4",
      "E. School Bank Sec": "25",
      "E. School Bank Pri": "3",
    },
    {
      State: <Link href="#">Central Equatoria</Link>,
      "Target Schools": "198",
      "A. SGB Sec": "1,327",
      "A. SGB Pri": "134",
      "B. Dev Plan Sec": "857",
      "B. Dev Plan Pri": "134",
      "C. Budget Sec": "857",
      "C. Budget Pri": "134",
      "D. Ledger Sec": "857",
      "D. Ledger Pri": "134",
      "E. School Bank Sec": "489",
      "E. School Bank Pri": "60",
    },
    {
      State: <Link href="#">Eastern Equatoria</Link>,
      "Target Schools": "59",
      "A. SGB Sec": "653",
      "A. SGB Pri": "38",
      "B. Dev Plan Sec": "404",
      "B. Dev Plan Pri": "38",
      "C. Budget Sec": "405",
      "C. Budget Pri": "38",
      "D. Ledger Sec": "405",
      "D. Ledger Pri": "38",
      "E. School Bank Sec": "157",
      "E. School Bank Pri": "16",
    },
    {
      State: <Link href="#">Jonglei</Link>,
      "Target Schools": "61",
      "A. SGB Sec": "808",
      "A. SGB Pri": "36",
      "B. Dev Plan Sec": "482",
      "B. Dev Plan Pri": "36",
      "C. Budget Sec": "484",
      "C. Budget Pri": "36",
      "D. Ledger Sec": "484",
      "D. Ledger Pri": "36",
      "E. School Bank Sec": "407",
      "E. School Bank Pri": "26",
    },
    {
      State: <Link href="#">Lakes</Link>,
      "Target Schools": "38",
      "A. SGB Sec": "577",
      "A. SGB Pri": "19",
      "B. Dev Plan Sec": "364",
      "B. Dev Plan Pri": "19",
      "C. Budget Sec": "340",
      "C. Budget Pri": "19",
      "D. Ledger Sec": "343",
      "D. Ledger Pri": "19",
      "E. School Bank Sec": "310",
      "E. School Bank Pri": "8",
    },
    {
      State: <Link href="#">Northern Bahr el Ghazal</Link>,
      "Target Schools": "57",
      "A. SGB Sec": "758",
      "A. SGB Pri": "31",
      "B. Dev Plan Sec": "61",
      "B. Dev Plan Pri": "31",
      "C. Budget Sec": "61",
      "C. Budget Pri": "31",
      "D. Ledger Sec": "59",
      "D. Ledger Pri": "31",
      "E. School Bank Sec": "129",
      "E. School Bank Pri": "8",
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
          <th style={cellStyle} rowSpan="2">
            Schools Identified
          </th>
          <th style={cellStyle} colSpan="5">
            GESS
          </th>
          <th style={cellStyle} colSpan="5">
            GRSS
          </th>
        </tr>
        <tr>
          <th style={cellStyle}>AES</th>
          <th style={cellStyle}>ALP</th>
          <th style={cellStyle}>PRE</th>
          <th style={cellStyle}>PRI</th>
          <th style={cellStyle}>SEC</th>
          <th style={cellStyle}>AES</th>
          <th style={cellStyle}>ALP</th>
          <th style={cellStyle}>PRE</th>
          <th style={cellStyle}>PRI</th>
          <th style={cellStyle}>SEC</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
}

export default T1TypeTable;
