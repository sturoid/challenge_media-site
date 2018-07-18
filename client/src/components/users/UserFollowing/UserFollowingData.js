import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Loader from '../../../components/_shared/Loader';
import UserFollowing from './UserFollowing';

const GET_USER_FOLLOWERS = gql`
  query userFollowing($id: String!) {
    userFollowing(id: $id) {
      id
      name
      location
      occupation
    }
  }
`;

const UserFollowingData = ({ userId }) => (
  <Query query={GET_USER_FOLLOWERS} variables={{ id: userId }}>
    {({ loading, error, data }) => {
      if (loading) return <Loader loading />;
      if (error) return `Error! ${error.message}`;
      return <UserFollowing following={data.userFollowing} />;
    }}
  </Query>
);

UserFollowingData.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserFollowingData;
