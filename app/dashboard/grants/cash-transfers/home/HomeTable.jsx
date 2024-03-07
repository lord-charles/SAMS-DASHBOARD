"use client";
import NextUITable from "@/app/components/tables/NextUITable";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { accountabilityRender, columns } from "./accountabilityColumns";
import SchoolIcon from "@/app/components/ui/icons/sidebar/school-icon";
import UsersIcon from "@/app/components/ui/icons/sidebar/users-icon";
import useSWR from "swr";
import ShapePie from "@/app/components/ui/charts/shape-pie";
import { Chip } from "@nextui-org/chip";
import { Spinner } from "@nextui-org/spinner";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const HomeTable = ({ activeYear }) => {
  const [page, setPage] = React.useState(1);
  const [filterValue, setFilterValue] = React.useState("");

  const { data, isLoading } = useSWR(
    `/api/v1/cash-transfers/states?year=${activeYear}&page=${page}&query=${filterValue}`,
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

  const validatedSum = React.useMemo(() => {
    return data?.rows?.reduce(
      (acc, row) => acc + Number(row.validated || 0),
      0
    );
  }, [data?.rows]);
  const approvedSum = React.useMemo(() => {
    return data?.rows?.reduce((acc, row) => acc + Number(row.approved || 0), 0);
  }, [data?.rows]);
  const eligibleSum = React.useMemo(() => {
    return data?.rows?.reduce((acc, row) => acc + Number(row.eligible || 0), 0);
  }, [data?.rows]);

  const pages = React.useMemo(() => {
    return data?.count ? Math.ceil(data.count / 10) : 0;
  }, [data?.count]);

  const rowCount = React.useMemo(() => {
    return data?.count ? data?.count : 0;
  }, [data?.count]);

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

  const pieData = (data?.rows ?? []).map((item, index) => {
    return {
      name: item?.stateName,
      value: Number(item?.uReceivedCuml),
      fill: getRandomColor(),
    };
  });

  return (
    <>
      <Card className="mb-5">
        <CardBody>
          <div className="gap-5 grid sm:grid-cols-4 mb-5">
            <Card shadow="sm" isPressable>
              <CardBody
                className={`overflow-visible p-5 bg-primary-900
                }`}
              >
                <div className="flex justify-evenly">
                  <div>
                    <p
                      className={`!uppercase text-xs text-white
                      }`}
                    >
                      No. of eligible girls
                    </p>
                    <p className="text-primary">
                      {eligibleSum?.toLocaleString("en-us")}
                    </p>
                  </div>
                  <div className="w-10 h-10 flex justify-center items-center rounded-full overflow-hidden bg-gray-200">
                    <span className="text-sm ">
                      <UsersIcon />
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card shadow="sm" isPressable>
              <CardBody
                className={`overflow-visible p-5 bg-primary-900
                }`}
              >
                <div className="flex justify-evenly">
                  <div>
                    <p
                      className={`!uppercase text-xs text-white
                      }`}
                    >
                      No. of validated Girls
                    </p>
                    <p className="text-primary">
                      {validatedSum?.toLocaleString("en-us")}
                    </p>
                  </div>
                  <div className="w-10 h-10 flex justify-center items-center rounded-full overflow-hidden bg-gray-200">
                    <span className="text-sm ">
                      <UsersIcon />
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card shadow="sm" isPressable>
              <CardBody
                className={`overflow-visible p-5 bg-primary-900
                }`}
              >
                <div className="flex justify-evenly">
                  <div>
                    <p
                      className={`!uppercase text-xs text-white
                      }`}
                    >
                      Approved by ETMC
                    </p>
                    <p className="text-primary">
                      {approvedSum?.toLocaleString("en-us")}
                    </p>
                  </div>
                  <div className="w-10 h-10 flex justify-center items-center rounded-full overflow-hidden bg-gray-200">
                    <span className="text-sm ">
                      <SchoolIcon />
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card shadow="sm" isPressable>
              <CardBody
                className={`overflow-visible p-5 bg-primary-900
                }`}
              >
                <div className="flex justify-evenly">
                  <div>
                    <p
                      className={`!uppercase text-xs text-white
                      }`}
                    >
                      Total Cash Transferred
                    </p>
                    <p className="text-primary">0</p>
                  </div>
                  <div className="w-10 h-10 flex justify-center items-center rounded-full overflow-hidden bg-gray-200">
                    <span className="text-sm ">
                      <SchoolIcon />
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
      <Card className="mb-5">
        <CardBody>
          <NextUITable
            columns={columns}
            renderCell={accountabilityRender}
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
      <Card>
        {isLoading ? (
          <Spinner className="my-8 p-8" />
        ) : (
          <CardBody>
            <h4>Cash transfer by State</h4>
            <hr className="my-3" />
            <div className="flex justify-between items-center mb-5">
              <div className="w-full">
                <div className="grid md:grid-cols-2 gap-4">
                  {data?.rows?.map((item, key) => (
                    <Card key={key}>
                      <CardBody>
                        <div className="flex justify-between items-center">
                          <div className="w-full">
                            <Chip
                              className="capitalize border-none m-0 p-0 text-xs"
                              color={getRandomColorClass()}
                              size="xs"
                              variant="dot"
                            >
                              {item?.stateName}
                            </Chip>
                          </div>
                          <div className="w-full border-l border-gray-400 pl-4">
                            <p className="text-xs">
                              Payments{" "}
                              {Number(item?.signedPayment)?.toLocaleString(
                                "en-us"
                              )}
                            </p>
                            <p className="text-xs">
                              Cumulative{" "}
                              {Number(item?.uReceivedCuml)?.toLocaleString(
                                "en-us"
                              )}
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {pieData?.length > 0 && (
              <div className="!w-full h-96">
                {/* <MultiPie /> */}
                <ShapePie data={pieData} />
              </div>
            )}
          </CardBody>
        )}
      </Card>
    </>
  );
};

export default HomeTable;
