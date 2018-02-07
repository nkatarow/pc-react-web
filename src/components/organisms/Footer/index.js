import React from 'react';
import { Link } from 'react-router-dom';
import StrykerLogo from './stryker-logo.svg';
import './style.css';

const Footer = () => (
  <footer>
    <div>
      <div className="stryker">
        <Link to="https://www.stryker.com/us/en/index.html" target="_blank">
          <img src={StrykerLogo} alt="Stryker" />
        </Link>
        <small>&copy; Stryker 1998-2018</small>
      </div>

      <div className="follow">
        <Link to="/contact-us">Contact Us</Link>
        <a href="https://careers.stryker.com/" target="_blank" rel="noreferrer noopener">Careers</a>

        <h2>Follow Us:</h2>
        <Link to="http://www.facebook.com/PhysioControlInc/" target="_blank" className="icon">
          <svg
            x="0px"
            y="0px"
            width="9.6px"
            height="17.9px"
            viewBox="0 0 9.6 17.9"
            style={{ enableBackground: 'new 0 0 9.6 17.9' }}
            xmlSpace="preserve"
          >
            <g>
              <path className="st0" d="M6.9,3.4h2.7V0H6.9C4.6,0,2.8,2,2.8,4.5v1.7H0v3.4h2.8v8.3h3.4V9.6h3.4V6.2H6.2V4.4C6.2,3.8,6.6,3.4,6.9,3.4z" />
            </g>
          </svg>
        </Link>
        <Link to="https://twitter.com/PhysioControl" target="_blank" className="icon">
          <svg
            x="0px"
            y="0px"
            width="19.1px"
            height="15.5px"
            viewBox="0 0 19.1 15.5"
            style={{ enableBackground: 'new 0 0 19.1 15.5' }}
            xmlSpace="preserve"
          >
            <path
              className="st0"
              d="M19.1,1.8c-0.7,0.3-1.5,0.5-2.3,0.6c0.8-0.5,1.4-1.3,1.7-2.2c-0.8,0.5-1.6,0.8-2.5,1C15.4,0.5,14.4,0,13.2,0c-2.2,0-3.9,1.8-3.9,3.9c0,0.3,0,0.6,0.1,0.9C6.2,4.7,3.3,3.1,1.3,0.7C1,1.3,0.8,2,0.8,2.7C0.8,4,1.5,5.3,2.5,6c-0.6,0-1.2-0.2-1.8-0.5c0,0,0,0,0,0c0,1.9,1.4,3.5,3.1,3.8c-0.3,0.1-0.7,0.1-1,0.1c-0.3,0-0.5,0-0.7-0.1c0.5,1.6,1.9,2.7,3.7,2.7c-1.3,1.1-3,1.7-4.9,1.7c-0.3,0-0.6,0-0.9-0.1c1.7,1.1,3.8,1.8,6,1.8c7.2,0,11.2-6,11.2-11.2c0-0.2,0-0.3,0-0.5C17.9,3.3,18.6,2.6,19.1,1.8z"
            />
          </svg>
        </Link>
        <Link to="https://www.youtube.com/user/PHYSIOControlInc" target="_blank" className="icon">
          <svg
            x="0px"
            y="0px"
            width="23.8px"
            height="18px"
            viewBox="0 0 23.8 18"
            style={{ enableBackground: 'new 0 0 23.8 18' }}
            xmlSpace="preserve"
          >

            <g>
              <path
                className="st0"
                d="M12,18c-5.1,0-6.9-0.3-7.5-0.5c-2.3-0.1-4.1-1.9-4.2-4.2C0.2,12.9,0,11.7,0,9.1c0-2.7,0.2-4,0.3-4.3c0-2.3,1.9-4.2,4.2-4.2C5,0.3,6.8,0,11.8,0c5.1,0,7,0.4,7.5,0.5c2.3,0.1,4.2,1.9,4.2,4.3c0.1,0.3,0.3,1.8,0.3,4.7c0,1.9-0.1,3.2-0.3,3.8c-0.1,2.3-1.9,4.1-4.2,4.2C18.7,17.7,16.9,18,12,18z M5,15.8c0,0,1.2,0.4,7,0.4c5.7,0,6.9-0.4,6.9-0.4l0.2-0.1l0.2,0c1.4,0,2.6-1.2,2.6-2.6v-0.2l0.1-0.1c0-0.2,0.2-0.9,0.2-3.3c0-3.1-0.2-4.4-0.2-4.5l0-0.2c0-1.4-1.2-2.6-2.6-2.6h-0.2l-0.1-0.1c0,0-1.5-0.5-7.1-0.5c-5.6,0-6.9,0.4-7,0.5l-0.1,0l-0.2,0C3.2,2.2,2,3.4,2,4.8L2,5c0,0-0.2,1.1-0.2,4.1C1.7,2,2,12.9,2,12.9l0,0.2c0,1.4,1.2,2.6,2.6,2.6h0.2L5,15.8L5,15.8z"
              />
              <polygon className="st0" points="9.6,12.4 9.6,5.6 15.1,9" />
            </g>
          </svg>
        </Link>
        <Link to="https://www.linkedin.com/company/2528239/" target="_blank" className="icon">
          <svg
            x="0px"
            y="0px"
            width="16.7px"
            height="16.9px"
            viewBox="0 0 16.7 16.9"
            style={{ enableBackground: 'new 0 0 16.7 16.9' }}
            xmlSpace="preserve"
          >
            <g>
              <path
                className="st0"
                d="M4.2,2.1c0,1.2-1,2.1-2.1,2.1C1,4.2,0,3.3,0,2.1C0,1,1,0,2.1,0C3.3,0,4.2,1,4.2,2.1z M4,16.9H0.2V6.2H4V16.9z"
              />
              <path
                className="st0"
                d="M9.3,7.6L9.3,7.6c0.9-1.3,2-1.7,3.5-1.7c2.9,0,4,1.8,4,4.4v6.6h-3.8v-5.2c0-1,0.2-2.8-1.7-2.8c-1.5,0-2,1.1-2,2.5v5.5H5.5V6.2h3.8V7.6z"
              />
            </g>
          </svg>
        </Link>
      </div>

      <div className="legal">
        <div>
          <a href="https://www.physio-control.com/privacy.aspx" target="_blank" rel="noreferrer noopener">Privacy</a>
          <a href="https://www.physio-control.com/Termsofuse.aspx" target="_blank" rel="noreferrer noopener">Terms of Use</a>
          <a href="https://www.physio-control.com/disclosureandsafety.aspx" target="_blank" rel="noreferrer noopener">Disclosure &amp; Safety Information</a>
          <a href="https://www.physio-control.com/DeviceRegistration.aspx" target="_blank" rel="noreferrer noopener">Device Registration</a>
        </div>
        <div>
          <a href="https://www.physio-control.com/weee/Recycling/" target="_blank" rel="noreferrer noopener">WEEE Information</a>
          <a href="https://www.physio-control.com/Compliance/" target="_blank" rel="noreferrer noopener">Compliance</a>
          <a href="https://www.physio-control.com/Physio85/OneColumnPB.aspx?pageid=2147485986" target="_blank" rel="noreferrer noopener">Recycling Information</a>
          <a href="https://www.physio-control.com/uploadedFiles/Physio85/Contents/Environmental_Policy/Environmenatl%20Policy%20Statement%202016.pdf" target="_blank" rel="noreferrer noopener">Environmental Policy</a>
          <a href="https://www.physio-control.com/uploadedFiles/Physio85/Contents/Environmental_Policy/Health-and-Safety-Policy-Statement-2016.pdf" target="_blank" rel="noreferrer noopener">Health &amp; Safety Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
