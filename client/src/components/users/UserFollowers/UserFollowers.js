import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from '../../../components/_shared/Loader';

export const UserFollowers = ({ followers }) => (
  <React.Fragment>
    <h2>Followers</h2>
    {followers.map(f => <div key={f.id}>{f.first_name}</div>)}
  </React.Fragment>
);

UserFollowers.propTypes = {
  followers: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string.isRequired
    })
  ).isRequired
};

class DataContainer extends React.Component {
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
    if (loading) return <Loader loading={loading} />;
    if (error) return <div>{error.message}</div>;
    return <UserFollowers followers={followers} />;
  }
}

DataContainer.propTypes = {
  userId: PropTypes.string.isRequired
};

export default DataContainer;
