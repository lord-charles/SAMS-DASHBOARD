import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import ReportingCard from "../ReportingCard";

const Page = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Card className="mx-5">
      <CardBody>
        <ReportingCard activeYear={currentYear} />
      </CardBody>
    </Card>
  );
};

export default Page;
