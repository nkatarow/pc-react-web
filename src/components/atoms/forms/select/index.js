import React from 'react';
import PropTypes from 'prop-types';
import '../style.css';

const Select = (props) => {
  let reqLabel = props.label;

  if (props.required) {
    reqLabel = `${props.label}*`;
  }

  return (
    <label htmlFor={props.fieldName} className="select">
      <span className="offscreen">{reqLabel}</span>
      <select
        defaultValue={props.defaultValue}
        id={props.fieldName}
        name={props.fieldName}
        placeholder={reqLabel}
        required={props.required}
      >
        <option value="">{ props.label }</option>
        {props.children}
      </select>
    </label>
  );
};

Select.defaultProps = {
  required: false,
  defaultValue: '',
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
};

export default Select;
