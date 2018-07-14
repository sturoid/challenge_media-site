import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import UserNav from './UserNav';

describe('Rendering', () => {
  it('renders correctly and equals snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <UserNav path="/" />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
