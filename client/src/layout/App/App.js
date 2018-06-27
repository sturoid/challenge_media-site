import React from 'react';
import Search from '../../components/Search/';
import styles from './App.css';

const App = () => (
  <div className={styles.appContainer}>
    <header>
      <h1>JS Behance API</h1>
    </header>
    <main>
      <div className={styles.wrapper600}>
        <Search
          src="/api/v1/users"
          fields={[
            { name: 'Name', value: 'display_name' },
            { name: 'Username', value: 'username' },
            { name: 'Location', value: 'location' }
          ]}
        />
      </div>
    </main>
  </div>
);

export default App;
