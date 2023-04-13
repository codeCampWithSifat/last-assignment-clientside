import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser().then(() => {
      navigate("/");
    });
  };
  return (
    <div className="text-primary text-center mt-60">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <button
        onClick={handleLogout}
        className="btn btn-error btn-sm  my-5 btn-outline"
      >
        Logout
      </button>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default DisplayError;
