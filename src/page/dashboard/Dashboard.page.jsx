import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div>
      <div className=" grid grid-cols-12">
        <div className=" col-span-3 ">
          <ul>
            <Link to={"/dashboard"}>
              <ul>DashBoard</ul>
            </Link>
            {/* <Link to={"/dashboard/inventory"}>
          <ul>Inventory</ul>
        </Link> */}
            <Link to={"/dashboard/blog"}>
              <ul>Blog</ul>
            </Link>
            <Link to={"/dashboard/user"}>
              <ul>User</ul>
            </Link>
          </ul>
        </div>
        <div className=" col-span-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
