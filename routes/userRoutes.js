const User = require('../models/user');

const sendError = (e, res) => {
  res.statusText = e.response.statusText;
  res.sendStatus(e.response.status);
};

module.exports = app => {
  // All users
  app.get('/api/v1/users', async (req, res) => {
    try {
      res.send(await User.search(req.query.q));
    } catch (e) {
      sendError(e, res);
    }
  });

  // Single user
  app.get('/api/v1/user/:id', async (req, res) => {
    try {
      res.send(await User.get(req.params.id));
    } catch (e) {
      sendError(e, res);
    }
  });

  // User projects
  app.get('/api/v1/user/:id/projects', async (req, res) => {
    try {
      res.send(await User.projects(req.params.id));
    } catch (e) {
      sendError(e, res);
    }
  });

  // User followers
  app.get('/api/v1/user/:id/followers', async (req, res) => {
    try {
      res.json(await User.followers(req.params.id));
    } catch (e) {
      sendError(e, res);
    }
  });

  // User stats
  app.get('/api/v1/user/:id/stats', async (req, res) => {
    try {
      res.send(await User.stats(req.params.id));
    } catch (e) {
      sendError(e, res);
    }
  });
};
