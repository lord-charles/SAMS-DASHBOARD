"use client";
import NextUITable from "@/app/components/tables/NextUITable";
import React from "react";
import useSWR from "swr";
import { Card, CardBody } from "@nextui-org/card";
import { columns, submissionsRender } from "./submissionsColumns";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const rows = [
  {
    id: 1,
    Submitted: "~12 hrs ago",
    From: "Andrea Amet Ubiu",
    Type: "Data Entry",
    Submission: "Ledger",
    Year: "2022",
    School: "Akorok Primary (KRO)",
  },
  {
    id: 2,
    Submitted: "~12 hrs ago",
    From: "Andrea Amet Ubiu",
    Type: "Data Entry",
    Submission: "Ledger",
    Year: "2022",
    School: "Rehan Fai Primary (RFP)",
  },
  {
    id: 3,
    Submitted: "~12 hrs ago",
    From: "Andrea Amet Ubiu",
    Type: "Data Entry",
    Submission: "Ledger",
    Year: "2022",
    School: "Tharkueng Secondary School (TSQ)",
  },
  {
    id: 4,
    Submitted: "~12 hrs ago",
    From: "Andrea Amet Ubiu",
    Type: "Data Entry",
    Submission: "Ledger",
    Year: "2023",
    School: "Wau Day Seconadary School (WSE)",
  },
  {
    id: 5,
    Submitted: "~12 hrs ago",
    From: "Andrea Amet Ubiu",
    Type: "Data Entry",
    Submission: "Ledger",
    Year: "2023",
    School: "Mapel Secondary School (PEL)",
  },
  {
    id: 6,
    Submitted: "~12 hrs ago",
    From: "Andrea Amet Ubiu",
    Type: "Data Entry",
    Submission: "Ledger",
    Year: "2022",
    School: "Mapel Secondary School (PEL)",
  },
  {
    id: 7,
    Submitted: "~2 days ago",
    From: "Icha Isaac",
    Type: "Scan Upload",
    Submission: "Ledger",
    Year: "2022",
    School: "Baan Primary (BNC)",
  },
  {
    id: 8,
    Submitted: "~2 days ago",
    From: "Icha Isaac",
    Type: "Scan Upload",
    Submission: "Ledger",
    Year: "2022",
    School: "Kuemduok Primary School. (KMH)",
  },
  {
    id: 9,
    Submitted: "~2 days ago",
    From: "Icha Isaac",
    Type: "Scan Upload",
    Submission: "Ledger",
    Year: "2022",
    School: "Koat Gai Primary School (KAI)",
  },
  {
    id: 10,
    Submitted: "~2 days ago",
    From: "Icha Isaac",
    Type: "Scan Upload",
    Submission: "Ledger",
    Year: "2022",
    School: "Puyai Primary School (PUY)",
  },
];

const SubmissionsTable = ({ activeYear }) => {
  const [page, setPage] = React.useState(1);
  const [filterValue, setFilterValue] = React.useState("");

  const { data, isLoading } = useSWR(
    `/api/v1/sbrt?year=${activeYear}&page=${page}&query=${filterValue}`,
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  const hasSearchFilter = Boolean(filterValue);
  const filteredItems = React.useMemo(() => {
    let filteredRows = rows;

    return filteredRows;
  }, [rows]);

  const pages = React.useMemo(() => {
    return rows.length ? Math.ceil(rows.length / 10) : 0;
  }, [rows.length]);

  const rowCount = React.useMemo(() => {
    return data?.count ? data?.count : 0;
  }, [data?.count]);

  return (
    <>
      <Card>
        <CardBody>
          <NextUITable
            columns={columns}
            renderCell={submissionsRender}
            isLoading={isLoading}
            page={page}
            pages={pages}
            rowCount={rowCount}
            setPage={setPage}
            filteredItems={filteredItems}
            hasSearchFilter={hasSearchFilter}
            filterValue={filterValue}
            setFilterValue={setFilterValue}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default SubmissionsTable;
