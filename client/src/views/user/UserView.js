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
import { wrapper1024 } from '../../lib/wrappers.styles';

class UserView extends React.Component {
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
      <section>
        <div className={wrapper1024}>
          <UserDetails user={user} />
          <UserStats user={stats} />

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
        </div>
      </section>
    );
  }
}

export default UserView;
