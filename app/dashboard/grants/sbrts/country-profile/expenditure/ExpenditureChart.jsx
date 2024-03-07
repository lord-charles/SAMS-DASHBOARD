import ShapePie from "@/app/components/ui/charts/shape-pie";
import React from "react";

const ExpenditureChart = () => {
  const pieData = [
    {
      name: "E3 - General Support",
      value: 1500,
      fill: "#FFBB00",
    },
    {
      name: "E1 - Physical Inputs",
      value: 2500,
      fill: "#FF5500",
    },
    {
      name: "E2 - Learning Quality",
      value: 1800,
      fill: "#00AABB",
    },
  ];
  return (
    <div>
      {pieData?.length > 0 && (
        <div className="!w-full h-96 mb-5">
          <h4 className="text-start mb-3 font-bold">
            Planned Expenditure by Summary Code
          </h4>
          <ShapePie data={pieData} />
        </div>
      )}
    </div>
  );
};

export default ExpenditureChart;
