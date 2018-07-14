import React from 'react';
import PropTypes from 'prop-types';
import EyeOutline from 'react-icons/lib/ti/eye-outline';
import ThumbsUp from 'react-icons/lib/ti/thumbs-up';
import Message from 'react-icons/lib/ti/message';
import moment from 'moment';
import project from './UserProjects.styles';
import { flexWrapper } from '../../../lib/wrappers.styles';

const UserProjects = ({ projects }) => (
  <React.Fragment>
    <h2>Projects</h2>

    <div className={flexWrapper}>
      {projects.map(p => (
        <a
          key={p.id}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className={project}
        >
          {p.covers && (
            <div>
              <img
                src={p.covers[Object.keys(p.covers)[1]]}
                alt="project-cover"
              />
            </div>
          )}
          <div className="title">{p.name}</div>

          <div className="published-date">
            {`Published on: ${moment(p.published_on * 1000).format('l')}`}
          </div>

          <div className="fields">
            {p.fields.map((field, index) => (
              <span key={field}>
                {field}
                {index < p.fields.length - 1 ? ' - ' : ''}
              </span>
            ))}
          </div>

          <div className="footer">
            <div>
              <EyeOutline />
              <span>{p.stats.views}</span>
            </div>
            <div>
              <ThumbsUp />
              <span>{p.stats.appreciations}</span>
            </div>
            <div>
              <Message />
              <span>{p.stats.comments}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  </React.Fragment>
);

UserProjects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      published_on: PropTypes.number,
      fields: PropTypes.arrayOf(PropTypes.string).isRequired,
      stats: PropTypes.shape({
        views: PropTypes.number,
        appreciations: PropTypes.number,
        comments: PropTypes.number
      })
    })
  ).isRequired
};

export default UserProjects;
