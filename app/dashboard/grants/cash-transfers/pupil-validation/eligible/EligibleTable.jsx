"use client";
import NextUITable from "@/app/components/tables/NextUITable";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import useSWR from "swr";
import { columns, eligibleRender } from "./eligibleColumns";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const EligibleTable = () => {
  const [page, setPage] = React.useState(1);
  const [filterValue, setFilterValue] = React.useState("");
  const data = [];
  const isLoading = false;
  // const { data, isLoading } = useSWR(
  //   `/api/v1/cash-transfers/states?year=${activeYear}&page=${page}&query=${filterValue}`,
  //   fetcher,
  //   {
  //     keepPreviousData: true,
  //   }
  // );
  const onSubmit = async () => {};
  const hasSearchFilter = Boolean(filterValue);
  const filteredItems = React.useMemo(() => {
    let filteredRows = [...(data?.rows || [])];

    return filteredRows;
  }, [data?.rows]);

  const pages = React.useMemo(() => {
    return data?.count ? Math.ceil(data.count / 10) : 0;
  }, [data?.count]);

  const rowCount = React.useMemo(() => {
    return data?.count ? data?.count : 0;
  }, [data?.count]);

  return (
    <>
      <NextUITable
        columns={columns}
        renderCell={eligibleRender}
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
    </>
  );
};

export default EligibleTable;
