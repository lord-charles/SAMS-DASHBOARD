"use client";
import NextUITable from "@/app/components/tables/NextUITable";
import React from "react";
import useSWR from "swr";
import { columns, grantsRender } from "./grantColumns";
import { Card, CardBody } from "@nextui-org/card";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const GrantsTable = ({ activeYear }) => {
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
    <Card>
      <CardBody>

      
          <NextUITable
            columns={columns}
            renderCell={grantsRender}
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

export default GrantsTable;
