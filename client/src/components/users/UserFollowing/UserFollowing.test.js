import React from 'react';
import renderer from 'react-test-renderer';
import UserFollowing from './UserFollowing';
import followingData from '../../../../../lib/test-data/userFollowing';

describe('<UserFollowing />', () => {
  it('renders correctly and equals snapshot', () => {
    const tree = renderer
      .create(<UserFollowing following={followingData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
