const { AuthenticationError } = require('apollo-server-express');
const {User} = require("../models");
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, {userId}) => {
      return User.findOne({_id: userId});
    },
  },

  Mutation: {
    createUser: async (parent, {username, email, password}) => {
      return User.create({username, email, password});
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, { userId, authors, description, bookId, image, link, title }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: {
              savedBooks: { authors, description, bookId, image, link, title },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    deleteBook: async (parent, { userId, bookId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $pull: {
              savedBooks: {
                _id: bookId
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
