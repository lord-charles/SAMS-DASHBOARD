"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Template = ({ children }) => {
  const pathname = usePathname();

  const getInitialTab = () => {
    if (pathname?.includes("home")) return "home";
    if (pathname?.includes("pupil-validation")) return "pvd";
    if (pathname?.includes("ct-tracker")) return "ct";
    if (pathname?.includes("ct-school")) return "ctbs";
    return "home";
  };
  const [selected, setSelected] = React.useState(getInitialTab);

  return (
    <>
      <div className="mx-5 my-5">
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
          color="primary"
        >
          <Tab
            key="home"
            title="Home"
            as={Link}
            href="/dashboard/grants/cash-transfers/home"
          />
          <Tab
            key="pvd"
            title="Pupil Validation Data"
            as={Link}
            href="/dashboard/grants/cash-transfers/pupil-validation"
          />
          <Tab
            key="ct"
            title="CT Tracker"
            as={Link}
            href="/dashboard/grants/cash-transfers/ct-tracker"
          />
          <Tab
            key="ctbs"
            title="CT Tracker by School"
            as={Link}
            href="/dashboard/grants/cash-transfers/ct-school"
          />
        </Tabs>
      </div>
      <div className="mx-5">{children}</div>
    </>
  );
};

export default Template;
