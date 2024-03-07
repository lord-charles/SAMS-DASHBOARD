import NextUITable from "@/app/components/tables/NextUITable";
import React from "react";
import useSWR from "swr";
import { columns, schoolsRender } from "./schoolColumns";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SchoolTable = () => {
  const [page, setPage] = React.useState(1);
  const [filterValue, setFilterValue] = React.useState("");

  const { data, isLoading } = useSWR(
    `/api/v1/schools?page=${page}&query=${filterValue}`,
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
    return data?.count ? Math.ceil(data?.count / 10) : 0;
  }, [data?.count]);

  const rowCount = React.useMemo(() => {
    return data?.count ? data?.count : 0;
  }, [data?.count]);

  return (

        <NextUITable
          columns={columns}
          renderCell={schoolsRender}
          isLoading={isLoading}
          page={page}
          pages={pages}
          setPage={setPage}
          rowCount={rowCount}
          pageCount={data?.count}
          filteredItems={filteredItems}
          hasSearchFilter={hasSearchFilter}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
  );
};

export default SchoolTable;
