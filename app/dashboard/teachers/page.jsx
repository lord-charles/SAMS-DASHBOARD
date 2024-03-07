"use client";
import React, { Suspense } from "react";
import TeachersCard from "../TeachersCard";
import { Card, CardBody } from "@nextui-org/card";
import useYearSelect from "@/app/utils/useYearSelect";
import CardSkeleton from "@/app/CardSkeleton";
import TeachersTable from "./TeachersTable";
import StatisticsCard from "./StatisticsCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const { activeYear, render } = useYearSelect();
  return (
    <>
      <Suspense fallback={<CardSkeleton />}>
        <Card className="mx-5 mb-5">
          <CardBody>
            {render}
            <StatisticsCard activeYear={activeYear} />
          </CardBody>
        </Card>
      </Suspense>

      <Suspense fallback={<CardSkeleton />}>
        <Card className="mx-5 mb-5">
          <CardBody>
            <TeachersTable activeYear={activeYear} />
          </CardBody>
        </Card>
      </Suspense>
      <Suspense fallback={<CardSkeleton />}>
        <Card className="mx-5 mb-5">
          <CardBody>
            <TeachersCard activeYear={activeYear} />
          </CardBody>
        </Card>
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default Page;
