import React from "react";

const Expert = ({expert}) => {
    const {name, title,image} = expert
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-4 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-indigo-800 font-bold">{name}</h2>
        <p className="text-indigo-800">{title}</p>
        
      </div>
    </div>
  );
};

export default Expert;
