import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Route } from 'react-router-dom';
import UserNav from '../../components/users/UserNav/';
import UserDetails from '../../components/users/UserDetails/';
import UserStats from '../../components/users/UserStats/';
import UserFollowers from '../../components/users/UserFollowers/';
import UserWorkExperience from '../../components/users/UserWorkExperience/';
import UserFollowing from '../../components/users/UserFollowing/';
import UserProjects from '../../components/users/UserProjects';
import { flexWrapper, wrapper1024 } from '../../lib/wrappers.styles';
import { aside, main } from './UserPage.styles';
import {
  userDataFieldType,
  projectDataFieldType,
  statsDataFieldType
} from '../../lib/propTypes';

const UserPage = ({ match, user, projects, stats }) => (
  <section className={wrapper1024}>
    <div className={flexWrapper}>
      <aside className={aside}>
        <UserDetails user={user} />
        <UserStats stats={stats} />
      </aside>

      <main className={main}>
        <UserNav path={match.url} />
        <Route
          exact
          path={`${match.url}`}
          render={() => <UserProjects projects={projects} />}
        />
        <Route
          path={`${match.url}/work-experience`}
          render={() => <UserWorkExperience userId={match.params.id} />}
        />
        <Route
          path={`${match.url}/following`}
          render={() => <UserFollowing userId={match.params.id} />}
        />
        <Route
          path={`${match.url}/followers`}
          render={() => <UserFollowers userId={match.params.id} />}
        />
      </main>
    </div>
  </section>
);

UserPage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  user: userDataFieldType.isRequired,
  projects: PropTypes.arrayOf(projectDataFieldType).isRequired,
  stats: statsDataFieldType.isRequired
};

export default UserPage;
