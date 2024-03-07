"use client";
import React, { Suspense } from "react";
import { Card, CardBody } from "@nextui-org/card";
import useYearSelect from "@/app/utils/useYearSelect";
import PupilValidationTable from "./PupilValidationTable";
import CardSkeleton from "@/app/CardSkeleton";

const Page = () => {
  const { activeYear, render } = useYearSelect();
  return (
    <>
      {render}
      <Card>
        <CardBody>
          <Suspense fallback={<CardSkeleton />}>
            <PupilValidationTable activeYear={activeYear} />
          </Suspense>
        </CardBody>
      </Card>
    </>
  );
};

export default Page;
