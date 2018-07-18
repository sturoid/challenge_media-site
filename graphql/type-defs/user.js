const typeDefs = `
  type Query {
    users(query: String!): [User]
    user(id: Int!): User
    userFollowers(id: Int!): [User]
    userFollowing(id: Int!): [User]
    userWork(id: Int!): [UserWork]
  }

  type User {
    id: ID!
    first_name: String
    last_name: String
    name: String
    username: String
    city: String
    state: String
    country: String
    location: String
    company: String
    occupation: String
    created_on: Int
    url: String
    stats: UserStats
    projects: [Project]
    followers: [User]
    following: [User]
    work: [UserWork]
  }

  type UserStats {
    today: UserStatsFields
    all_time: UserStatsFields
  }

  type UserStatsFields {
    project_views: Int
    project_appreciations: Int
    project_comments: Int
  }

  type UserWork {
    position: String
    organization: String
    location: String
  }
`;

module.exports = typeDefs;
