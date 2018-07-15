import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavMain from './NavMain';

describe('<UserNav />', () => {
  it('renders correctly and equals snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <NavMain />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
