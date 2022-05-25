const {Matchup, Tech} = require("../models");

const resolvers = {
  Query: {
    matchups: async () => {
      return Matchup.find({});
    },

    matchup: async (parent, {matchupId}) => {
      return Matchup.findOne({_id: matchupId});
    },

    tech: async () => {
      return Tech.find({});
    },
  },

  Mutation: {
    addMatchup: async (parent, {tech1, tech2}) => {
      return Matchup.create({tech1, tech2});
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
