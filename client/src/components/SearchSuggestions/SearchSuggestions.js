import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { tableResponsive, table } from './SearchSuggestions.styles';
import searchDataType from '../../lib/propTypes';

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
    const { results, fields } = this.props;

    if (this.state.toRoute) {
      return <Redirect to={`/user/${this.state.toRoute}`} />;
    }

    return (
      <React.Fragment>
        {results &&
          results.length && (
            <div className={tableResponsive}>
              <table className={table}>
                <thead>
                  <tr>
                    {fields.map(field => (
                      <th key={field.name}>{field.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {results.map(result => (
                    <tr
                      key={result.id}
                      onClick={e => this.handleClick(e, result.id)}
                    >
                      {fields.map(field => (
                        <td key={field.name}>{result[field.value]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
      </React.Fragment>
    );
  }
}

SearchSuggestions.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  fields: PropTypes.arrayOf(searchDataType).isRequired
};

export default SearchSuggestions;
