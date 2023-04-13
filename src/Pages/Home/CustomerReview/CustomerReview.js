import React from "react";

const CustomerReview = ({ review }) => {
  const { image, description, name, position } = review;
  return (
    <div className="mt-16 shadow-xl p-8">
      <div className="flex ">
        <div>
          <img src={image} className="w-20 rounded-full" alt="" />
        </div>
        <div className="ml-6 ">
          <h2 className="text-indigo-800 font-bold text-xl">{name}</h2>
          <h3 className="text-indigo-700 text-justify">{position}</h3>
        </div>
      </div>
       <p>{description}</p>
    </div>
  );
};

export default CustomerReview;
