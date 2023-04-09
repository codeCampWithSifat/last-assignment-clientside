import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import WhyChoseUs from "../WhyChoseUs/WhyChoseUs";
import Experts from "../Experts/Experts";
import ChepestPricingPlan from "../ChepestPricingPlan/ChepestPricingPlan";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <ChepestPricingPlan/>
      <WhyChoseUs />
      <Experts />
    </div>
  );
};

export default Home;
