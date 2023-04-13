import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import useAdmin from "../../../hooks/useAdmin";
import { AuthContext } from "../../../Context/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [admin] = useAdmin(user?.email);
  return (
    <>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* { <!-- Page content here -->} */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* { <!-- Sidebar content here }--> */}
            <li>
              <Link to="/dashboard">My Order List</Link>
            </li>
            <li>
              <Link to="/dashboard/review">Review</Link>
            </li>
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All Users</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
