import EnrollmentChart from "@/app/components/ui/charts/enrollment";
import ToolChart from "@/app/components/ui/charts/tool-chart";
import React from "react";

const DocumentUploads = () => {
  const tools = [
    {
      name: "A",
      "Schools in System": "4135",
      "Section A": "3130",
    },
    {
      name: "B",
      "Schools in System": "456679",
      "Section A": "446498",
    },
    {
      name: "C",
      "Schools in System": "223225",
      "Section A": "139282",
    },
    {
      name: "D",
      "Schools in System": "87541",
      "Section A": "87460",
    },
  ];
  return (
    <>
      {tools?.length > 0 && (
        <div className="flex justify-between items-center mb-5">
          <div className="!w-full h-96">
            <h4 className="text-start mb-3 font-bold">
              Supporting Files Uploaded By State 2023
            </h4>
            <ToolChart
              data={tools}
              labels={["Schools in System", "Section A"]}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DocumentUploads;
