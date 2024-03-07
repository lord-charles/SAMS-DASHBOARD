"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import React from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody } from "@nextui-org/card";
import useSWR from "swr";
import CardSkeleton from "@/app/CardSkeleton";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Page = ({ params }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const year = searchParams.get("year") || 2023;
  const { data: student, isLoading } = useSWR(
    `/api/v1/cash-transfers/ct-tracker/${params?.slug}`,
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <CardSkeleton />;
  }
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const ctTracker = Object.fromEntries(formData.entries())

    try {
      const response = await fetch(
        `/api/v1/cash-transfers/ct-tracker/${student?.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ctTracker),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        toast.success(responseData?.message);
        setTimeout(() => {
          router.refresh();
          router.back();
        }, 1000);
      } else {
        toast.error(response.statusText);
      }
    } catch (error) {
      console.log(error);
      toast.error("Unknown Error, please contact System Administrator.");
    }
  };
  return (
    <>
      <Card className="mx-5">
        <CardBody>
          <h6 className=" font-bold my-5">
            Update{" "}
            {`${student?.firstName} ${student?.middleName} ${student?.lastName}`}{" "}
            Tracker
          </h6>
          <form onSubmit={onSubmit}>
            <div className="grid md:grid-cols-2 md:gap-6">
              <Input
                autoFocus
                label="CTEF Serial Number"
                type="number"
                name="ctefSerialNumber"
                defaultValue={student?.ctefSerialNumber}
                placeholder="111111"
                variant="bordered"
              />
              <Input
                autoFocus
                label="Date Approved"
                type="date"
                name="dateApproved"
                defaultValue={student?.dateApproved}
                placeholder="Date"
                variant="bordered"
              />

              <Select
                label="Signature on Payment List"
                placeholder="Yes"
                name="signatureOnPaymentList"
                defaultSelectedKeys={
                  student?.signatureOnPaymentList && [
                    student?.signatureOnPaymentList,
                  ]
                }
                variant="bordered"
              >
                <SelectItem key={1} value={1}>
                  Yes
                </SelectItem>
                <SelectItem key={0} value={0}>
                  No
                </SelectItem>
              </Select>
              <Input
                autoFocus
                label="Date Paid at School"
                type="date"
                name="datePaidSchool"
                defaultValue={student?.datePaidSchool}
                placeholder="Date"
                variant="bordered"
              />
              <Input
                autoFocus
                label="Accountability CTEF Serial Number"
                type="number"
                name="accountabilityCtefSerialNumber"
                defaultValue={student?.accountabilityCtefSerialNumber}
                placeholder="111111"
                variant="bordered"
              />
              <Select
                label="Accountability CTEF Signed"
                placeholder="Yes"
                name="accountabilityCTEFSigned"
                defaultSelectedKeys={
                  student?.accountabilityCTEFSigned && [
                    `${String(student?.accountabilityCTEFSigned)}`,
                  ]
                }
                variant="bordered"
              >
                <SelectItem key={1} value={1}>
                  Yes
                </SelectItem>
                <SelectItem key={0} value={0}>
                  No
                </SelectItem>
              </Select>
            </div>
            <div className="flex justify-end gap-6 items-center mt-3">
              <Button color="primary" type="submit">
                Update
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
      <ToastContainer />
    </>
  );
};

export default Page;
