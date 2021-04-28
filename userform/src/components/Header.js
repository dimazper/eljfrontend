import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import RaisedButton from 'material-ui/RaisedButton';
import './Placeholder.css';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import { faChild } from '@fortawesome/free-solid-svg-icons';
import parent from '../assets/parent2.png';


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
                  <li><a class="active" href="/login">Home</a></li>
                  <li class="right"><a href="/login">Log Out</a></li>

                  <li class="right"><a href="/profile">Profile</a></li>

               </ul>             
            </div>
        );
    }
}

export default Header;