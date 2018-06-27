import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css/sanitize.css';
import './index.css';
import ErrorBoundary from './components/_shared/ErrorBoundary/';
import App from './layout/App/';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);

registerServiceWorker();
