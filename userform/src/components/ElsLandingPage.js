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
import Child1 from '../assets/kids5.png';
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
 return (<div class="coloumn">
 <Header/>
 
 
 <br></br>
 {/* <h1 id='title'>Childcare Assistance Application <FontAwesomeIcon color='blue' icon={faChild}/></h1> */}
 
 <div class="cardBannerTitle">
 <h1 id='title'>Childcare Assistance Application</h1>
 <br></br>
 <h3>New Application</h3>
 <p>Use this application to apply for:</p>
 <p>Childcare Subsidy - Payments that help families with the cost of pre-school 
 childcare</p>
 <p>Oscar Subsidy - Payments for children who are at school and are under 14 years (or under
 18 if you get a Child Disability Allowance for them) </p>
 
 </div> 
 
 
 <div class="cardLeaves2">
 {/* <img src={Child1} alt="Person"/> */}
 </div>
 
 
 <div class="cardLeaves3">
 <img src={Child1} alt="Person"/>
 </div>
 
 
 
 <div class="cardBanner">
 {/* <img src={ELJ1} width="1610" height="350" alt="Person"/> */}
 {/* <img src={ELJ1} width="70%" alt="Person"/> */}
 </div>
 
 
 
 
 {/* <div class="column">
 <div class="cardLanding">
 
 
 <Fab
 variant="extended"
 size="large"
 color="primary"
 aria-label="Add"
 onClick={this.routeChange}
 style={styles.button} 
 >
 Apply
 </Fab> 
 <br></br> 
 </div>
 </div> */}
 
 <div class="column">
 <div class="cardLanding">
 <h3>In Progress</h3>
 <p>Application: 2
 (ELS Supervisor)
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br> 
 </p>
 </div>
 </div>
 
 <div class="column">
 <div class="cardLanding">
 <h3>Completed</h3>
 <p>0 completed applications</p>
 {/* <table id='users'>
 <tbody>
 <tr>{this.createTableHeaderCompleted()}</tr>
 {this.createTableDataCompleted()}
 </tbody>
 </table> */}
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br> 
 <p></p>
 </div>
 </div>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br> 
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 
 {/* <div class="cardBanner">
 </div> */}
 
 {/* <div class="cardLeaves">
 <img src={Leaves} width="300" height="350" alt="Person"/>
 </div> */}
 
 {/* <div class="cardLeaves2">
 <img src={Leaves2} width="100" height="150" alt="Person"/>
 </div> */}
 
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 <br></br>
 
 {/* <div class="cardLeaves3">
 <img src={Leaves3} width="200" height="250" alt="Person"/>
 </div> */}
 
 
 </div>
 
 
 
 
 )
 }
 }
 
 const styles = {
 button: {
 margin: 15 
 }
 }
export default ElsLandingPage;