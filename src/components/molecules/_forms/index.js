import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export const Input = (props) => {
  let reqLabel = props.label;

  if (props.required) {
    reqLabel = `${props.label}*`;
  }

  return (
    <label htmlFor={props.fieldName}>
      <span className="offscreen">{reqLabel}</span>
      <input id={props.fieldName} name={props.fieldName} type={props.type} maxLength={props.maxLength} placeholder={reqLabel} required={props.required} />
    </label>
  );
};

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

export const Select = (props) => {
  let reqLabel = props.label;

  if (props.required) {
    reqLabel = `${props.label}*`;
  }

  return (
    <label htmlFor={props.fieldName} className="select">
      <span className="offscreen">{reqLabel}</span>
      <select id={props.fieldName} name={props.fieldName} placeholder={reqLabel} required={props.required}>
        <option value="">{ props.label }</option>
        {props.children}
      </select>
    </label>
  );
};


Input.defaultProps = {
  maxLength: 20,
  required: false,
};

Textarea.defaultProps = {
  rows: 5,
  required: false,
};

Select.defaultProps = {
  required: false,
};

Input.propTypes = {
  maxLength: PropTypes.number,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

Textarea.propTypes = {
  rows: PropTypes.number,
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  required: PropTypes.bool,
};
