import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import Loader from '../../../components/_shared/Loader';
import UserWorkExperience from './UserWorkExperience';

const GET_USER_WORK_EXPERIENCE = gql`
  query userWork($id: String!) {
    userWork(id: $id) {
      position
      organization
      location
    }
  }
`;

const UserWorkExperienceData = ({ userId }) => (
  <Query query={GET_USER_WORK_EXPERIENCE} variables={{ id: userId }}>
    {({ loading, error, data }) => {
      if (loading) return <Loader loading />;
      if (error) return `Error! ${error.message}`;
      console.log(data.userWork);
      return <UserWorkExperience following={data.userWork} />;
    }}
  </Query>
);

UserWorkExperienceData.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserWorkExperienceData;
