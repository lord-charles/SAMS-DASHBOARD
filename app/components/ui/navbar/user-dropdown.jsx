"use client";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarItem,
} from "@nextui-org/react";
import React from "react";
import { DarkModeSwitch } from "./darkmodeswitch";
import { signIn, signOut, useSession } from "next-auth/react";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { Button } from "@nextui-org/button";

export const UserDropdown = () => {
  const { data: session, status } = useSession();
  // console.log("session", session);
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Button isIconOnly size="lg" color="primary"> <AccountsIcon/></Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="User menu actions"
        onAction={(actionKey) => console.log({ actionKey })}
      >
        <DropdownItem key="profile" textValue="My Profile">
          My profile
        </DropdownItem>
        <DropdownItem key="settings" textValue="Settings">
          Settings
        </DropdownItem>
        {session !== null ? (
          <DropdownItem
            key="logout"
            color="danger"
            className="text-danger"
            onPress={() => signOut()}
            textValue="Log Out"
          >
            Log Out
          </DropdownItem>
        ) : (
          <DropdownItem
            key="login"
            color="primary"
            className="text-primary"
            onPress={() => signIn()}
            textValue="Log In"
          >
            Log In
          </DropdownItem>
        )}

        <DropdownItem key="switch" textValue="switch">
          <DarkModeSwitch />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
