import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { state } = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    const checkData = localStorage.getItem("User Auth");
    if (!checkData) {
      nav("/admin");
    }
  }, []);
  return (
    <div>
      <div className=" grid grid-cols-12 items-center justify-center">
        <div className=" col-span-3 ">
          <ul>
            <Link to={"/dashboard"}>
              {state?.loginData?.email}

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
