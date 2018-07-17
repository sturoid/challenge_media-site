import React from 'react';
import PropTypes from 'prop-types';
import container from './SectionMessage.styles';

const SectionMessage = ({ text }) => <div className={container}>{text}</div>;

SectionMessage.propTypes = {
  text: PropTypes.string.isRequired
};

export default SectionMessage;
