import EnrollmentChart from "@/app/components/ui/charts/enrollment";
import ToolChart from "@/app/components/ui/charts/tool-chart";
import React from "react";

const ToolSubmission = () => {
  const tools = [
    {
      name: "A",
      "Schools in System": "4135",
      "Budget Details": "3130",
    },
    {
      name: "B",
      "Schools in System": "456679",
      "Budget Details": "446498",
    },
    {
      name: "C",
      "Schools in System": "223225",
      "Budget Details": "139282",
    },
    {
      name: "D",
      "Schools in System": "87541",
      "Budget Details": "87460",
    },
  ];
  return (
    <>
      {tools?.length > 0 && (
        <div className="flex justify-between items-center mb-5">
          <div className="!w-full h-96">
            <h4 className="text-start mb-3 font-bold">
              Budget and Ledger Submissions by 2023
            </h4>
            <ToolChart
              data={tools}
              labels={["Schools in System", "Budget Details"]}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ToolSubmission;
