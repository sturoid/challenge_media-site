import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from '../../../components/_shared/Loader';
import UserFollowers from './UserFollowers';

class UserFollowersData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      followers: []
    };
  }

  componentDidMount() {
    this.fetchDataAndSetState();
  }

  async fetchDataAndSetState() {
    this.setState({ loading: true });

    const { data: followers } = await axios.get(
      `/api/v1/user/${this.props.userId}/followers`
    );
    this.setState({ followers, loading: false });
  }

  render() {
    const { loading, error, followers } = this.state;
    if (loading) return <Loader loading={loading} />;
    if (error) return <div>{error.message}</div>;
    return <UserFollowers followers={followers} />;
  }
}

UserFollowersData.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserFollowersData;
