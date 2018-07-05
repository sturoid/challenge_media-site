import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import axios from 'axios';
import Loader from '../../components/_shared/Loader';
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
      const getUsers = await axios.get(`${path}${id}`);
      const getProjects = await axios.get(`${path}${id}/projects`);
      const getFollowers = await axios.get(`${path}${id}/followers`);
      const getStats = await axios.get(`${path}${id}/stats`);

      const [
        { data: user },
        { data: projects },
        { data: followers },
        { data: stats }
      ] = await Promise.all([getUsers, getProjects, getFollowers, getStats]);

      this.setState({
        user,
        projects,
        followers,
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
    const { loading, error, user, projects, followers, stats } = this.state;

    if (loading) return <Loader loading={loading} />;
    if (error) return <div>{error.message}</div>;

    return (
      <section>
        <div className={wrapper1024}>
          <UserDetails user={user} />
          <UserStats user={stats} />
          <UserFollowers followers={followers} />
          <UserProjects projects={projects} />
        </div>
      </section>
    );
  }
}

export default UserView;
