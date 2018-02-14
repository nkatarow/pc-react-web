import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';


export default class ProfessionalServices extends PureComponent {
  componentDidMount() {
    document.title = 'Professional Services | Physio-Control';
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <h1>Professional Services</h1>
    );
  }
}

// ContactUs.propTypes = {
//
// };
