import React from 'react';
import PropTypes from 'prop-types';
import EyeOutline from 'react-icons/lib/ti/eye-outline';
import ThumbsUp from 'react-icons/lib/ti/thumbs-up';
import Message from 'react-icons/lib/ti/message';
import userStats from './UserStats.styles';

const UserStats = ({ stats }) => (
  <div className={userStats}>
    <div>
      <div>
        <EyeOutline className="icon" /> Project Views
      </div>
      <div>{stats.project_views}</div>
    </div>
    <div>
      <div>
        <ThumbsUp className="icon" /> Appreciations
      </div>
      <div>{stats.project_appreciations}</div>
    </div>
    <div>
      <div>
        <Message className="icon" /> Comments
      </div>
      <div>{stats.project_comments}</div>
    </div>
  </div>
);

UserStats.propTypes = {
  stats: PropTypes.shape({
    project_views: PropTypes.number.isRequired,
    project_appreciations: PropTypes.number.isRequired,
    project_comments: PropTypes.number.isRequired,
    profile_views: PropTypes.number.isRequired
  }).isRequired
};
export default UserStats;
