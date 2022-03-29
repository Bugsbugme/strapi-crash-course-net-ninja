import { gql } from "@apollo/client";

export const GET_REVIEWS = gql`
  query GetReviews {
    reviews {
      data {
        id
        attributes {
          Title
          Body
          Rating
        }
      }
    }
  }
`;
