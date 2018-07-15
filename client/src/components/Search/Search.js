import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from '../_shared/Loader/';
import Suggestions from '../SearchSuggestions/';
import { searchDataFieldType } from '../../lib/propTypes';
import inputStyle from './Search.styles';

class Search extends Component {
  state = {
    error: false,
    loading: false,
    query: '',
    results: []
  };

  getData = () => {
    this.setState({ loading: true });

    axios
      .get(this.props.src, { params: { q: this.state.query } })
      .then(({ data }) => {
        this.setState({ results: data, loading: false });
      })
      .catch(() => this.setState({ error: true, loading: false }));
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          this.getData();
        } else if (!this.state.query) {
          this.setState({ results: [] });
        }
      }
    );
  };

  render() {
    const { fields } = this.props;
    const { results, error, loading } = this.state;
    return (
      <form>
        {error && (
          <div className="error">
            Sorry there was an error :(. Please try again.
          </div>
        )}
        <input
          className={inputStyle}
          placeholder="Search for a user..."
          ref={input => {
            this.search = input;
          }}
          onChange={this.handleInputChange}
        />

        <Loader loading={loading} />

        {!loading && results && results.length ? (
          <Suggestions results={results} fields={fields} />
        ) : null}
      </form>
    );
  }
}

Search.propTypes = {
  src: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(searchDataFieldType).isRequired
};

export default Search;
