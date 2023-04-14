import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(
        `https://last-assignment-serverside.vercel.app/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h3 className="text-xl text-indigo-800 font-bold my-4">
        Hey ! {user?.displayName} Your Total Orders : {bookings.length}
      </h3>
      <div className="mt-8">
        <table className="table w-full ">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Plan</th>
              <th>Pay</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* row 1 */}
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.serviceName}</td>
                <td>{booking.price}</td>
                <td>{booking.plan}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-sm btn-primary">Pay</button>
                    </Link>
                  )}
                </td>
                <td>
                  {booking.price && booking.paid && (
                    <span className="text-indigo-800 font-bold ">
                      Paid
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
