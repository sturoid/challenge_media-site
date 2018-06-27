import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Search.css';
import Suggestions from '../SearchSuggestions/';
import searchFieldType from '../../lib/propTypes';

class Search extends Component {
  state = {
    error: false,
    query: '',
    results: []
  };

  getData = () => {
    axios
      .get(this.props.src, { params: { q: this.state.query } })
      .then(({ data }) => {
        this.setState({ results: data });
      })
      .catch(() => this.setState({ error: true }));
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getData();
          }
        } else if (!this.state.query) {
          this.setState({ results: [] });
        }
      }
    );
  };

  render() {
    const { fields } = this.props;
    const { results, error } = this.state;
    return (
      <form>
        {error && <div className="error">{error}</div>}
        <input
          placeholder="Search for a user..."
          ref={input => {
            this.search = input;
          }}
          onChange={this.handleInputChange}
        />
        {results &&
          results.length && <Suggestions results={results} fields={fields} />}
      </form>
    );
  }
}

Search.propTypes = {
  src: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(searchFieldType).isRequired
};

export default Search;
