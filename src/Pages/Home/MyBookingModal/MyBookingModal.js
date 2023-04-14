import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const MyBookingModal = ({ bookingModal, setBookingModal }) => {
  const { name: serviceName, price, plan } = bookingModal;
  const { user } = useContext(AuthContext);
  const handleBooking = (e) => {
    e.preventDefault();
    const booking = {
      name: user?.displayName,
      email: user?.email,
      serviceName,
      plan,
      price,
    };
    fetch(`https://last-assignment-serverside.vercel.app/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booked Your Seat Successfully");
          setBookingModal(null);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center text-indigo-800 ">
            {serviceName}
          </h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              defaultValue={user?.displayName}
              className="input input-bordered input-info w-full my-2"
              disabled
              name="name"
            />
            <input
              type="email"
              defaultValue={user?.email}
              className="input input-bordered input-info w-full my-2"
              disabled
              name="email"
            />
            <input
              type="text"
              placeholder="Plan"
              className="input input-bordered input-info w-full my-2"
              required
              value={plan}
              name="plan"
              disabled
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full my-2"
              value={serviceName}
              required
              name="servicename"
              disabled
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full my-2"
              value={price}
              disabled
              name="price"
            />
            <input
              type="submit"
              value="Order Now"
              className="btn btn-primary w-full my-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyBookingModal;
