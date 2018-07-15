import React from 'react';
import renderer from 'react-test-renderer';
import UserProjects from './UserProjects';
import projectsData from '../../../../../lib/test-data/userProjects';

describe('<UserProjects />', () => {
  it('renders correctly and equals snapshot', () => {
    const tree = renderer
      .create(<UserProjects projects={projectsData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
