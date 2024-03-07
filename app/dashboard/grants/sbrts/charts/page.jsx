"use client";
import { Card, CardBody } from "@nextui-org/card";
import { Tab, Tabs } from "@nextui-org/tabs";
import React, { useState } from "react";
import ActualExpenditure from "./ActualExpenditure";
import { useSearchParams } from "next/navigation";
import BudgetExpenditure from "./BudgetExpenditure";
import ToolSubmission from "./ToolSubmission";
import DocumentUploads from "./DocumentUploads";
import Atttendance from "./Atttendance";
const Page = () => {
  const searchParams = useSearchParams();
  const activeYear = searchParams.get("year") || 2023;
  const [selected, setSelected] = useState("pe");
  return (
    <Card className="mx-5">
      <CardBody>
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
          color="primary"
        >
          <Tab key="pe" title="Budget Expenditure">
            <BudgetExpenditure activeYear={activeYear} />
          </Tab>
          <Tab key="ae" title="Ledger Expenditure">
            <ActualExpenditure activeYear={activeYear} />
          </Tab>
          {/* <Tab key="gr" title="Grants">
            <Grants />
          </Tab> */}
          <Tab key="ts" title="Tool Submissions">
            <Card>
              <CardBody>
                <ToolSubmission />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="du" title="Document Uploads">
            <Card>
              <CardBody>
                <DocumentUploads />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="at" title="Attendance">
            <Card>
              <CardBody>
                <Atttendance />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
};
export default Page;
