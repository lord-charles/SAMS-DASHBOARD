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
  const year = searchParams.get("year");
  const { data: row, isLoading } = useSWR(
    `/api/v1/cash-transfers/ct-tracker-school/${params?.slug}`,
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
    const ctSchool = Object.fromEntries(formData.entries())

    try {
      const response = await fetch(
        `/api/v1/cash-transfers/ct-tracker-school/${row?.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ctSchool),
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
          <h6 className=" font-bold my-5">Update {row?.school} Tracker</h6>
          <form onSubmit={onSubmit}>
            <div className="grid md:grid-cols-2 md:gap-6">
              <Input
                label="Validated at School"
                type="date"
                name="validatedAtSchool"
                placeholder="Date"
                defaultValue={row?.validatedAtSchool}
                variant="bordered"
              />
              <Input
                label="Validated Forms Received at SA"
                type="date"
                name="validationFormsReceivedSA"
                placeholder="Date"
                defaultValue={row?.validationFormsReceivedSA}
                variant="bordered"
              />
              <Input
                label="Date Corrected on SSSAMS"
                type="date"
                defaultValue={row?.dateCorrectedSSSAMS}
                name="dateCorrectedSSSAMS"
                placeholder="Date"
                variant="bordered"
              />
              <Input
                label="CTEF Received at SA"
                type="date"
                name="ctefReceivedSA"
                defaultValue={row?.ctefReceivedSA}
                placeholder="Date"
                variant="bordered"
              />
              <Input
                label="Date Approved"
                type="date"
                name="dateApproved"
                defaultValue={row?.dateApproved}
                placeholder="Date"
                variant="bordered"
              />
              <Select
                label="Payment Method"
                placeholder="Payment Method"
                name="paymentMethod"
                defaultSelectedKeys={row?.paymentMethod && [row?.paymentMethod]}
                variant="bordered"
              >
                <SelectItem key="School Account" value="School Account">
                  School Account
                </SelectItem>
                <SelectItem key="Mobile Money" value="Mobile Money">
                  Mobile Money
                </SelectItem>
                <SelectItem key="Bank" value="Bank">
                  Bank
                </SelectItem>
              </Select>
              <Input
                label="Date CT Funds Released to CT/Bank"
                type="date"
                name="dateCTFundsReleased"
                defaultValue={row?.dateCTFundsReleased}
                placeholder="Date"
                variant="bordered"
              />
              <Input
                label="Date Paid at School"
                type="date"
                name="datePaidAtSchool"
                defaultValue={row?.datePaidAtSchool}
                placeholder="Date"
                variant="bordered"
              />
              <Input
                label="Accountability CTEF Received"
                type="date"
                name="accountabilityCTEFReceived"
                defaultValue={row?.accountabilityCTEFReceived}
                placeholder="Date"
                variant="bordered"
              />
            </div>
            <div className="flex justify-end gap-6 items-center mb-3">
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
