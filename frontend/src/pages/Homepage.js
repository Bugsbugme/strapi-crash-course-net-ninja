import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/Queries";

/**
 * It uses the `useQuery` hook to fetch data from the API.
 * @returns A list of reviews.
 */
export default function Homepage() {
  const { data, loading, error } = useQuery(GET_REVIEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  // console.log(data.reviews.data[0].attributes);

  return (
    <div>
      {data.reviews.data.map((review) => (
        <div key={review.id} className="review-card" data-testid={`review-${review.id}`}>
          <div className="rating">{review.attributes.Rating}</div>
          <h2>{review.attributes.Title}</h2>

          <small>console list</small>

          <p>{review.attributes.Body.substring(0, 200)}</p>
          <Link to={`/details/${review.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  );
}
