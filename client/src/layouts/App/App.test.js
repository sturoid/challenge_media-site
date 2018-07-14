import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from '../App';

describe('Rendering', () => {
  it('renders correctly and equals snapshot', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <App />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
