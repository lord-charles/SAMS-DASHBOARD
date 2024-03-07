"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import UsersIcon from "@/app/components/ui/icons/sidebar/users-icon";
import SchoolIcon from "@/app/components/ui/icons/sidebar/school-icon";
import { Select, SelectItem } from "@nextui-org/react";
import { generateYearOptions } from "@/app/lib/constants";

const RootLayout = ({ children }) => {
  const router = useRouter();
  const years = generateYearOptions();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const year = searchParams.get("year") || years[0]?.value;
  const [activeYear, setActiveYear] = useState(year);
  const [activeState, setActiveState] = useState("");
  const [activeCounty, setActiveCounty] = useState("");
  const [activePayam, setActivePayam] = useState("");
  const [activeSchool, setActiveSchool] = useState("");
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <>
      <Card className="mb-5 mx-5">
        <CardBody>
          <div className="gap-5 grid grid-cols-2 sm:grid-cols-4">
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
                      Schools Approved for 2022
                    </p>
                    <p className="text-primary">4,435</p>
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
                      Approved Expenditure
                    </p>
                    <p className="text-primary">1,952,016,668</p>
                  </div>
                  <div className="w-10 h-10 flex justify-center items-center rounded-full overflow-hidden bg-gray-200">
                    <span className="text-sm ">
                      <UsersIcon />
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="flex justify-end items-center my-6 mx-5 gap-2">
            {activeState && (
              <Select
                color="primary"
                label="Select county"
                placeholder="Select a county"
                className="max-w-xs"
                onChange={(e) => {
                  setActiveCounty(e.target.value);
                  router.push(
                    pathname +
                      "?" +
                      createQueryString("county", e.target.value),
                    { scroll: false }
                  );
                }}
              >
                <SelectItem key="awe" value="awe">
                  County
                </SelectItem>
              </Select>
            )}

            {activeCounty && activeState && (
              <Select
                color="primary"
                label="Select payam"
                placeholder="Select payam"
                className="max-w-xs"
                onChange={(e) => {
                  setActivePayam(e.target.value);
                  router.push(
                    pathname + "?" + createQueryString("payam", e.target.value),
                    { scroll: false }
                  );
                }}
              >
                <SelectItem key="awe" value="awe">
                  Payam
                </SelectItem>
              </Select>
            )}
            {activePayam && activeCounty && activeState && (
              <Select
                color="primary"
                label="Select school"
                placeholder="Select school"
                className="max-w-xs"
                onChange={(e) => {
                  setActiveSchool(e.target.value);
                  router.push(
                    pathname +
                      "?" +
                      createQueryString("school", e.target.value),
                    { scroll: false }
                  );
                }}
              >
                <SelectItem key="awe" value="awe">
                  School
                </SelectItem>
              </Select>
            )}
            <Select
              color="primary"
              label="Select year"
              placeholder="Select a year"
              defaultSelectedKeys={[activeYear]}
              disallowEmptySelection
              className="max-w-xs"
              onChange={(e) => {
                setActiveYear(e.target.value);
                router.push(
                  pathname + "?" + createQueryString("year", e.target.value),
                  { scroll: false }
                );
              }}
            >
              {years.map((year) => (
                <SelectItem key={year.value} value={year.value}>
                  {year.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </CardBody>
      </Card>
      {children}
    </>
  );
};

export default RootLayout;
