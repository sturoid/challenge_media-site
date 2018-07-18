import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../_shared/Table';

const UserFollowers = ({ followers }) => (
  <Table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Location</th>
        <th>Occupation</th>
      </tr>
    </thead>
    <tbody>
      {followers.map(f => (
        <tr key={f.id}>
          <td>{f.name}</td>
          <td>{f.location}</td>
          <td>{f.occupation}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

UserFollowers.propTypes = {
  followers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      occupation: PropTypes.string.isRequired
    })
  ).isRequired
};

export default UserFollowers;
