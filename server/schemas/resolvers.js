const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      try {
        return await User.find();
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch users');
      }
    },
    user: async (parent, { username }) => {
      try {
        return await User.findOne({ username });
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch user');
      }
    },
    me: async (parent, args, context) => {
      try {
        if (context.user) {
          return await User.findOne({ _id: context.user._id });
        }
        throw new AuthenticationError('User not authenticated');
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch user');
      }
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      try {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create user');
      }
    },
    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError('User not found');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError('Incorrect password');
        }

        const token = signToken(user);

        return { token, user };
      } catch (error) {
        console.error(error);
        throw new Error('Login failed');
      }
    },
  }
};

module.exports = resolvers;
