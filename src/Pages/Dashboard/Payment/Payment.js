import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_key);

const Payment = () => {
  const booking = useLoaderData();
  //   console.log(booking);
  const { name, plan, price, serviceName } = booking;
  return (
    <div>
      <h2 className="text-indigo-800 text-2xl font-bold ">
        Hey ! {name} Your Plan {plan}
      </h2>
      <h2 className="text-indigo-800 text-xl font-bold">
        You Will Pay{" "}
        <strong className="text-indigo-800 text-3xl font-bold">
          {" "}
          {price}$
        </strong>
      </h2>
      <h3 className="text-indigo-800 font-bold text-xl">For {serviceName}</h3>

      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
