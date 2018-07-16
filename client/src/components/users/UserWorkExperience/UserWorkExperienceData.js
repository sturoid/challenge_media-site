import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from '../../../components/_shared/Loader';
import UserWorkExperience from './UserWorkExperience';

class UserWorkExperienceData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      work: []
    };
  }

  componentDidMount() {
    this.fetchDataAndSetState();
  }

  async fetchDataAndSetState() {
    this.setState({ loading: true });

    const { data: work } = await axios.get(
      `/api/v1/user/${this.props.userId}/work-experience`
    );

    this.setState({ work, loading: false });
  }

  render() {
    const { loading, error, work } = this.state;
    if (loading) return <Loader loading={loading} />;
    if (error) return <div>{error.message}</div>;
    return <UserWorkExperience work={work} />;
  }
}

UserWorkExperienceData.propTypes = {
  userId: PropTypes.string.isRequired
};

export default UserWorkExperienceData;
