const axios = require('axios');
const keys = require('../config/keys');

const apiPath = 'https://api.behance.net/v2/users';
const apiAuth = `&client_id=${keys.BEHANCE_API_KEY}`;

const testUser = require('../lib/test-data/user');
const testProjects = require('../lib/test-data/userProjects');
const testFollowers = require('../lib/test-data/userFollowers');
const testStats = require('../lib/test-data/userStats');

const sendError = (e, res) => {
  res.statusText = e.response.statusText;
  res.sendStatus(e.response.status);
};

module.exports = app => {
  // All users
  app.get('/api/v1/users', async (req, res) => {
    try {
      const {
        data: { users }
      } = await axios.get(`${apiPath}?q=${req.query.q}&${apiAuth}`);

      res.send(users);
    } catch (e) {
      sendError(e, res);
    }
  });

  // Single user
  app.get('/api/v1/user/:id', async (req, res) => {
    try {
      // const {
      //   data: { user }
      // } = await axios.get(`${apiPath}/${req.params.id}?${apiAuth}`);
      // res.send(user);
      res.send(testUser.user);
    } catch (e) {
      sendError(e, res);
    }
  });

  // User projects
  app.get('/api/v1/user/:id/projects', async (req, res) => {
    try {
      // const {
      //   data: { projects }
      // } = await axios.get(`${apiPath}/${req.params.id}/projects?${apiAuth}`);

      // res.send(projects);
      res.send(testProjects.projects);
    } catch (e) {
      sendError(e, res);
    }
  });

  // User followers
  app.get('/api/v1/user/:id/followers', async (req, res) => {
    try {
      // const {
      //   data: { followers }
      // } = await axios.get(`${apiPath}/${req.params.id}/followers?${apiAuth}`);

      // res.send(followers);
      res.send(testFollowers.followers);
    } catch (e) {
      sendError(e, res);
    }
  });

  // User stats
  app.get('/api/v1/user/:id/stats', async (req, res) => {
    try {
      // const {
      //   data: { stats }
      // } = await axios.get(`${apiPath}/${req.params.id}/stats?${apiAuth}`);

      // res.send(followers);
      res.send(testStats.stats);
    } catch (e) {
      sendError(e, res);
    }
  });
};
