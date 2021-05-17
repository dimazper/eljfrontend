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
import Fab from '@material-ui/core/Fab';
import ELJ1 from '../assets/ELJ2.jpg';
import Leaves from '../assets/kid2.png';
import kids3 from '../assets/kids3.png';
import kids5 from '../assets/kids5.png';
import Modal2 from './modal2';




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

     routeChange=()=> {window.location.href='/userform';}
   

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
   

   <br></br>
   {/* <h1 id='title'>Childcare Assistance Application <FontAwesomeIcon color='blue' icon={faChild}/></h1>   */}
   
   <div class="cardBannerTitle">
   <h1 id='title'>Childcare Assistance Application</h1>
   </div> 

   
   <div class="cardLeaves2">
   <img src={kids3} width="25%" alt="Person"/>
   </div>
   

   <div class="cardLeaves3">
   <img src={kids5} width="100%" alt="Person"/>
   </div>
   

   
  
   {/* <br></br>
   <br></br>
   <br></br>  
   <br></br>
   <br></br>
   <br></br> 
   <br></br>
   <br></br> 
   <br></br>
   <br></br>
   <br></br>  */}
   
  
   <div class="containerForLanding"> 
      {/* <div class="column"> */}
         {/* <div class="cardLanding">
            <h3>New Application</h3>
               <p>Use this application to apply for:</p>
                     <p>Childcare Subsidy - Payments that help families with the cost of pre-school 
                        childcare</p>
               <p>Oscar Subsidy - Payments for children who are at school and are under 14 years (or under
                     18 if you get a Child Disability Allowance for them)    </p>

            
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
         </div> */}     
      {/* </div> */}
         {/* <h3>Childcare Subsidy</h3>
      
         <p>Childcare Subsidy is a payment that helps families with the cost of pre-school childcare.</p>
             
         <h3>Who can get it</h3>  
         <p>You may get a childcare subsidy if:</p> 
         <p>- You're a main carer of a deopendent child</p>  
         <p>- You're a New Zealand citizen or permanent resident</p>  
         <p>- Your family is on alow or middle income</p>  
         <p>You should also normally live in New Zealand and intend to stay here.</p> 
         <p>It also depends on how much you and your partner earn.</p> 
         <p>The child must be:</p> 
         <p>Aged either:</p> 
         <p>under 5, or</p> 
         <p>over 5 if they're going to a cohort entry school(where new entrants start together on a set date after they turn 5), or</p>
         <p>under 6 if you get a Child Disability Allowance for them.</p>
         <p>attending an approved early childhood programme for 3 or more hours a week.</p>
         <p>Approved programmes includes early childhood education and care services, e.g.: </p>
         <p>- Kindergartnes and preschools</p>
         <p>- Childcare centres and creches</p>
         <p>- Playcentres and playgroups</p>
         <p>- Kohanga Reo, Punanga Reo, Aoga and other programmes with a language and culture focus</p>
         <p>- Approved home-based care</p> */}


               {/* <div class="cardButtonLeft">
               <Fab
               variant="extended"
               size="large"
               // backgroundColor= '#4caf50'
               color="primary"
               aria-label="Add"
               onClick={this.routeChange}
               style={styles.button}  
               >
               Start New Application
               </Fab> 
               </div>          */}

      {/* <div class="row"> */}
         <div class="cardLanding1">
            <h3>In Progress</h3>
            <p> <a href="/els">Timmy Robson (000000002)</a></p>
               {/* <p>Application: 2
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
               </p> */}
         </div>
      {/* </div> */}
  
  {/* <div class="row"> */}
    <div class="cardLanding2">
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
  {/* </div> */}
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
</div>




               
        )
     }
}

const styles = {
   button: {
       margin: 15        
   }
}
 
export default LandingPage;