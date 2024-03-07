import studentTrackerRepository from "@/redis-models/RedisStudentTracker";
import { NextResponse } from "next/server";
import { EntityId } from "redis-om";
const fs = require("fs");
const XLSX = require("xlsx");

function getExpectedDataType(propertyName) {
  switch (propertyName) {
    case "year":
    case "form":
    case "formstream":
    case "age":
    case "learnerUniqueID":
    case "signatureOnPaymentList":
    case "ctPaid":
    case "uniqueReceivedP5Girls":
    case "uniqueReceivedNewSchools":
    case "uniqueReceived":
      return "number";
    case "dob":
    case "ctefReceivedAtSA":
    case "dateValidatedAtSchool":
    case "dateCorrectedOnSSSAMS":
    case "dateCollectedAtSchool":
    case "accountabilityCtefReceived":
    case "dateApproved":
      return "date";
    default:
      return "string";
  }
}
const columnMapping = {
  year: "year",
  state10: "state",
  stateName10: "name",
  county10: "county",
  payam10: "payam",
  school: "school",
  code: "code",
  education: "education",
  form: "form",
  formstream: "formstream",
  gender: "gender",
  dob: "dob",
  age: "age",
  "first name": "firstName",
  "middle name": "middleName",
  "last name": "lastName",
  "Learner UniqueID": "learnerUniqueID",
  reference: "reference",
  over18: "over18",
  "Date Validated at School": "dateValidatedAtSchool",
  "CTEF received at SA": "ctefReceivedAtSA",
  "CTEF Serial number": "ctefSerialNumber",
  "Date corrected on SSSAMS": "dateCorrectedOnSSSAMS",
  "Date Approved": "dateApproved",
  "Signature on Payment List": "signatureOnPaymentList",
  "Date Collected at School": "dateCollectedAtSchool",
  "Accountability CTEF Received": "accountabilityCtefReceived",
  "Accountability CTEF Serial number": "accountabilityCtefSerialNumber",
  "CT Paid": "ctPaid",
  "Date CT Paid": "dateCtPaid",
  "Unique Received P5 Girls": "uniqueReceivedP5Girls",
  "Unique Received New Schools": "uniqueReceivedNewSchools",
  "Unique Received": "uniqueReceived",
};

export async function OPTIONS(request) {
  const origin = request.headers.get("origin");

  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function GET(request) {
  const origin = request.headers.get("origin");
  const { searchParams } = new URL(request.url);
  const year = searchParams.get("year");
  const filePath = `./ct-report-students-${year}.xlsx`;

  if (fs.existsSync(filePath)) {
    var workbook = XLSX.readFile(filePath);
    let worksheet = workbook.Sheets[workbook.SheetNames[0]];
    // Get the range of cells in the worksheet
    const range = XLSX.utils.decode_range(worksheet["!ref"]);
    const maxRow = range.e.r; // The last row index
    // Initialize an array to store the JSON objects

    const headers = [];
    for (let colIndex = range.s.c; colIndex <= range.e.c; colIndex++) {
      const cellAddress = XLSX.utils.encode_cell({ r: range.s.r, c: colIndex });
      const cell = worksheet[cellAddress];
      const cellValue = cell ? cell.v : undefined;
      headers.push(cellValue);
    }

    let uniqueIdCounter = 1;
    // Iterate through the rows, starting from the second row (index 1)
    for (let rowIndex = range.s.r + 1; rowIndex <= maxRow; rowIndex++) {
      const rowObject = { id: uniqueIdCounter }; // Add an 'id' property to the rowObject
      uniqueIdCounter++;
      //   const rowObject = {};
      for (let colIndex = range.s.c; colIndex <= range.e.c; colIndex++) {
        // Get the original column header
        const header =
          worksheet[XLSX.utils.encode_cell({ r: range.s.r, c: colIndex })].v;

        // Map the original header to the desired property name
        const propertyName = columnMapping[header] || header;

        const cellAddress = XLSX.utils.encode_cell({
          r: rowIndex,
          c: colIndex,
        });
        const cell = worksheet[cellAddress];
        const cellValue = cell ? cell.v : undefined;

        // Determine the expected data type for the current field based on 'ctSchema'
        const expectedDataType = getExpectedDataType(propertyName);

        // Handle data type conversions
        if (expectedDataType === "number") {
          // Convert to a number if the field is expected to be a number
          rowObject[propertyName] =
            cellValue !== undefined ? parseFloat(cellValue) : null;
        } else if (expectedDataType === "string") {
          // Convert to a string if the field is expected to be a string
          rowObject[propertyName] =
            cellValue !== undefined ? cellValue.toString() : "";
        } else if (expectedDataType === "date") {
          // Parse the date using XLSX.SSF.parse_date_code
          const parsedDate = XLSX.SSF.parse_date_code(cellValue);

          if (typeof parsedDate === "object" && parsedDate.D !== undefined) {
            if (parsedDate.y < 1901) {
              rowObject[propertyName] = null; // Return null for this specific date
            } else {
              // Create a JavaScript Date object with the adjusted day
              const date = new Date(
                parsedDate.y, // Year
                parsedDate.m - 1, // Month (subtract 1 because it's zero-based)
                parsedDate.d, // Add 1 day to correct the offset
                parsedDate.H || 0, // Hour (default to 0 if undefined)
                parsedDate.M || 0, // Minute (default to 0 if undefined)
                parsedDate.S || 0 // Second (default to 0 if undefined)
              );

              // Format the date as "YYYY-MM-DD"
              const formattedDate = `${date.getFullYear()}-${(
                date.getMonth() + 1
              )
                .toString()
                .padStart(2, "0")}-${date
                .getDate()
                .toString()
                .padStart(2, "0")}`;

              // Set the formatted date in the rowObject
              rowObject[propertyName] = formattedDate;
            }
          } else {
            rowObject[propertyName] = null;
          }
        } else {
          // Handle other data types as needed
          rowObject[propertyName] = cellValue;
        }
      }
      try {
        const tracker = await studentTrackerRepository.save(rowObject)
        tracker.id = tracker[EntityId]

        await studentTrackerRepository.save(tracker)
      } catch (error) {
        console.log(error);
      }
    }

    const hello = "Data upload successful!";

    return new Response(JSON.stringify({ hello }), {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
    });
  } else {
    console.error("File does not exist:", filePath);
    const hello = "File does not exist";
    return new Response(JSON.stringify({ hello }), {
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "application/json",
      },
      status: 404,
    });
  }
}
export async function DELETE(request) {
  const origin = request.headers.get("origin");
  const { searchParams } = new URL(request.url);
  const year = searchParams.get("year");
  if (year >= 2021) {
    const ids = await studentTrackerRepository.search().where('year').eq(year).return.allIds()
    await studentTrackerRepository.remove(...ids)  
  } else {
  }

  const message = "Data deleted successfully!";
  return new Response(JSON.stringify({ message }), {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
}
