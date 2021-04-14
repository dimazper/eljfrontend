import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import { Card } from 'material-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LandingPage.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import apply from "./apply_images.png"
import { Link } from 'react-router-dom';
import { faChild } from '@fortawesome/free-solid-svg-icons';
import Header from "./Header";


// landing page

export class LandingPage extends Component {
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
           
<div class="row">
   <Header/>
   <h1 id='title'>Childcare Assistance Application <FontAwesomeIcon color='blue' icon={faChild}/></h1>             
      <div class="column">
         <div class="card">
            <h3>New Application</h3>
               <p>Use this application to apply for:</p>
                     <p>Childcare Subsidy - Payments that help families with the cost of pre-school 
                        childcare</p>
               <p>Oscar Subsidy - Payments for children who are at school and are under 14 years (or under
                     18 if you get a Child Disability Allowance for them)    </p>

            <Link to="/userform"><button class="button button1">Apply Now</button></Link>
         </div>
      </div>

      <div class="column">
         <div class="card">
            <h3>In Progress</h3>
               <p>Application: 2
                  (ELS Supervisor)
               </p>
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

               
        )
     }
}

 
export default LandingPage;