import React from 'react';
import renderer from 'react-test-renderer';
import UserDetails from './UserDetails';
import userData from '../../../../../lib/test-data/user';

describe('Rendering', () => {
  it('renders correctly and equals snapshot', () => {
    const tree = renderer.create(<UserDetails user={userData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
