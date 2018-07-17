const typeDefs = `
  type Project {
    id: ID!
    url: String
    name: String
    fields: [String]
    published_on: Int
    created_on: Int
    stats: ProjectStats
    covers: JSON
  }

  type ProjectStats {
    views: Int
    appreciations: Int
    comments: Int
  }
`;

module.exports = typeDefs;
