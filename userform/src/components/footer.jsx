import React from 'react';
import { Link } from 'react-router-dom';

import NzGovLogo from 'assets/images/nz-gov-logo-white.svg';
import './footer.scss';

const Footer = () => (
  <footer>
    <div className="container">
      <p className="nz-govt">
        <a href="https://www.govt.nz/" target="_blank" rel="noopener noreferrer">
          <img width="200" height="20" src={NzGovLogo} alt="New Zealand Government" />
          <span className="visuallyhidden focusable">New Zealand Government</span>
        </a>
      </p>
      <ul>
        <li><Link target="_blank" rel="noopener noreferrer" to="/contact">Contact</Link></li>
        <li><Link target="_blank" rel="noopener noreferrer" to="/privacy">Privacy</Link></li>
      </ul>
    </div>
  </footer>
);


export default Footer;
