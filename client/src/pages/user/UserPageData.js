import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Loader from '../../components/_shared/Loader';
import UserPage from './UserPage';

const GET_USER = gql`
  query user($id: String!) {
    user(id: $id) {
      id
      name
      location
      stats {
        all_time {
          project_views
          project_appreciations
          project_comments
        }
      }
      projects {
        id
        url
        covers
        name
        published_on
        fields
        stats {
          views
          appreciations
          comments
        }
      }
    }
  }
`;

const UserPageData = ({ match }) => (
  <Query query={GET_USER} variables={{ id: match.params.id }}>
    {({ loading, error, data }) => {
      if (loading) return <Loader loading />;
      if (error) return `Error!: ${error}`;
      return (
        <UserPage
          match={match}
          user={data.user}
          projects={data.user.projects}
          stats={data.user.stats.all_time}
        />
      );
    }}
  </Query>
);

UserPageData.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default UserPageData;
