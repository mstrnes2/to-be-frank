const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const { GraphQLError } = require("graphql");
const { ApolloServerErrorCode } = require("@apollo/server/errors");
// import { GraphQLError} from "graphql";

const resolvers = {
  Query: {
    users: async () => {
      try {
        return await User.find();
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch users");
      }
    },
    user: async (parent, { username }) => {
      try {
        return await User.findOne({ username });
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch user");
      }
    },
    me: async (parent, args, context) => {
      try {
        if (context.user) {
          return await User.findOne({ _id: context.user._id });
        }
        throw AuthenticationError;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch user");
      }
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // try {
        if (password.length < 6) {
          throw new GraphQLError("Password must be 6+ characters.", {
            extensions: {
              code: ApolloServerErrorCode.BAD_USER_INPUT,
            },
          });
        }

        // TODO: Add more input validation

        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      // } catch (error) {
      //   if (error instanceof GraphQLError) {
      //     throw error;
      //   }

      //   // Catch-all generic message for unexpected errors
      //   console.error(error);
      //   throw new Error("Failed to create user.");
      // }
    },
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          throw AuthenticationError;
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw AuthenticationError;

        }

        const token = signToken(user);

        return { token, user };
      } catch (error) {
        console.error(error);
        throw new Error("Login failed");
      }
    },

    deleteUser: async (parent, {id}, context) => {
      if (context.user) {
        const user = await User.findOneAndDelete({ _id: id });
        return user;
      }
      throw AuthenticationError;
    },

    updateQuizResults: async (parent, { restaurant, restaurantImage, date, link }, context) => {
      try {
        if(context.user) {
        const user = await User.findById(context.user._id);

        if (!user) {
          throw new Error("User not found");
        }
        user.profile.quizResults.restaurant = restaurant;
        user.profile.quizResults.restaurantImage = restaurantImage;
        user.profile.quizResults.date = date;
        user.profile.quizResults.link = link;
        
        await user.save();

        return user;
      } else {
        throw AuthenticationError;
      }
      } catch (error) {
        console.error(error);
        throw new Error("Failed to update the quiz results");
      }
    },
  },
};

module.exports = resolvers;
