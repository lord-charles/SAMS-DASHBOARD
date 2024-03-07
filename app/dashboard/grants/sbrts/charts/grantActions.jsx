import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import React from "react";

const GrantActions = () => {
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
            CSV
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default GrantActions;
