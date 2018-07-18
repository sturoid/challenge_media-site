import React from 'react';
import userDetails from './UserDetails.styles';
import { userDataFieldType } from '../../../lib/propTypes';

const UserDetails = ({ user }) => (
  <div className={userDetails}>
    <div>{user.name}</div>
    <div>{user.location}</div>
  </div>
);

UserDetails.propTypes = {
  user: userDataFieldType.isRequired
};

export default UserDetails;
