import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import RaisedButton from 'material-ui/RaisedButton';
import './Placeholder.css';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import parent from '../assets/family2.jpg';
import home from '../assets/home.png';

export class Header extends Component {
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
            <div class="row">
               <ul class="topnav">
                  <li><a class="active" href="#home"><img width= "40" height= "40" src={home} alt="home"/></a></li>
                  <li></li>
                  {/* <li><img width= "110" height= "70" src={parent} alt="parent"/></li> */}
                  <li><a href="#contact">Online Application Form</a></li>
                  <li class="right"><a href="/login">Log Out</a></li>
               </ul>             
            </div>
        );
    }
}

export default Header;