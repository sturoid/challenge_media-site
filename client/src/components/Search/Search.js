import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { debounce } from 'lodash';
import Loader from '../_shared/Loader/';
import Suggestions from '../SearchSuggestions/';
import inputStyle from './Search.styles';

const SEARCH_USERS = gql`
  query users($query: String!) {
    users(query: $query) {
      id
      name
      location
      occupation
    }
  }
`;

class Search extends React.Component {
  state = {
    query: ''
  };

  // Debounce user input to reduce API calls.
  getSearchResults = debounce(query => {
    this.setState({ query });
  }, 250);

  handleInputChange = e => {
    this.getSearchResults(e.target.value);
  };

  render() {
    return (
      <form>
        <input
          className={inputStyle}
          placeholder="Search for a user..."
          onChange={this.handleInputChange}
        />
        {this.state.query &&
          this.state.query.length && (
            <Query query={SEARCH_USERS} variables={{ query: this.state.query }}>
              {({ loading, error, data }) => {
                if (loading) return <Loader loading />;
                if (error) return `Error!: ${error}`;
                return <Suggestions results={data.users} />;
              }}
            </Query>
          )}
      </form>
    );
  }
}

export default Search;
