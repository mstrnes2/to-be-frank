const typeDefs = `
  type ProfileQuizResults {
    restaurant: String
  }

  type Profile {
    quizResults: ProfileQuizResults
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
  }
`;

module.exports = typeDefs;
