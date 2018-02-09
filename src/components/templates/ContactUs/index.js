import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';


export default class ContactUs extends PureComponent {
  componentDidMount() {
    document.title = 'Contact Us | Physio-Control';
  }

  render() {
    return (
      <h1>Contact Us</h1>
    );
  }
}

// ContactUs.propTypes = {
//
// };
