import React from 'react';
import Search from '../../components/Search/';
import styles from './App.css';

const App = () => (
  <div className={styles.app}>
    <header className={styles.header}>
      <h1 className={styles.title}>JS Behance API</h1>
    </header>
    <Search />
  </div>
);

export default App;
