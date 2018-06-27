import React from 'react';
import styles from './Search.css';

const Search = () => (
  <div className={styles.container}>
    <input
      className={styles.input}
      type="search"
      placeholder="Search for a user..."
    />
  </div>
);

export default Search;
