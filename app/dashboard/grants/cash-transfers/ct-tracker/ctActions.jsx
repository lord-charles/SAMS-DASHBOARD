import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import React from "react";
import { useRouter } from "next/navigation";

const CTActions = ({ row }) => {
  const router = useRouter();
  return (
    <>
      <div className="relative flex justify-end items-center gap-2">
        <Dropdown>
          <DropdownTrigger>
            <Button color="primary" variant="solid">
              Action
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem
              key="e18"
              onPress={() => {
                router.push(
                  `/dashboard/grants/cash-transfers/ct-tracker/${row?.id}`
                );
              }}
            >
              Update CT Tracker
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
};

export default CTActions;
