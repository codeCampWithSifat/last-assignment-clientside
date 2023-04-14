import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], isLoading,refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`https://last-assignment-serverside.vercel.app/users`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }

  const handleMakeAdmin = (id) => {
    fetch(`https://last-assignment-serverside.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0) {
            refetch()
            toast.success("Make Admin Successfully")
        }
        
      });
  };
  return (
    <div>
      <h3 className="text-indigo-800 font-bold text-xl text-center">
        Total Number Of Users : {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Sl.Number</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                 <td>
                  {user?.role !== "admin" && <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-sm btn-primary"
                  >
                    Make Admin
                  </button>}
                </td>
                <td>
                  <button className="btn btn-sm btn-error text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
