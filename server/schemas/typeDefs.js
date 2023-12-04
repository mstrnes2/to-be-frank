const { gql } = require('apollo-server');

const typeDefs = gql`
  type QuizResults {
    restaurant: String!
    date: String!
  }

  type Profile {
    quizResults: QuizResults!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    profile: Profile!
  }

  type Query {
    getUserById(userId: ID!): User
    # Add other queries as needed
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    # Add other mutations as needed
  }
`;

module.exports = typeDefs;
