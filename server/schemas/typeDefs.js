const typeDefs = `
  type updateQuizResults {
    restaurant: String
    date: String
    restrauntImage: String
  }

  type Profile {
    quizResults: updateQuizResults
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    profile: Profile!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    deleteUser(id: ID!): User
    updateQuizResults(id: ID!, restaurant: String, date: String, restaurantImage: String): User
  }
`;

module.exports = typeDefs;
