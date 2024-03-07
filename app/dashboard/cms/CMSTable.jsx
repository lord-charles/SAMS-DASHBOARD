"use client";
import NextUITable from "@/app/components/tables/NextUITable";
import React from "react";
import useSWR from "swr";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { cmsRender, columns } from "./cmsColumns";
import { Button } from "@nextui-org/button";
import NextLink from "next/link"
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CMSTable = () => {
  const [page, setPage] = React.useState(1);
  const [filterValue, setFilterValue] = React.useState("");
  const { data, isLoading } = useSWR(
    `/api/v1/cms?page=${page}&query=${filterValue}`,
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
    <Card className="mx-5">
      <CardHeader className="flex justify-between items-center">
        <span>CMS Management</span>
        <Button color="primary" as={NextLink} href="/dashboard/cms/add">
          Add Post
        </Button>
      </CardHeader>
      <CardBody>
      
          <NextUITable
            columns={columns}
            renderCell={cmsRender}
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

export default CMSTable;
