import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser, googleLoginSystem } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loginToken, setLoginToken] = useState("")
  const [token] = useToken(loginToken)

  if(token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    loginUser(data.email, data.password)
      .then((result) => { 
        setLoginToken(data.email)
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLoginSystem()
      .then((result) => {
        const user = result.user;
        const googleUser = {
          name: user?.displayName,
          email: user?.email,
        };
        fetch(`http://localhost:5000/users/${user?.email}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(googleUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              setLoginToken(user?.email);
            }
          });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };
  return (
    <div className="h-[600px] flex justify-center items-center ">
      <div className="w-96 p-4">
        <h2 className="text-3xl text-center text-indigo-600 font-bold">
          Please Login{" "}
        </h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-md"> Email</span>
            </label>
            <input
              {...register("email", { required: "Email is Required" })}
              type="email"
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p role="alert" className="text-red-600 my-2">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-md">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 6,
                  message: "Password Must Be 6 Or More Characters",
                },
              })}
              type="password"
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p role="alert" className="text-red-600 my-2">
                {errors.password?.message}
              </p>
            )}
            {loginError && (
              <p role="alert" className="text-red-600 my-2">
                {loginError}
              </p>
            )}
          </div>
          <input
            type="submit"
            value="Login"
            className="input input-bordered w-full bg-primary text-white my-4"
          />
        </form>
        <p>
          New To Doctor Portal{" "}
          <Link to="/signup" className="text-red-500">
            Create An Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
