const axios = require('axios');
const keys = require('../config/keys');

const apiPath = 'https://api.behance.net/v2/users';
const apiAuth = `&client_id=${keys.BEHANCE_API_KEY}`;

const testUser = require('../lib/test-data/user');
const testProjects = require('../lib/test-data/userProjects');
const testFollowers = require('../lib/test-data/userFollowers');
const testStats = require('../lib/test-data/userStats');

class User {
  static async search(query) {
    const {
      data: { users }
    } = await axios.get(`${apiPath}?q=${query}&${apiAuth}`);

    return users;
  }

  static async get(id) {
    // const {
    //   data: { user }
    // } = await axios.get(`${apiPath}/${id}?${apiAuth}`);

    // return user
    return testUser;
  }

  static async projects(id) {
    // const {
    //   data: { projects }
    // } = await axios.get(`${apiPath}/${id}/projects?${apiAuth}`);
    //
    // return projects
    return testProjects;
  }

  static async followers(id) {
    // const {
    //   data: { followers }
    // } = await axios.get(`${apiPath}/${id}/followers?${apiAuth}`);

    // return followers;

    return testFollowers;
  }

  static async stats(id) {
    // const {
    //   data: { stats }
    // } = await axios.get(`${apiPath}/${id}/stats?${apiAuth}`);
    //
    // return stats;
    return testStats;
  }
}

module.exports = User;
