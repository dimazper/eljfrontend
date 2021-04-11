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
        return (
            <div>
               <ul class="topnav">
                  <li><a class="active" href="#home">Home</a></li>
                  <li><a href="#news">Childcare Assistance Application</a></li>
                  <li><a href="#contact">Oscar Subsidy</a></li>
                  <li class="right"><a href="#about">Log Out</a></li>
               </ul>
               <nav title="Early Learning Center Form" />
              <h1 id='title'>CCS Supervisor Portal <FontAwesomeIcon color='blue' icon={faSchool}/></h1>             
              {/* <table id='users'>
                 <tbody>
                    <tr>{this.createTableHeader()}</tr>
                    {this.createTableData()}
                 </tbody>
              </table> */}

              <div class="row">
 

  <div class="column">
    <div class="card">
      <h3>In Progress</h3>
      <p></p>
      {/* <table id='users'>
                 <tbody>
                    <tr>{this.createTableHeaderInProgress()}</tr>
                    {this.createTableDataInProgress()}
                 </tbody>
              </table> */}
      <p><a href='/App'>Application: 2</a></p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Completed</h3>
      <p>0 completed applications</p>
      {/* <table id='users'>
                 <tbody>
                    <tr>{this.createTableHeaderCompleted()}</tr>
                    {this.createTableDataCompleted()}
                 </tbody>
              </table> */}
      <p></p>
    </div>
  </div>
</div>

               {/* <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={apply} alt="apply logo" width="200" height="200"/>
                  <Card.Body>
                     <Card.Title>New Applicant</Card.Title>
                     <Card.Text>
                        Use this application to apply for:
                        <br/>
                        Childcare Subsidy - Payments that help families with the cost of pre-school 
                        childcare
                        <br/>
                        Oscar Subsidy - Payments for children who are at school and are under 14 years (or under
                        18 if you get a Child Disability Allowance for them)    
                     </Card.Text>
                        <button variant="primary" class="button button1">Apply Now</button>
                  </Card.Body>

                  <Card.Img variant="top" src={apply} alt="apply logo" width="200" height="200"/>
                  <Card.Body>
                     <Card.Title id='right'>New Applicant</Card.Title>
                     <Card.Text>
                        Use this application to apply for:
                        <br/>
                        Childcare Subsidy - Payments that help families with the cost of pre-school 
                        childcare
                        <br/>
                        Oscar Subsidy - Payments for children who are at school and are under 14 years (or under
                        18 if you get a Child Disability Allowance for them)    
                     </Card.Text>
                        <button variant="primary" class="button button1">Apply Now</button>
                  </Card.Body>
               </Card> */}
            </div>
        )
     }
}

 
export default ElsLandingPage;