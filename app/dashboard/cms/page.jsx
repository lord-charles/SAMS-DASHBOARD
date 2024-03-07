"use client";
import React, { Suspense } from "react";
import CardSkeleton from "@/app/CardSkeleton";
import CMSTable from "./CMSTable";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Page = () => {
  return (
    <>
      <Suspense fallback={<CardSkeleton />}>
        <CMSTable/>
      </Suspense>
      <ToastContainer/>
    </>
  );
};

export default Page;
