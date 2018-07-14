import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import linkClass from './UserNav.styles';

const UserNav = ({ path }) => (
  <nav>
    <NavLink
      exact
      to={`${path}`}
      className={linkClass}
      activeStyle={{ color: '#4E95B1' }}
    >
      Projects
    </NavLink>
    <NavLink
      to={`${path}/followers`}
      className={linkClass}
      activeStyle={{ color: '#4E95B1' }}
    >
      Followers
    </NavLink>
  </nav>
);

UserNav.propTypes = {
  path: PropTypes.string.isRequired
};

export default UserNav;
