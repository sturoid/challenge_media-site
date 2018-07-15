import React from 'react';
import PropTypes from 'prop-types';
import follower from './UserFollowers.styles';

const UserFollowers = ({ followers }) => (
  <React.Fragment>
    {followers.map(f => (
      <div key={f.id} className={follower}>
        <div>{`${f.first_name} ${f.last_name}`}</div>
        <div>{`${f.state} ${f.country}`}</div>
        <div>{f.occupation}</div>
      </div>
    ))}
  </React.Fragment>
);

UserFollowers.propTypes = {
  followers: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default UserFollowers;
