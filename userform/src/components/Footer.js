import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import RaisedButton from 'material-ui/RaisedButton';
import './Placeholder.css';
import { Link } from 'react-router-dom';
import NzGovLogo from '../assets/frontend_src_assets_images_nz-gov-logo-white.svg';


export class Footer extends Component {
    continue = e => {
        e.preventDefault();
        //Process Form//
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }; 
    
    render() { 
        return (  
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
    }
}

export default Footer;