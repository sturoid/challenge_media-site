import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../_shared/Table';

const UserFollowing = ({ following }) => (
  <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Occupation</th>
      </tr>
    </thead>
    <tbody>
      {following.map(f => (
        <tr key={f.id}>
          <td>{f.name}</td>
          <td>{f.location}</td>
          <td>{f.occupation}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

UserFollowing.propTypes = {
  following: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      occupation: PropTypes.string.isRequired
    })
  ).isRequired
};

export default UserFollowing;
