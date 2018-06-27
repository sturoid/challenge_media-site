import PropTypes from 'prop-types';

export const searchDataFieldType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
});

export default searchDataFieldType;
