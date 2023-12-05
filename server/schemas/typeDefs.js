const typeDefs = `
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
  }
`;

module.exports = typeDefs;
