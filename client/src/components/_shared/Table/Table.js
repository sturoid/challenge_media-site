import React from 'react';
import PropTypes from 'prop-types';
import { tableResponsive, table } from './Table.styles';

const Table = ({ children }) => (
  <div className={tableResponsive}>
    <table className={table}>{children}</table>
  </div>
);

Table.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Table;
