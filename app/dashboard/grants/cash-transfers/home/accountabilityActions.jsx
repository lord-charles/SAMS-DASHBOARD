import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import React from "react";

const AccountabilityActions = () => {
  return (
    <div className="relative flex justify-end items-center gap-2">
      <Dropdown>
        <DropdownTrigger>
          <Button color="primary" variant="solid">
            Action
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="view">View </DropdownItem>
          <DropdownItem key="download" className="text-primary" color="primary">
            Download tsv
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default AccountabilityActions;
