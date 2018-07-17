import PropTypes from 'prop-types';

export const searchDataFieldType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
});

export const projectDataFieldType = PropTypes.shape({
  name: PropTypes.string,
  published_on: PropTypes.number,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  stats: PropTypes.shape({
    views: PropTypes.number,
    appreciations: PropTypes.number,
    comments: PropTypes.number
  })
});

export const userDataFieldType = PropTypes.shape({
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
});

export const statsDataFieldType = PropTypes.shape({
  project_views: PropTypes.number.isRequired,
  project_appreciations: PropTypes.number.isRequired,
  project_comments: PropTypes.number.isRequired
});
