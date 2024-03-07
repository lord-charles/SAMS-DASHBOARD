import ShapePie from "@/app/components/ui/charts/shape-pie";

import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Spinner } from "@nextui-org/spinner";
import React from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const pieData = [
  {
    name: "Classroom Supplies",
    value: 1500,
    fill: "#FFBB00",
  },
  {
    name: "Travel",
    value: 2500,
    fill: "#FF5500",
  },
  {
    name: "School Meals",
    value: 1800,
    fill: "#00AABB",
  },
  {
    name: "Bank Charges",
    value: 1700,
    fill: "#BB00FF",
  },
  {
    name: "Allowances and Pay",
    value: 2200,
    fill: "#55FF00",
  },
  {
    name: "Learning Materials",
    value: 1900,
    fill: "#FF00FF",
  },
];
const ActualExpenditure = ({ activeYear }) => {
  const { data, isLoading } = useSWR(
    `/api/v1/sbrt/planned-expenditure?year=${activeYear}`,
    fetcher,
    {
      keepPreviousData: true,
    }
  );
  const getRandomColorClass = () => {
    const colors = ["primary", "success", "danger", "warning", "secondary"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  // const pieData = (data ?? []).map((item, index) => {
  //   return {
  //     name: item?.budgetCode,
  //     value: Number(item?.total),
  //     fill: getRandomColor(),
  //   };
  // });

  return (
    <div className="flex flex-col justify-between items-center mt-8">
      <div className="w-full">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <>
            {pieData?.length > 0 && (
              <div className="!w-full h-96 mb-5">
                <h4 className="text-start mb-3 font-bold">
                  Actual Expenditure By Code
                </h4>
                <ShapePie data={pieData} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ActualExpenditure;
