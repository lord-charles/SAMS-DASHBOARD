
import React from "react";
import GrantsTable from "./GrantsTable";

const Grants = () => {
  return (
    <div className="">
      <p className="text-xs bg-primary rounded p-2 text-white my-5 font-bold tracking-widest uppercase">Transfer From Other Government Units</p>
      <GrantsTable/>
      <p className="text-xs bg-primary rounded p-2 text-white my-5 font-bold tracking-widest uppercase">Donations</p>
      <GrantsTable/>
      <p className="text-xs bg-primary rounded p-2 text-white my-5 font-bold tracking-widest uppercase">Income from Admin Fees</p>
      <GrantsTable/>
    </div>
  );
};

export default Grants;
