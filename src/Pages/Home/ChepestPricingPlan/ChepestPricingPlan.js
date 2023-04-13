import React, { useState } from "react";
import ServicePlan from "./ServicePlan";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import MyBookingModal from "../MyBookingModal/MyBookingModal";

const ChepestPricingPlan = () => {
  const [bookingModal, setBookingModal] = useState(null);
  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/services`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mt-20">
      <h1 className="text-indigo-800 text-center font-bold text-3xl">
        CHEAPEST PRICING PLAN
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {services.map((service, index) => (
          <ServicePlan
            key={index}
            setBookingModal={setBookingModal}
            service={service}
          ></ServicePlan>
        ))}
      </div>
      {bookingModal && (
        <MyBookingModal
          bookingModal={bookingModal}
          setBookingModal={setBookingModal}
        ></MyBookingModal>
      )}
    </div>
  );
};

export default ChepestPricingPlan;
