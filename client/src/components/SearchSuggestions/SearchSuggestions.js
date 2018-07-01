import React from 'react';
import PropTypes from 'prop-types';
import './SearchSuggestions.css';
import searchDataType from '../../lib/propTypes';

const SearchSuggestions = ({ results, fields }) => (
  <React.Fragment>
    {results &&
      results.length && (
        <div className="responsive-table">
          <table>
            <thead>
              <tr>
                {fields.map(field => <th key={field.name}>{field.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {results.map(result => (
                <tr key={result.id}>
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

SearchSuggestions.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  fields: PropTypes.arrayOf(searchDataType).isRequired
};

export default SearchSuggestions;
