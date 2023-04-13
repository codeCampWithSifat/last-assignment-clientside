import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user , loading} = useContext(AuthContext);
  const location = useLocation();
  if (user) {
    return children;
  }
  if(loading) {
    return <Loading />
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
