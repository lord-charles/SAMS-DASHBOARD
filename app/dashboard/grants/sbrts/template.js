"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Template = ({ children }) => {
  const pathname = usePathname();

  const getInitialTab = () => {
    if (pathname?.includes("documents")) return "documents";
    if (pathname?.includes("live-view")) return "liveview";
    if (pathname?.includes("charts")) return "charts";
    if (pathname?.includes("reports")) return "reports";
    if (pathname?.includes("country-profile")) return "countryprofile";
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
            href="/dashboard/grants/sbrts/home"
          />
          <Tab
            key="documents"
            title="Documents"
            as={Link}
            href="/dashboard/grants/sbrts/documents"
          />
          <Tab
            key="liveview"
            title="Live View"
            as={Link}
            href="/dashboard/grants/sbrts/live-view"
          />
          <Tab
            key="charts"
            title="Charts"
            as={Link}
            href="/dashboard/grants/sbrts/charts"
          />
          {/* <Tab
            key="reports"
            title="Reports"
            as={Link}
            href="/dashboard/grants/sbrts/reports"
          /> */}
          <Tab
            key="countryprofile"
            title="Country Profile"
            as={Link}
            href="/dashboard/grants/sbrts/country-profile/all-schools"
          />
        </Tabs>
      </div>
      {children}
    </>
  );
};

export default Template;
