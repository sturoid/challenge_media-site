import React from 'react';
import renderer from 'react-test-renderer';
import UserStats from './UserStats';
import statsData from '../../../../../lib/test-data/userStats';

describe('<UserStats />', () => {
  it('renders correctly and equals snapshot', () => {
    const tree = renderer
      .create(<UserStats stats={statsData.all_time} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
