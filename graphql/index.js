const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');
const SharedTypeDefs = require('./type-defs/_shared');
const UserTypeDefs = require('./type-defs/user');
const ProjectTypeDefs = require('./type-defs/project');

const typeDefs = [SharedTypeDefs, UserTypeDefs, ProjectTypeDefs];

module.exports = makeExecutableSchema({ typeDefs, resolvers });
