import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import React from "react";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

const PupilActions = () => {
  return (
    <div className="relative flex justify-end items-center gap-2">
      <Dropdown>
        <DropdownTrigger>
          <Button color="primary" variant="solid">
            Action
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem
            key="eligible"
            as={NextLink}
            href={`/dashboard/grants/cash-transfers/pupil-validation/eligible`}
          >
            Eligible
          </DropdownItem>
          <DropdownItem
            key="full"
            as={NextLink}
            href={`/dashboard/grants/cash-transfers/pupil-validation/eligible`}
          >
            Full
          </DropdownItem>
          <DropdownItem
            key="invoice"
            as={NextLink}
            href={`/dashboard/grants/cash-transfers/pupil-validation/invoice`}
          >
            Invoice
          </DropdownItem>
          <DropdownItem
            key="payment"
            as={NextLink}
            href={`/dashboard/grants/cash-transfers/pupil-validation/invoice`}
          >
            Payment
          </DropdownItem>
          <DropdownItem key="download" className="text-primary" color="primary">
            Download tsv
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default PupilActions;
