import React from 'react';
import renderer from 'react-test-renderer';
import SectionMessage from './SectionMessage';

describe('<SectionMessage />', () => {
  it('renders correctly and matches snapshot', () => {
    const tree = renderer
      .create(<SectionMessage text="This is a message" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
