"use client";
import React, { Suspense } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import ShapePie from "@/app/components/ui/charts/shape-pie";
import SimpleLineChart from "@/app/components/ui/charts/line-chart";
import { pieData } from "@/app/lib/data";
import CardSkeleton from "@/app/CardSkeleton";
import { useRouter } from "next/navigation";
import useYearSelect from "@/app/utils/useYearSelect";
import HomeTable from "./HomeTable";

const Page = () => {
  const router = useRouter();
  const { activeYear, render } = useYearSelect();

  const timeSeries = [
    {
      name: "January",
      male_present: 4000,
      male_absent: 2000,
      female_present: 2400,
      female_absent: 400,
      amt: 2400,
    },
    {
      name: "February",
      male_present: 3000,
      male_absent: 2000,
      female_present: 1398,
      female_absent: 200,
      amt: 2210,
    },
    {
      name: "March",
      male_present: 2000,
      male_absent: 200,
      female_present: 9800,
      female_absent: 2400,
      amt: 2290,
    },
    {
      name: "Apr",
      male_present: 2780,
      male_absent: 3000,
      female_present: 3908,
      female_absent: 600,
      amt: 2000,
    },
    {
      name: "May",
      male_present: 1890,
      male_absent: 400,
      female_present: 4800,
      female_absent: 1000,
      amt: 2181,
    },
    {
      name: "Jun",
      male_present: 2390,
      male_absent: 2000,
      female_present: 3800,
      female_absent: 100,
      amt: 2500,
    },
  ];
  const data = [
    { name: "Central Equatoria", value: 71379, fill: "#FFBB00" },
    { name: "Eastern Equatoria", value: 2297, fill: "#232E66" },
    { name: "Jonglei", value: 2297, fill: "#ACACAC" },
    { name: "Lakes", value: 2297, fill: "#BA00FF" },
    { name: "Northern Bahr el Ghazal", value: 2297, fill: "#B1CF4B" },
    { name: "Ruweng AA", value: 2297, fill: "#002AFF" },
    { name: "Abyei AA", value: 2297, fill: "#236642" },
    { name: "Upper Nile State", value: 71370, fill: "#E06127" },
    { name: "Unity", value: 2297, fill: "#663823" },
    { name: "Western Bahr el Ghazal", value: 2297, fill: "#60BABA" },
    { name: "Western Equatoria", value: 2297, fill: "#FF0000" },
    { name: "Warrap", value: 2297, fill: "#00E523" },
    { name: "Pibor AA", value: 2297, fill: "#008080" },
  ];
  return (
    <>
      {render}

      <Suspense fallback={<CardSkeleton />}>
        <HomeTable activeYear={activeYear} />
      </Suspense>

      <Card className="my-10">
        <CardBody>
          <h1 className="!font-bold">Eligible Girls from P5-S4</h1>
          <hr className="my-3" />
          <div className="!w-full h-96">
            <SimpleLineChart data={timeSeries} />
          </div>
          <div className="!h-2"></div>
        </CardBody>
      </Card>
    </>
  );
};

export default Page;
