"use client";
import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import DocumentsTable from "./DocumentsTable";
const Page = () => {
  const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
  };
  const cellStyle = {
    border: "1px solid black",
    padding: "8px",
  };
  return (
    <Card className="mx-5">
      <CardBody>
        <p className="mb-3 font-bold">Document Uploads</p>
        <DocumentsTable />
      </CardBody>
    </Card>
  );
};
export default Page;
