import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Loader from '../../components/_shared/Loader';
import UserNav from '../../components/users/UserNav/';
import UserDetails from '../../components/users/UserDetails/';
import UserStats from '../../components/users/UserStats/';
import UserFollowers from '../../components/users/UserFollowers/';
import UserProjects from '../../components/users/UserProjects';
import { flexWrapper, wrapper1024 } from '../../lib/wrappers.styles';
import { aside, main } from './UserPage.styles';

class UserPage extends React.Component {
  static propTypes = {
    match: ReactRouterPropTypes.match.isRequired
  };

  state = {
    loading: true,
    error: null,
    user: null,
    projects: null
  };

  async componentDidMount() {
    this.fetchDataAndSetState();
  }

  async fetchDataAndSetState() {
    const { id } = this.props.match.params;
    const path = '/api/v1/user/';

    try {
      const getUsers = axios.get(`${path}${id}`);
      const getProjects = axios.get(`${path}${id}/projects`);
      const getStats = axios.get(`${path}${id}/stats`);

      const [
        { data: user },
        { data: projects },
        { data: stats }
      ] = await Promise.all([getUsers, getProjects, getStats]);

      this.setState({
        user,
        projects,
        stats,
        loading: false
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: e
      });
    }
  }

  render() {
    const { match } = this.props;
    const { loading, error, user, projects, stats } = this.state;
    if (loading) return <Loader loading={loading} />;
    if (error) return <div>{error.message}</div>;
    return (
      <section className={wrapper1024}>
        <div className={flexWrapper}>
          <aside className={aside}>
            <UserDetails user={user} />
            <UserStats stats={stats.all_time} />
          </aside>

          <main className={main}>
            <UserNav path={match.url} />
            <Route
              exact
              path={`${match.url}`}
              render={() => <UserProjects projects={projects} />}
            />
            <Route
              path={`${match.url}/followers`}
              render={() => <UserFollowers userId={match.params.id} />}
            />
          </main>
        </div>
      </section>
    );
  }
}

export default UserPage;
