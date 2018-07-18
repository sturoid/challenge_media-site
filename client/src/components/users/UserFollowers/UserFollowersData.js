import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Loader from '../../../components/_shared/Loader';
import UserFollowers from './UserFollowers';

const GET_USER_FOLLOWERS = gql`
  query userFollowers($id: String!) {
    userFollowers(id: $id) {
      id
      name
      location
      occupation
    }
  }
`;

const UserFollowersData = ({ userId }) => (
  <Query query={GET_USER_FOLLOWERS} variables={{ id: userId }}>
    {({ loading, error, data }) => {
      if (loading) return <Loader loading />;
      if (error) return `Error! ${error.message}`;
      return <UserFollowers followers={data.userFollowers} />;
    }}
  </Query>
);

UserFollowersData.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserFollowersData;
