import React from "react";
import useSWR from "swr";
import { columns, studentRender } from "./studentColumns";
import NextUIClientTable from "@/app/components/tables/NextUIClientTable";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const LearnersTable = ({ school }) => {
  const [page, setPage] = React.useState(1);
  const [filterValue, setFilterValue] = React.useState("");
  const fetchData = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  };
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_MOBILE_API_URL}/data-set/get/2023_data/county/payam/schools/students?payam=${school}`,
    () =>
      fetchData(
        `${process.env.NEXT_PUBLIC_MOBILE_API_URL}/data-set/get/2023_data/county/payam/schools/students?payam=${school}`,
        { schoolName: school }
      ),
    {
      shouldRetryOnError: false,
    }
  );

  const hasSearchFilter = Boolean(filterValue);
  const filteredItems = React.useMemo(() => {
    let filteredRows = [...(data || [])];

    return filteredRows;
  }, [data]);

  const pages = React.useMemo(() => {
    return data?.length ? Math.ceil(data.length / 10) : 0;
  }, [data?.length]);

  const rowCount = React.useMemo(() => {
    return data?.length ? data?.length : 0;
  }, [data?.length]);

  return (
    <NextUIClientTable
      columns={columns}
      renderCell={studentRender}
      isLoading={isLoading}
      // page={page}
      // pages={pages}
      // setPage={setPage}
      rowCount={rowCount}
      // pageCount={data?.count}
      // filteredItems={filteredItems}
      filteredItems={filteredItems}
      hasSearchFilter={hasSearchFilter}
      filterValue={filterValue}
      setFilterValue={setFilterValue}
    />
  );
};

export default LearnersTable;
