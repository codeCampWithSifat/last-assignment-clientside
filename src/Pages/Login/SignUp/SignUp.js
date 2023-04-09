import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {register,handleSubmit,formState: { errors },}=useForm();
    const handleSignUp = (data) => {
        console.log(data);
    }
  return (
    <div className="h-[600px] flex justify-center items-center ">
    <div className="w-96 p-4">
      <h2 className="text-3xl text-center text-indigo-600 font-bold">Please Register</h2>

      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-md mt-2"> Your Name</span>
          </label>
          <input
            {...register("name", { required: "Name is Required" })}
            type="text"
            className="input input-bordered w-full "
          />
          {errors.name && (
            <p role="alert" className="text-red-600 my-2">
              {errors.name?.message}
            </p>
          )}
        </div>
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
              pattern: {
                value: /(?=.*?[0-9])/,
                message: "Password At Least 1 Letter",
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
          
        </div>
        <input
          type="submit"
          className="input input-bordered w-full bg-primary text-white my-4"
          value="Register"
        />
      </form>
      <p>
        Already Have An Account{" "}
        <Link to="/login" className="text-red-500">
          Please Login
        </Link>
      </p>
      <div className="divider">OR</div>
      <button  className="btn btn-outline w-full">
        Continue With Google
      </button>
    </div>
  </div>
  )
}

export default SignUp
