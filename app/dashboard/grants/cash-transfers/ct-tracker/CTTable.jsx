"use client";
import NextUITable from "@/app/components/tables/NextUITable";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { columns, ctRender } from "./ctColumns";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CTTable = ({ activeYear }) => {
  const [page, setPage] = React.useState(1);
  const [filterValue, setFilterValue] = React.useState("");

  const { data, isLoading } = useSWR(
    `/api/v1/cash-transfers/ct-tracker?year=${activeYear}&page=${page}&query=${filterValue}`,
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  const hasSearchFilter = Boolean(filterValue);
  const filteredItems = React.useMemo(() => {
    let filteredRows = [...(data?.items || [])];

    return filteredRows;
  }, [data?.items]);

  const pages = React.useMemo(() => {
    return data?.count ? Math.ceil(data.count / 10) : 0;
  }, [data?.count]);

  const rowCount = React.useMemo(() => {
    return data?.count ? data?.count : 0;
  }, [data?.count]);
  return (
    <Card className="mb-5">
      <CardBody>
        <NextUITable
          columns={columns}
          renderCell={ctRender}
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
  );
};

export default CTTable;
