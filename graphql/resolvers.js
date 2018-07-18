const User = require('../models/user');
const GraphQLJSON = require('graphql-type-json');

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    users: (_, { query }) => User.search(query),
    user: (_, { id }) => User.get(id),
    userWork: (_, { id }) => User.workExperience(id),
    userFollowers: (_, { id }) => User.followers(id),
    userFollowing: (_, { id }) => User.following(id)
  },
  User: {
    name: user =>
      user.last_name ? `${user.first_name} ${user.last_name}` : user.first_name,
    projects: user => User.projects(user.id),
    followers: user => User.followers(user.id),
    following: user => User.following(user.id),
    stats: user => User.stats(user.id),
    work: user => User.workExperience(user.id)
  }
};

module.exports = resolvers;
