import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { ScaleLoader } from 'react-spinners';

const container = css`
  background: rgba(255, 255, 255, 0.4);
  position: absolute;
  top: 50px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loader = ({ loading }) => (
  <React.Fragment>
    {loading && (
      <div className={container}>
        <ScaleLoader loading={loading} color="#4E95B1" />
      </div>
    )}
  </React.Fragment>
);

Loader.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Loader;
