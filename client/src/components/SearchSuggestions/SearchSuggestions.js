import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Table from '../_shared/Table/';

class SearchSuggestions extends React.Component {
  state = {
    toRoute: null
  };

  handleClick = (e, value) => {
    this.setState({
      toRoute: value
    });
  };

  render() {
    const { results } = this.props;

    if (this.state.toRoute) {
      return <Redirect to={`/user/${this.state.toRoute}`} />;
    }

    return (
      <React.Fragment>
        {results &&
          results.length && (
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Occupation</th>
                </tr>
              </thead>
              <tbody>
                {results.map(result => (
                  <tr
                    key={result.id}
                    onClick={e => this.handleClick(e, result.id)}
                  >
                    <td>{result.name}</td>
                    <td>{result.location}</td>
                    <td>{result.occupation}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
      </React.Fragment>
    );
  }
}

SearchSuggestions.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default SearchSuggestions;
