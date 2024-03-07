"use client";
import { Card, CardBody } from "@nextui-org/card";
import React, { Suspense, useState } from "react";
import LearnerEnrollmentCard from "./LearnerEnrollmentCard";
import StateDistributionCard from "./StateDistributionCard";
import ReportingCard from "./ReportingCard";
import TeachersCard from "./TeachersCard";
import DisabilityMatrixCard from "./DisabilityMatrixCard";
import CardSkeleton from "../CardSkeleton";
import DashboardCard from "./DashboardCard";
import useYearSelect from "../utils/useYearSelect";

import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = () => {
  const { activeYear, render } = useYearSelect();
  const { data: cmsModel, isLoading } = useSWR(`/api/v1/cms`, fetcher, {
    keepPreviousData: true,
  });
  // if (isLoading) {
  //   return <CardSkeleton />;
  // }
  const resultObject = {};

  cmsModel?.rows?.forEach((item) => {
    const type = item.type;

    // Create an object for the type if it doesn't exist
    if (!resultObject[type]) {
      resultObject[type] = {};
    }

    // Add relevant data to the object for the type
    resultObject[type] = {
      id: item.id,
      title: item.title,
      description: item.description,
    };
  });
  const tabPages = [
    <StateDistributionCard
      key="stateCard"
      activeYear={activeYear}
      content={resultObject?.states}
    />,
    <LearnerEnrollmentCard
      key="learnerCard"
      activeYear={activeYear}
      content={resultObject["learner enrollment"]}
    />,
    <TeachersCard
      key="teacherCard"
      activeYear={activeYear}
      content={resultObject?.teachers}
    />,
  ];
  const [activeTabs, setActiveTabs] = useState(tabPages);
  const handleChange = (index) => {
    const newTabs = [...tabPages];
    const selectedItem = newTabs[index];
    newTabs.splice(index, 1);
    newTabs.unshift(selectedItem);
    setActiveTabs(newTabs);
  };
  return (
    <>
      <Card className="mx-5 mb-5">
        <CardBody>
          {render}
          <Suspense fallback={<CardSkeleton />}>
            <DashboardCard
              activeYear={activeYear}
              content={resultObject?.dashboard}
              handleChange={handleChange}
            />
          </Suspense>
        </CardBody>
      </Card>

      {activeTabs.map((item, index) => {
        return (
          <Card className="mx-5 mb-5" key={index}>
            <CardBody>
              <Suspense fallback={<CardSkeleton />}>
                {React.cloneElement(item, { activeYear: activeYear })}
              </Suspense>
            </CardBody>
          </Card>
        );
      })}

      {/* <Suspense fallback={<CardSkeleton />}>
        <DisabilityMatrixCard activeYear={activeYear} />
      </Suspense> */}

      {/* <Suspense fallback={<CardSkeleton />}>
        <ReportingCard />
      </Suspense> */}
    </>
  );
};

export default Page;
