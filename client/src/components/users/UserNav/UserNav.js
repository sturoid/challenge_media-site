import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const UserNav = ({ path }) => (
  <nav>
    <NavLink
      exact
      to={`${path}`}
      activeStyle={{ fontWeight: 'bold', color: 'red' }}
    >
      Projects
    </NavLink>
    <NavLink
      to={`${path}/followers`}
      activeStyle={{ fontWeight: 'bold', color: 'red' }}
    >
      Followers
    </NavLink>
  </nav>
);

UserNav.propTypes = {
  path: PropTypes.string.isRequired
};

export default UserNav;
