import React from "react";

const Service = ({ service }) => {
  const { image, description, name } = service;
  return (
    <div className="card  glass mt-12 ">
      <figure>
        <img src={image} alt="car!" />
      </figure>
      <div className="card-body text-center">
        <h3 className="text-indigo-800 text-2xl font-bold">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
