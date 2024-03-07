"use client";
import { Suspense } from "react";
import CTSchoolTable from "./CTSchoolTable";
import CardSkeleton from "@/app/CardSkeleton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useYearSelect from "@/app/utils/useYearSelect";

const Page = () => {
  const { activeYear, render } = useYearSelect();
  return (
    <>
      {render}
      <Suspense fallback={<CardSkeleton />}>
        <CTSchoolTable activeYear={activeYear} />
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default Page;
