import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../_shared/Table';
import SectionMessage from '../../_shared/SectionMessage';

const UserFollowers = ({ followers }) =>
  followers && followers.length ? (
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
            <td>{f.occupation}</td>
            <td>{f.location}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  ) : (
    <SectionMessage text="No one following yet." />
  );

UserFollowers.propTypes = {
  followers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string,
      occupation: PropTypes.string
    })
  ).isRequired
};

export default UserFollowers;
