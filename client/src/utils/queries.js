import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query {
    users {
      _id
      username
      email
      profile {
        quizResults {
          restaurant
          date
          restaurantImage
          link
        }
      }
    }
  }
`;

export const QUERY_USER = gql`
  query getUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
      profile {
        quizResults {
          restaurant
          date
          restaurantImage
          link
        }
      }
    }
  }
`;

export const GET_ME = gql`
  query {
    me {
      _id
      username
      email
      profile {
        quizResults {
          restaurant
          date
          restaurantImage
          link
        }
      }
    }
  }
`;


