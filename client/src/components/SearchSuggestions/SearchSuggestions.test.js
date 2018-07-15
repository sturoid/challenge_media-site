import React from 'react';
import renderer from 'react-test-renderer';
import SearchSuggestions from './SearchSuggestions';

const searchResults = [
  {
    id: 1,
    name: 'Stuart Clove',
    age: 33,
    state: 'Utah',
    dontShow: 'Should not show'
  },
  {
    id: 2,
    name: 'Jo Whitney',
    age: 27,
    state: 'Utah',
    dontShow: 'Should not show'
  },
  {
    id: 3,
    name: 'Cooper Whitney',
    age: 7,
    state: 'Florida',
    dontShow: 'Should not show'
  }
];

const showFields = [
  { name: 'Name', value: 'name' },
  { name: 'Age', value: 'age' },
  { name: 'State', value: 'state' }
];

describe('<SearchSuggestions />', () => {
  it('renders correctly and equals snapshot', () => {
    const tree = renderer
      .create(<SearchSuggestions results={searchResults} fields={showFields} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
