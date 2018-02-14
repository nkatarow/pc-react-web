import React from 'react';
import PropTypes from 'prop-types';
import '../style.css';

export const Textarea = (props) => {
  let reqLabel = props.label;

  if (props.required) {
    reqLabel = `${props.label}*`;
  }

  return (
    <label htmlFor={props.fieldName}>
      <span className="offscreen">{reqLabel}</span>
      <textarea id={props.fieldName} name={props.fieldName} rows={props.rows} placeholder={reqLabel} required={props.required} />
    </label>
  );
};

Textarea.defaultProps = {
  rows: 5,
  required: false,
};

Textarea.propTypes = {
  rows: PropTypes.number,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
};

export default Textarea;
