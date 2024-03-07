import React from "react";
import UsersTable from "./UsersTable";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  return (
    <>
      <UsersTable />
      <ToastContainer />
    </>
  );
};

export default Page;
