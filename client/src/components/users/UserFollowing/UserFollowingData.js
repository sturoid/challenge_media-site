import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from '../../../components/_shared/Loader';
import UserFollowing from './UserFollowing';

class UserFollowersData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      following: []
    };
  }

  componentDidMount() {
    this.fetchDataAndSetState();
  }

  async fetchDataAndSetState() {
    const { data: following } = await axios.get(
      `/api/v1/user/${this.props.userId}/following`
    );
    this.setState({ following });
  }

  render() {
    const { loading, error, following } = this.state;
    if (loading) return <Loader loading={loading} />;
    if (error) return <div>{error.message}</div>;
    return <UserFollowing following={following} />;
  }
}

UserFollowersData.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserFollowersData;
