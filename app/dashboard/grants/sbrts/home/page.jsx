"use client";
import { Card, CardBody } from "@nextui-org/card";
import React, { Suspense } from "react";
import SubmissionsTable from "./SubmissionsTable";
const Page = () => {
  return (
    <Card className="mx-5">
      <CardBody>
        <Suspense>
          <SubmissionsTable />
        </Suspense>
      </CardBody>
    </Card>
  );
};
export default Page;
