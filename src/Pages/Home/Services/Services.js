import React from "react";
import spa2 from "../../../asstes/images/spa2.jpg"
import spa3 from "../../../asstes/images/spa3.jpg"
import spa1 from "../../../asstes/images/spa1.jpg"
import Service from "./Service";
const Services = () => {
  const serviceData = [
    {
      id: 1,
      image: spa2,
      name : "Herbal Spa",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      id: 2,
      image: spa3,
      name : "Stone Message",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      id: 3,
      image: spa1,
      name : "Body Message",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
  ];
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-indigo-700">OUR SERVICES</h2>
        <p className="my-4">
          Our product is fully personalized and well balanced for all age of
          customers or adults. <br /> We maintain the standards by lorem ipsum
          and certified by dolor set amet.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {serviceData.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
