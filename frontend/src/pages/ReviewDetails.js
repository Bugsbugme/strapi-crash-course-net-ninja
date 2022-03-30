import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { GET_REVIEW } from "../graphql/Queries";

export default function Homepage() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_REVIEW, {
    variables: { id: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data.review.data.attributes);

  return (
    <div className="review-card">
      <div className="rating">{data.review.data.attributes.Rating}</div>
      <h2>{data.review.data.attributes.Title}</h2>

      <small>console list</small>

      <p>{data.review.data.attributes.Body}</p>
    </div>
  );
}
