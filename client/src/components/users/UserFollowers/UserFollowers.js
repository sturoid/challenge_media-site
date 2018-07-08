import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from '../../../components/_shared/Loader';

class UserFollowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      followers: null
    };
  }

  componentDidMount() {
    this.fetchDataAndSetState();
  }

  async fetchDataAndSetState() {
    const { data: followers } = await axios.get(
      `/api/v1/user/${this.props.userId}/followers`
    );
    this.setState({ followers });
  }

  render() {
    const { loading, error, followers } = this.state;
    console.log(followers);
    if (loading) return <Loader loading={loading} />;
    if (error) return <div>{error.message}</div>;
    return <h2>Followers</h2>;
  }
}

UserFollowers.propTypes = {
  userId: PropTypes.string.isRequired
};
export default UserFollowers;
