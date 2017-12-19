import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({ text }) => (
  <spam style={{ color: "#ae5856"}}>{ text }</spam>
);

InlineError.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InlineError;
