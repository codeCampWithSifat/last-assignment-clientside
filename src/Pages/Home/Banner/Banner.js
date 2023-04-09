import React from "react";
import spa1 from "../../../asstes/images/spa1.jpg";
const Banner = () => {
  return (
    // <div>
    //   <div className="hero bg-base-100">
    //     <div className="hero-content flex-col lg:flex-row-reverse">
    //       <img src={spa1} alt="" className=" lg:w-1/2 rounded-lg  md:w-full sm:w-4/5" />
    //       <div className="">
    //         <h3>Consetetur Adipiscing</h3>
    //         <h2 className="text-3xl font-bold">SOFT & PURE SPA SALON</h2>
    //         <p className="my-5">
    //           orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
    //           tincidunt ullamcorper magna, in tincidunt ex auctor et.
    //         </p>
    //         <button className="btn btn-primary">Contact Us</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="hero h-3/4 mt-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={spa1}
          alt=""
          className=" lg:w-2/4 rounded-lg shadow-2xl md:w-full sm:w-full "
        />
        <div>
          <h3 className="my-2">Consetetur Adipiscing</h3>
          <h2 className="text-3xl font-bold text-indigo-800">SOFT & PURE SPA SALON</h2>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy
          </p>
          <button className="btn btn-primary text-white">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
