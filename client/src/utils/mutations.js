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
            link
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
          link
        }
      }
    }
  }
`;

export const UPDATE_QUIZ_RESULTS = gql`
  mutation updateQuizResults(
    $restaurant: String
    $restaurantImage: String
    $date: String
  ) {
    updateQuizResults(
      restaurant: $restaurant
      restaurantImage: $restaurantImage
      date: $date
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
          link
        }
      }
    }
  }
`;
