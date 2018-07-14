import React from 'react';
import renderer from 'react-test-renderer';
import { UserFollowers } from './UserFollowers';
import followersData from '../../../../../lib/test-data/userFollowers';

describe('Rendering', () => {
  it('renders correctly and equals snapshot', () => {
    const tree = renderer
      .create(<UserFollowers followers={followersData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
