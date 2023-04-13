import React from "react";

const ServicePlan = ({ service, setBookingModal }) => {
  const { image, plan, name, price, description } = service;
  return (
    <div className="card  bg-base-100 shadow-xl mt-12">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-indigo-800 font-bold text-3xl">
          {plan}
        </h2>
        <h2 className="card-title">{name}</h2>
        <h4 className="card-title">Price : ${price}</h4>
        <p>{description}</p>
        
          <label
            onClick={() => setBookingModal(service)}
            htmlFor="booking-modal"
            className="btn btn-primary"
          >
            Book Now
          </label>
       
      </div>
    </div>
  );
};

export default ServicePlan;
