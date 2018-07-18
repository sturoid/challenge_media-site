const axios = require('axios');
const keys = require('../config/keys');

const apiPath = 'https://api.behance.net/v2/users';
const apiAuth = `&client_id=${keys.BEHANCE_API_KEY}`;

class User {
  static async search(query) {
    try {
      const {
        data: { users }
      } = await axios.get(`${apiPath}?q=${query}&${apiAuth}`);

      return users || [];
    } catch (e) {
      return [];
    }
  }

  static async get(id) {
    try {
      const {
        data: { user }
      } = await axios.get(`${apiPath}/${id}?${apiAuth}`);

      return user || {};
    } catch (e) {
      return {};
    }
  }

  static async projects(id) {
    try {
      const {
        data: { projects }
      } = await axios.get(`${apiPath}/${id}/projects?${apiAuth}`);
      return projects || [];
    } catch (e) {
      return [];
    }
  }

  static async followers(id) {
    try {
      const {
        data: { followers }
      } = await axios.get(`${apiPath}/${id}/followers?${apiAuth}`);
      return followers || [];
    } catch (e) {
      return [];
    }
  }

  static async following(id) {
    try {
      const {
        data: { following }
      } = await axios.get(`${apiPath}/${id}/following?${apiAuth}`);

      return following || [];
    } catch (e) {
      return [];
    }
  }

  static async stats(id) {
    try {
      const {
        data: { stats }
      } = await axios.get(`${apiPath}/${id}/stats?${apiAuth}`);

      return stats || {};
    } catch (e) {
      return {};
    }
  }

  static async workExperience(id) {
    try {
      const {
        data: { work }
      } = await axios.get(`${apiPath}/${id}/work_experience?${apiAuth}`);

      return work || [];
    } catch (e) {
      return [];
    }
  }
}

module.exports = User;
