import React from 'react';
import renderer from 'react-test-renderer';
import UserWorkExperience from './UserWorkExperience';
import workExperienceData from '../../../../../lib/test-data/userWorkExperience';

describe('<UserWorkExperience />', () => {
  it('renders correctly and equals snapshot', () => {
    const tree = renderer
      .create(<UserWorkExperience work={workExperienceData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
