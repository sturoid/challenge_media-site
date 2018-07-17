import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Pass your GraphQL endpoint to uri
import { HashRouter as Router } from 'react-router-dom';
import 'sanitize.css/sanitize.css';
import './index.css';
import ErrorBoundary from './components/_shared/ErrorBoundary/';
import ScrollToTop from './components/_shared/ScrollToTop/';
import App from './layouts/App/';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

ReactDOM.render(
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <Router>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </ApolloProvider>
  </ErrorBoundary>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
