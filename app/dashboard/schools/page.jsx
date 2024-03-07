"use client";
import React, { Suspense } from "react";
import ReportingCard from "../ReportingCard";
import SchoolTable from "./SchoolTable";
import { Card, CardBody } from "@nextui-org/card";
import CardSkeleton from "@/app/CardSkeleton";
import StatisticsCard from "./StatisticsCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StateDistributionCard from "../StateDistributionCard";

const Page = () => {
  return (
    <>
      {/* <ReportingCard /> */}

      <Suspense fallback={<CardSkeleton />}>
        <Card className="mx-5 mb-5">
          <CardBody>
            <StatisticsCard />
          </CardBody>
        </Card>
      </Suspense>
      <Suspense fallback={<CardSkeleton />}>
        <Card className="mx-5 mb-5">
          <CardBody>
            <StateDistributionCard activeYear={2020} title={"School"} />
          </CardBody>
        </Card>
      </Suspense>
      <Suspense fallback={<CardSkeleton />}>
        <Card className="mx-5 mb-5">
          <CardBody>
            <SchoolTable />
          </CardBody>
        </Card>
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default Page;
