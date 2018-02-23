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
  ACCESSIBLE: 'accessibile',
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
    <button
      type={props.type}
      className={classProps}
      onClick={props.onClick}
      disabled={props.disabled}
    >
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
  /** Options are ButtonType.BUTTON, ButtonType.RESET, ButtonType.SUBMIT */
  type: PropTypes.string,
  className: PropTypes.string,
  /** Options are ButtonTheme.DEFAULT, ButtonTheme.OUTLINED */
  theme: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
