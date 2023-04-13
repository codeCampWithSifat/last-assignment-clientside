import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Shared/Loading/Loading";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user , loading} = useContext(AuthContext);
  const [admin, isAdminLoading] = useAdmin(user?.email)
  const location = useLocation();
  if (user && admin) {
    return children;
  }
  if(loading || isAdminLoading) {
    return <Loading />
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;

