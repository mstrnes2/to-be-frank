import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        profile {
          quizResults {
            restaurant
            date
            restaurantImage
          }
        }
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      _id
      username
      email
      password
      profile {
        quizResults {
          restaurant
          date
          restaurantImage
        }
      }
    }
  }
`;

export const UPDATE_QUIZ_RESULTS = gql`
  mutation updateQuizResults(
    $id: ID!
    $restaurant: String
    $date: String
    $restaurantImage: String
  ) {
    updateQuizResults(
      id: $id
      restaurant: $restaurant
      date: $date
      restaurantImage: $restaurantImage
    ) {
      _id
      username
      email
      password
      profile {
        quizResults {
          restaurant
          date
          restaurantImage
        }
      }
    }
  }
`;
