import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../_shared/Table';

const UserWorkExperience = ({ work }) => (
  <Table>
    <thead>
      <tr>
        <th>Position</th>
        <th>Organization</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {work.map(w => (
        <tr key={w.position + w.organization + w.location}>
          <td>{w.position}</td>
          <td>{w.organization}</td>
          <td>{w.location}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

UserWorkExperience.propTypes = {
  work: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired
    })
  ).isRequired
};

export default UserWorkExperience;
