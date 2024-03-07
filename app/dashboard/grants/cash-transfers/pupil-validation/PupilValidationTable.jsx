"use client";
import NextUITable from "@/app/components/tables/NextUITable";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import useSWR from "swr";
import { columns, pupilValidationRender } from "./pupilColumns";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const PupilValidationTable = ({ activeYear }) => {
  const [page, setPage] = React.useState(1);
  const [filterValue, setFilterValue] = React.useState("");

  const { data, isLoading } = useSWR(
    `/api/v1/cash-transfers/pupil-validation-lists?year=${activeYear}&page=${page}&query=${filterValue}`,
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
    <Card className="mb-5">
      <CardBody>
        <NextUITable
          columns={columns}
          renderCell={pupilValidationRender}
          isLoading={isLoading}
          page={page}
          pages={pages}
          setPage={setPage}
          rowCount={rowCount}
          filteredItems={filteredItems}
          hasSearchFilter={hasSearchFilter}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
      </CardBody>
    </Card>
  );
};

export default PupilValidationTable;
