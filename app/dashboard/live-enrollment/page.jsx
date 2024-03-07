"use client";
import React, { Suspense } from "react";
import LearnerEnrollmentCard from "../LearnerEnrollmentCard";
import { Card, CardBody } from "@nextui-org/card";
import useYearSelect from "@/app/utils/useYearSelect";
import CardSkeleton from "@/app/CardSkeleton";
import StatisticsCard from "./StatisticsCard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSelectCounty from "../../utils/useSelectCounty";
import useSelectState from "../../utils/useSelectState";
import useSelectPayam from "../../utils/useSelectPayam";
import useSelectSchool from "../../utils/useSelectSchool";
import { useSearchParams } from "next/navigation";
import LearnersTable from "./LearnersTable";
import LiveEnrollmentChart from "./LiveEnrollmentChart";
import { Spinner } from "@nextui-org/react";

const Page = () => {
  const searchParams = useSearchParams();
  const state = searchParams.get("state");
  const county = searchParams.get("county");
  const payam = searchParams.get("payam");
  const school = searchParams.get("school");
  const {
    activeState,
    render: stateRender,
    data: stateData,
    isLoading: stateLoading,
  } = useSelectState();
  const {
    activeCounty,
    render: countyRender,
    data: countyData,
    isLoading: countyLoading,
  } = useSelectCounty(activeState);
  const {
    activePayam,
    render: payamRender,
    data: payamData,
    isLoading: payamLoading,
  } = useSelectPayam(activeCounty);
  const { activeSchool, render: schoolRender } = useSelectSchool(activePayam);
  return (
    <>
      <Suspense fallback={<CardSkeleton />}>
        <Card className="mx-5 mb-5">
          <CardBody>
            <h4 className="text-start mb-3 font-bold">Live Enrollment</h4>
            <div className="gap-5 grid sm:grid-cols-4 mt-6 justify-end">
              {stateRender}
              {state && countyRender}
              {county && payamRender}
              {payam && schoolRender}
            </div>
            <StatisticsCard
              state={state}
              county={county}
              payam={payam}
              school={school}
            />
          </CardBody>
        </Card>
      </Suspense>

      {!school && (
        <Suspense fallback={<CardSkeleton />}>
          <Card className="mx-5 mb-5">
            <CardBody>
              {!stateLoading && !countyLoading && !payamLoading ? (
                <LiveEnrollmentChart
                  data={county ? payamData : state ? countyData : stateData}
                  title={
                    county
                      ? "Enrollment Distribution by Payam"
                      : state
                      ? "Enrollment Distribution by County"
                      : "Enrollment Distribution by State"
                  }
                />
              ) : (
                <Spinner />
              )}
            </CardBody>
          </Card>
        </Suspense>
      )}
      {school && (
        <Suspense fallback={<CardSkeleton />}>
          <Card className="mx-5 mb-5">
            <CardBody>
              <LearnersTable school={activeSchool} />
            </CardBody>
          </Card>
        </Suspense>
      )}
      <ToastContainer />
    </>
  );
};

export default Page;
