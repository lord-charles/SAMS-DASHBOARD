"use client"
import React, { Suspense } from "react";
import LearnerEnrollmentCard from "../LearnerEnrollmentCard";
import { Card, CardBody } from "@nextui-org/card";
import useYearSelect from "@/app/utils/useYearSelect";
import CardSkeleton from "@/app/CardSkeleton";
import StudentsTable from "./StudentsTable";
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
            <StatisticsCard/>
        </CardBody>
        </Card>
    </Suspense>

    <Suspense fallback={<CardSkeleton />}>
      <Card className="mx-5 mb-5">
        <CardBody>
            <StudentsTable/>
        </CardBody>
        </Card>
    </Suspense>
    <Suspense fallback={<CardSkeleton />}>
      <Card className="mx-5 mb-5">
        <CardBody>
          <LearnerEnrollmentCard activeYear={activeYear} />
        </CardBody>
      </Card>
    </Suspense>
    <ToastContainer/>
    </>
  )
};

export default Page;

