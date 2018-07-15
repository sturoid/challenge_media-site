import React from 'react';
import userDetails from './UserDetails.styles';
import { userDataFieldType } from '../../../lib/propTypes';

const UserDetails = ({ user }) => (
  <div className={userDetails}>
    <div>{`${user.first_name} ${user.last_name}`}</div>
    <div>{`${user.state}, ${user.country}`}</div>
  </div>
);

UserDetails.propTypes = {
  user: userDataFieldType.isRequired
};

export default UserDetails;
