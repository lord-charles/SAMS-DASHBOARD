"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardBody } from "@nextui-org/card";
import useYearSelect from "@/app/utils/useYearSelect";
const Template = ({ children }) => {
  const pathname = usePathname();
  const { activeYear, render } = useYearSelect();

  const getInitialTab = () => {
    if (pathname?.includes("all-schools")) return "all";
    if (pathname?.includes("primary-schools")) return "primary";
    if (pathname?.includes("secondary-schools")) return "secondary";
    if (pathname?.includes("expenditure")) return "expenditure";
    if (pathname?.includes("pre-schools")) return "pre";
    if (pathname?.includes("payment")) return "payment";
    if (pathname?.includes("t1-type")) return "t1_type";
    if (pathname?.includes("t2-type")) return "t2_type";
    if (pathname?.includes("t2-ssp")) return "t2_ssp";
    if (pathname?.includes("unique")) return "unique";
    if (pathname?.includes("t1-home")) return "t1";
    if (pathname?.includes("t2-home")) return "t2";

    return "all";
  };
  const [selected, setSelected] = React.useState(getInitialTab);

  return (
    <>
      <Card className="mx-5 my-5">
        <CardBody>
          <Tabs
            aria-label="Options"
            selectedKey={selected}
            onSelectionChange={setSelected}
            color="primary"
            className="mb-5"
          >
            <Tab
              key="all"
              title="All Schools"
              as={Link}
              href="/dashboard/grants/sbrts/country-profile/all-schools"
            />
            <Tab
              key="primary"
              title="Primary Schools"
              as={Link}
              href="/dashboard/grants/sbrts/country-profile/primary-schools"
            />
            <Tab
              key="secondary"
              title="Secondary Schools"
              as={Link}
              href="/dashboard/grants/sbrts/country-profile/secondary-schools"
            />
            <Tab
              key="expenditure"
              title="Expenditure"
              as={Link}
              href="/dashboard/grants/sbrts/country-profile/expenditure"
            />
            <Tab
              key="pre"
              title="Pre Schools"
              as={Link}
              href="/dashboard/grants/sbrts/country-profile/pre-schools"
            />
            <Tab
              key="payment"
              title="Payment Status (T1 SSP)"
              as={Link}
              href="/dashboard/grants/sbrts/country-profile/payment"
            />
            <Tab
              key="t1"
              title="(T1 #)"
              as={Link}
              href="/dashboard/grants/sbrts/country-profile/t1-home"
            />
            <Tab
              key="t2_ssp"
              title="(T2 SSP)"
              as={Link}
              href="/dashboard/grants/sbrts/country-profile/t2-ssp"
            />
            <Tab
              key="t2"
              title="(T2 #)"
              as={Link}
              href="/dashboard/grants/sbrts/country-profile/t2-home"
            />
            <Tab
              key="unique"
              title="Unique Schools"
              as={Link}
              href="/dashboard/grants/sbrts/country-profile/unique-schools"
            />
            <Tab
              key="t1_type"
              title="(T1 Type)"
              as={Link}
              href="/dashboard/grants/sbrts/country-profile/t1-type"
            />
            <Tab
              key="t2_type"
              title="(T2 Type)"
              as={Link}
              href="/dashboard/grants/sbrts/country-profile/t2-type"
            />
          </Tabs>

          {render}
          {children}
        </CardBody>
      </Card>
    </>
  );
};

export default Template;
