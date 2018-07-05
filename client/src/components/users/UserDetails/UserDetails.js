import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = ({ user }) => (
  <div>
    <div>{user.first_name}</div>
    <div>{user.last_name}</div>
    <div>{user.username}</div>
  </div>
);

UserDetails.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired
};

export default UserDetails;
