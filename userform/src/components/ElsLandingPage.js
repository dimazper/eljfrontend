import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import { Card } from 'material-ui';
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSchool } from '@fortawesome/free-solid-svg-icons';

import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import apply from "./apply_images.png"
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import ELJ1 from '../assets/ELJ2.jpg';
import Leaves from '../assets/bg.png';
import Leaves2 from '../assets/bg2.png';
import Child1 from '../assets/kid1.png';

import Leaves3 from '../assets/bg3.png';
import Header from "./Header";



// landing page

export class ElsLandingPage extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
           users: [
              { In_Progress: '', Completed: '' },
              { In_Progress: '', Completed: '' },
              { In_Progress: '', Completed: '' },
              { In_Progress: '', Completed: '' },
           ]
        }
     }

     createTableDataInProgress() {
        return this.state.users.map((user, index) => {
           const { In_Progress } = user 
           return (
              <tr key={In_Progress}>
                  <td>{In_Progress}</td>
              </tr>              
           )
        })
     }

     createTableDataCompleted() {
        return this.state.users.map((user, index) => {
           const { Completed } = user 
           return (
              <tr key={Completed}>
                 <td>{Completed}</td>
              </tr>              
           )
        })
     }

     createTableHeaderInProgress() {
        let header = Object.keys(this.state.users[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

     createTableHeaderCompleted() {
        let header = Object.keys(this.state.users[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

     render() {
     }
export default ElsLandingPage;