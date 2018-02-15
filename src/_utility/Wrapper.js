import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';

const store = require('../store/').default;

export default class Wrapper extends PureComponent {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
