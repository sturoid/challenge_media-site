import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../_shared/Table';
import SectionMessage from '../../_shared/SectionMessage';

const UserWorkExperience = ({ work }) =>
  work && work.length ? (
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
  ) : (
    <SectionMessage text="No work experience yet" />
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
