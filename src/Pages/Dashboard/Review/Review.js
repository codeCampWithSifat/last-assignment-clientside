import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();
  const handleReview = (data) => {
    const formData = new FormData();
    const image = data.image[0];
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const review = {
            image: imageData.data.url,
            name: data.name,
            position: data.position,
            description: data.description,
          };
          console.log(review);
          fetch(`http://localhost:5000/reviews`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((reviewData) => {
              console.log(reviewData);
              if(reviewData.insertedId) {
                navigate("/")
              }
            });
        }
      });
  };
  return (
    <div className="h-[600px] flex ">
      <div className="w-96 p-4">
        <h2 className="text-3xl text-center text-indigo-600 font-bold">
          Please Give Your Review
        </h2>

        <form onSubmit={handleSubmit(handleReview)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-md">Image</span>
            </label>
            <input
              {...register("image", { required: "Image is Required" })}
              type="file"
              className="input input-bordered w-full "
            />
            {errors.image && (
              <p role="alert" className="text-red-600 my-2">
                {errors.image?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-md"> Name</span>
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
              <span className="label-text text-md">Your Position</span>
            </label>
            <input
              {...register("position", {
                required: "Your Position is Required",
              })}
              type="text"
              className="input input-bordered w-full "
            />
            {errors.position && (
              <p role="alert" className="text-red-600 my-2">
                {errors.position?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-md">Description</span>
            </label>
            <input
              {...register("description", {
                required: "Description is Required",
              })}
              type="text"
              className="input input-bordered w-full "
            />
            {errors.description && (
              <p role="alert" className="text-red-600 my-2">
                {errors.description?.message}
              </p>
            )}
          </div>

          <input
            type="submit"
            className="input input-bordered w-full bg-primary text-white my-4"
            value="Give Your Review"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;
