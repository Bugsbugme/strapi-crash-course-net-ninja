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

export const GET_REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
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

export const GET_REVIEW_TEST = gql`
  query GetReview {
    review(id: 5) {
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
