import React from 'react';
import renderer from 'react-test-renderer';
import UserFollowing from './UserFollowing';
// import followersData from '../../../../../lib/test-data/userFollowers';

describe('<UserFollowing />', () => {
  it('renders correctly and equals snapshot', () => {
    const tree = renderer.create(<UserFollowing />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
