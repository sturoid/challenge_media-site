const axios = require('axios');
const keys = require('../config/keys');

const apiPath = 'https://api.behance.net/v2/users';
const apiAuth = `&client_id=${keys.BEHANCE_API_KEY}`;

class User {
  static async search(query) {
    const {
      data: { users }
    } = await axios.get(`${apiPath}?q=${query}&${apiAuth}`);

    return users;
  }

  static async get(id) {
    const {
      data: { user }
    } = await axios.get(`${apiPath}/${id}?${apiAuth}`);

    return user;
  }

  static async projects(id) {
    const {
      data: { projects }
    } = await axios.get(`${apiPath}/${id}/projects?${apiAuth}`);

    return projects;
  }

  static async followers(id) {
    const {
      data: { followers }
    } = await axios.get(`${apiPath}/${id}/followers?${apiAuth}`);

    return followers;
  }

  static async following(id) {
    const {
      data: { followers }
    } = await axios.get(`${apiPath}/${id}/followers?${apiAuth}`);

    return followers;
  }

  static async stats(id) {
    const {
      data: { stats }
    } = await axios.get(`${apiPath}/${id}/stats?${apiAuth}`);

    return stats;
  }

  static async workExperience(id) {
    const {
      data: { followers }
    } = await axios.get(`${apiPath}/${id}/followers?${apiAuth}`);

    return followers;
  }
}

module.exports = User;
