const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  // All users
  app.get('/api/v1/users', async (req, res) => {
    try {
      const {
        data: { users }
      } = await axios.get(
        `https://api.behance.net/v2/users?q=${req.query.q}&client_id=${
          keys.BEHANCE_API_KEY
        }`
      );
      res.send(users);
    } catch (e) {
      res.statusText = 'Error while searching users';
      res.sendStatus(500);
    }
  });

  // Single user
  app.get('/api/v1/user/:id', (req, res) => {
    axios
      .get(
        `https://api.behance.net/v2/users/${req.params.id}&client_id=${
          keys.BEHANCE_API_KEY
        }`
      )
      .then(data => {
        console.log(data); // eslint-disable-line
        res.send(200);
      })
      .catch(e => {
        console.log(e); // eslint-disable-line
        res.statusText = 'Error while getting user info';
        res.sendStatus(500);
      });
  });
};
