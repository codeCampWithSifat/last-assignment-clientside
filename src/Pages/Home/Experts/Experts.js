import React from "react";
import expert1 from "../../../asstes/images/experts/expert1.jpg";
import expert2 from "../../../asstes/images/experts/expert2.jpg";
import expert3 from "../../../asstes/images/experts/expert3.jpg";
import expert4 from "../../../asstes/images/experts/expert4.jpg";
import Expert from "./Expert";

const Experts = () => {
  const expertData = [
    {
      id: 1,
      name: "Julia Shorez",
      title: "Skin Therapist",
      image: expert1,
    },
    {
      id: 2,
      name: "Sharmin Akter",
      title: "Therapy Expert",
      image: expert2,
    },
    {
      id: 3,
      name: "Tasfia",
      title: "Hair Expert",
      image: expert3,
    },
    {
      id: 4,
      name: "Salina Gomez",
      title: "Message Expert",
      image: expert4,
    },
  ];
  return (
    <div className="mt-16">
      <h1 className="text-3xl text-indigo-800 font-bold text-center">
        MEET OUR EXPERTS
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {expertData.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
