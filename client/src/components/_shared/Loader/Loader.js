import React from 'react';
import PropTypes from 'prop-types';
import { ScaleLoader } from 'react-spinners';
import styles from './Loader.css';

const Loader = ({ loading }) => (
  <React.Fragment>
    {loading && (
      <div className={styles.loaderContainer}>
        <ScaleLoader loading={loading} color="#4E95B1" />
      </div>
    )}
  </React.Fragment>
);

Loader.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Loader;
