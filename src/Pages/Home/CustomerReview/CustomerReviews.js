import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";
import CustomerReview from "./CustomerReview";

const CustomerReviews = () => {
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch(`https://last-assignment-serverside.vercel.app/reviews`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mt-16">
      <h2 className="text-indigo-800 text-3xl font-bold text-center">
        See Our Customer Review{" "}
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {reviews.map((review) => (
          <CustomerReview key={review._id} review={review}></CustomerReview>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
