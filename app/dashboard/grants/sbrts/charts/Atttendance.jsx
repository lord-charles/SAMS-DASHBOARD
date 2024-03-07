import NegativeChart from "@/app/components/ui/charts/negative-chart";
import React from "react";

const Atttendance = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <div className="!w-full h-96">
          <h4 className="text-start mb-3 font-bold">
            Attendance Over Last 30 days split by Gender (New to Old)
          </h4>
          <NegativeChart />
        </div>
      </div>
    </>
  );
};

export default Atttendance;
