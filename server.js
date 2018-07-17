const express = require('express');
const path = require('path');
const cors = require('cors');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const compression = require('compression');
const bodyParser = require('body-parser');
const gqlSchema = require('./graphql/');

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  graphqlExpress({ schema: gqlSchema })
);
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

if (process.env.NODE_ENV === 'production') {
  // Serve any static files.
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`)); // eslint-disable-line
