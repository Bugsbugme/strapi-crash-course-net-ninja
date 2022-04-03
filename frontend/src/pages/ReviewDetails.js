import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_REVIEW } from "../graphql/Queries";

/**
 * It queries the API for the review with the given id and then renders the review.
 * @returns The review data that is being returned.
 */
export default function Homepage() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_REVIEW, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  // console.log(data.review.data.attributes);

  return (
    <div className="review-card" data-testid={`review-${data.review.data.id}`}>
      <div className="rating" title="Rating">
        {data.review.data.attributes.Rating}
      </div>
      <h2 title={data.review.data.attributes.Title}>{data.review.data.attributes.Title}</h2>

      <small>console list</small>

      <p>{data.review.data.attributes.Body}</p>
    </div>
  );
}
