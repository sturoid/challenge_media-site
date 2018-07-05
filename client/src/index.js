import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import 'sanitize.css/sanitize.css';
import './index.css';
import ErrorBoundary from './components/_shared/ErrorBoundary/';
import ScrollToTop from './components/_shared/ScrollToTop/';
import App from './layouts/App/';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ErrorBoundary>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </ErrorBoundary>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}

registerServiceWorker();
