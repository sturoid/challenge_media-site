const express = require('express');
const path = require('path');
const axios = require('axios');
const keys = require('./config/keys');

const app = express();
const port = process.env.PORT || 5000;

// ///////////////
// API calls
// //////////////

// All users
app.get('/api/v1/users', async (req, res) => {
  try {
    const {
      data: { users }
    } = await axios.get(
      `https://api.behance.net/v2/users?q=${req.params.q}&client_id=${
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

// ///////////////
// Server setup
// //////////////

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`)); // eslint-disable-line
