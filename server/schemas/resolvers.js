const {User} = require("../models");

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
    addVote: async (parent, {matchupId, techNum}) => {
      const vote = Matchup.findOneAndUpdate(
        {_id: matchupId},
        {$inc: {[`tech${techNum}_votes`]: 1}},
        {new: true}
      );
      return vote;
    },
  },
};

module.exports = resolvers;
