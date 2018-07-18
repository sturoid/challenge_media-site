import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../_shared/Table';
import SectionMessage from '../../_shared/SectionMessage';

const UserFollowing = ({ following }) =>
  following && following.length ? (
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
            <td>{f.occupation}</td>
            <td>{f.location}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  ) : (
    <SectionMessage text="Not following anyone yet." />
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
