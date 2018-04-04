import React from 'react';
import PropTypes from 'prop-types';
import '../style.css';

const Input = (props) => {
  let reqLabel = props.label;

  if (props.required) {
    reqLabel = `${props.label}*`;
  }

  return (
    <label htmlFor={props.fieldName}>
      <span className="offscreen">{reqLabel}</span>
      <input defaultValue={props.defaultValue} id={props.fieldName} name={props.fieldName} type={props.type} maxLength={props.maxLength} placeholder={reqLabel} required={props.required} />
    </label>
  );
};

Input.defaultProps = {
  maxLength: 20,
  required: false,
  defaultValue: '',
};

Input.propTypes = {
  defaultValue: PropTypes.string,
  maxLength: PropTypes.number,
  type: PropTypes.string.isRequired,
  /** Used for field label and placeholder text */
  label: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  /** Adds asterisk to placeholder */
  required: PropTypes.bool,
};

export default Input;
