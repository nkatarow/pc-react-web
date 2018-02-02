import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.css';

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
};

export const ButtonTheme = {
  DEFAULT: 'default',
  OUTLINED: 'outlined',
};

const Button = (props) => {
  const classProps = classNames(
    styles.button,
    props.type,
    props.theme,
    props.className,
    { disabled: props.disabled },
  );

  return (
    <button type={props.type} className={classProps} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  className: '',
  onClick: () => {},
  type: ButtonType.BUTTON,
  theme: ButtonTheme.DEFAULT,
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

export default Button;
