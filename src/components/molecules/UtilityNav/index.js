import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const UtilityNav = () => (
  <div className="utility">
    <div>
      <Link to="http://physio-control.com" target="_blank" className="company">
        <svg
          x="0px"
          y="0px"
          width="6px"
          height="12px"
          viewBox="0 0 6 12"
          style={{ enableBackground: 'new 0 0 6 12' }}
          xmlSpace="preserve"
        >
          <polyline className="st0" points="0,0 5.4,5.4 0,10.7 " />
        </svg>
        Physio-Control
      </Link>

      <div>
        <h2>Login:</h2>
        <Link to="http://www.healthems.com" target="_blank" className="product">
          <svg
            x="0px"
            y="0px"
            width="6px"
            height="12px"
            viewBox="0 0 6 12"
            style={{ enableBackground: 'new 0 0 6 12' }}
            xmlSpace="preserve"
          >
            <polyline className="st0" points="0,0 5.4,5.4 0,10.7 " />
          </svg>
          Health EMS <span className="link-label">Login</span>
        </Link>
        <Link to="http://www.lifenetsystems.com" target="_blank" className="product">
          <svg
            x="0px"
            y="0px"
            width="6px"
            height="12px"
            viewBox="0 0 6 12"
            style={{ enableBackground: 'new 0 0 6 12' }}
            xmlSpace="preserve"
          >
            <polyline className="st0" points="0,0 5.4,5.4 0,10.7 " />
          </svg>
          LifeNet <span className="link-label">Login</span>
        </Link>
      </div>
    </div>
  </div>
);

export default UtilityNav;
