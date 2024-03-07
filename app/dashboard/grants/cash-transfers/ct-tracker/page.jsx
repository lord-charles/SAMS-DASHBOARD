"use client";
import { Card, CardBody } from "@nextui-org/card";
import React from "react";
import CTTable from "./CTTable";
import { Suspense } from "react";
import CardSkeleton from "@/app/CardSkeleton";
import useYearSelect from "@/app/utils/useYearSelect";

const Page = () => {
  const { activeYear, render } = useYearSelect();
  return (
    <>
      {render}
      <Card>
        <CardBody>
          <p className="mb-5">Accountability Tracker (Eligible girls)</p>
          <Suspense fallback={<CardSkeleton />}>
            <CTTable activeYear={activeYear} />
          </Suspense>
        </CardBody>
      </Card>
    </>
  );
};

export default Page;
