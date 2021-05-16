import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import RaisedButton from 'material-ui/RaisedButton';
import './Placeholder.css';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Header from "./Header";
import { List, ListItem } from 'material-ui/List';
import Fab from '@material-ui/core/Fab';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

export class InformationPage extends Component {
    continue = e => {
        e.preventDefault();
        //Process Form//
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }; 

    routeChange=()=> {window.location.href='/login';}
    
    render() { 
        return (  
            <MuiThemeProvider>
            <Header/>
                <React.Fragment>
                <List> 
                <div class="cardReview">
                    <div class="row">
                        <p><br/></p>
                        <h2>Childcare Assistance
application form</h2>
                        <p>Work and Income may be able to help with assistance towards childcare costs if:  <br></br>
<br></br>• you’re the main caregiver of the child, and 
<br></br>• your family is on a low or middle income, and 
<br></br>• you’re a New Zealand citizen or permanent resident, and
<br></br>• your child has at least three hours of care a week.
<br></br><br></br>


<br></br><br></br>The childcare assistance available to you will depend on your individual situation and the type of childcare your child is enrolled in.
If you have a 3 or 4 year old child, they may be able to get up to 20 hours of early childhood education (20 Hours ECE) funded by the Government. It will depend on the type of childcare service your child attends and whether they offer 20 hours ECE.</p>                      
                        </div>
                        </div>
                        <div class="cardReview">
                        <div class="row">
                            <h3>You are eligible for the subsidy <FontAwesomeIcon color='green' icon={faCheckCircle}/></h3>
                            <p>
                            <br></br>Apply now - before your child starts the programme.
                            <br></br><br></br>So you can get a subsidy from the day your child starts the programme, you need to apply before your child’s first day. This is especially important for school holidays.
                            S02 – NOV 2021
                            </p>
                            
                        </div>
                        </div>

                        <div class="cardReview">
                        <div class="row"><br/>
                        <Fab
                                    variant="extended"
                                    size="extralarge"
                                    color="primary"
                                    aria-label="Add"
                                    onClick={this.routeChange} style={style}
                                    >
                                    Apply
                                    </Fab>


                        {/* <Link to='/login'><RaisedButton
                       label=" Apply "></RaisedButton></Link>                    */}
                        </div>
                    </div> 
                    </List>                
                </React.Fragment>
                
            </MuiThemeProvider>
        );
    }
}

const style = {
    margin: 15,
   };


export default InformationPage;