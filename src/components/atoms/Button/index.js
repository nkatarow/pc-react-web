import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Btn } from './styles';

export default class Button extends PureComponent {
  clickHandler = () => {
    console.log(this.props.action);
  }

  render() {
    return (
      <Btn className={this.props.type} onClick={this.clickHandler}>
        {this.props.children}
      </Btn>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
