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
            <td>{`${f.first_name} ${f.last_name}`}</td>
            <td>{`${f.state} ${f.country}`}</td>
            <td>{`${f.occupation}`}</td>
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
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      occupation: PropTypes.string.isRequired
    })
  ).isRequired
};

export default UserFollowers;
