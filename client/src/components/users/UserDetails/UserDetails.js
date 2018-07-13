import React from 'react';
import PropTypes from 'prop-types';
import userDetails from './UserDetails.styles';

const UserDetails = ({ user }) => (
  <div className={userDetails}>
    <div>
      <img src={user.images['32']} alt="user-avatar" />
    </div>
    <div>{`${user.first_name} ${user.last_name}`}</div>
    <div>{`${user.state}, ${user.country}`}</div>
  </div>
);

UserDetails.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  }).isRequired
};

export default UserDetails;
