import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import { Checkbox } from 'material-ui';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './Userform.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import Progress from './progress'
import BorderLinearProgress from '@material-ui/core/LinearProgress';
import DatePicker from 'react-bootstrap';
import HeaderForm from './HeaderForm';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

// Import React Progress Bar
// import "react-step-progress-bar/styles.css";
// import { ProgressBar, Step } from "react-step-progress-bar";
// Import React Progress Bar
import Accordion from './Accordion';
// import ProgressBar from './ProgressBar';
import './LandingPage.css';

import { faCircle, faDotCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import Leaves from '../assets/bg.png';
import { ProgressBar, Step } from "react-step-progress-bar";
import Header from './Header';




export class FormPartnerDetails extends Component {
    state = { 
        showing2: false ,
        showing3: false,
        showing4: true,
        namePrefer:''
    
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }; 
    
    render() { 
        const { values, handleChange } = this.props;
        const { showing2,showing3,showing4 } = this.state;
        const showfirst = values.firstName+" "+values.lastName;
        const showsecond = values.firstNameNOTsame+" "+values.lastNameNOTsame;
        const { classes } = this.props;


        return (          
            <MuiThemeProvider id='title'> 
                <Header/>                        
            <React.Fragment>

                {/* <ProgressBar
                    percent={10}
                    filledBackground="linear-gradient(to right, #00080, #f0bb31)"
                    text="10%"
                    height="15px"
                />             */}

                

                


                    {/* Question 1              */}
                    <FormControl component="fieldset">
      
                    {/* <BorderLinearProgress variant="determinate" value={10} /> */} 

                    <div class="cardLeaves">
                    <img src={Leaves} width="300" height="350" alt="Person"/>
                    </div>
                          
                    <div class="card">
                    <h1>Tell us about your relationship status</h1>
                    <br></br>
                    <br></br>
                    <ProgressBar percent={100}>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>
</ProgressBar>
                    <br></br>
                    <br></br><h3>Definition of a relationship</h3>
                    <p>Whether people are single or a couple effects eligibility for certain income assistance and the rate at which we can pay that assistance.</p>
                    <p>When we decide your entitlement to income assistance, we'll consider you to be in a relationship if you're married, in a civil union, or in a de facto relationship, and have a degree of companionship.</p>
                    <p>By degree of companionship, we mean two people:</p>
                    <li>are comitted to each  other emotionally for the foreseeable future, and</li>
                    <li>are financially interdependant.</li>
                    <p>To give you a better  idea  of what we mean by this, think about whether your relationship includes some of the things below:</p>
                    <li>you live together at the same address most of the time</li>
                    <li>you share responsibilities, for example bringing up children(if any)</li>
                    <li>you socialise and holiday together</li>
                    <li>you share money, bank accounts or credit cards</li>
                    <li>you share household bills</li>
                    <li>you have a sexual relationship</li>
                    <li>people think of you as a couple</li>
                    <li>you give each other emotional support and companionship</li>
                    <br></br><br></br>
                    <h3>Do you understand our definition of a relationship?</h3>
                    {/* <p class="question">Tell us the reason you or your partner (if you have one) are applying for childcare assistance. Tick all that apply</p>                 */}
                    <FormControlLabel
                            style={styles.input}
                            value="Yes"
                            control={<Checkbox color="primary" />}
                            label="I understand the definition of a relationship for benefit purposes"
                            labelPlacement="end"
                            // onChange={handleChange('ethnicGroup')}
                            // defaultValue={values.ethnicGroup}
                            
                            />
                    <br></br>
                    <h3>Do you have a partner?</h3>
                    {/* <p class="question">Are you working?</p>                 */}

                    <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
        <FormControlLabel
          value="no"
          control={<Radio color="primary" />}
          label="No"
          labelPlacement="end"
          // onChange={handleChange('isWorking')}
          // defaultValue={values.isWorking}


        />
        <FormControlLabel
          value="yes"
          control={<Radio color="primary" />}
          label="Yes"
          labelPlacement="end"
          onChange={handleChange('isWorking')}
          defaultValue={values.isWorking}
          onClick={() => this.setState({ showing2: !showing2 })}
        />
      </RadioGroup>
      
    </FormControl>
<br></br>
<br></br>
{/* <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={this.back} style={styles.button}>
          Back 
        </Button> */}

        {/* <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={this.continue} style={styles.button}>
          Continue 
        </Button> */}
        {/* <FormGroup aria-label="position" row>  */}
        <div class="column">
        <div class="cardButtonLeft">
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="Add"
          className={classes.margin}
          onClick={this.back} style={styles.button}
        >
          Back
        </Fab>
        </div>      
        </div>

        <div class="column">
        <div class="ButtonLeft">
        </div>
        </div>



        <div class="column">
        <div class="cardButtonRight">
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="Add"
          className={classes.margin}
          onClick={this.continue} style={styles.button}
        >
          Next
        </Fab>
        </div>
        </div>
        {/* </FormGroup> */}

                    {/* <RaisedButton
                       label="Back" 
                       primary={false}       
                       style={styles.button}
                       onClick={this.back}
                    />
                    <RaisedButton
                       label="Continue" 
                    //    primary={true}
                       backgroundColor= '#1cbaa1'
                       style={styles.button}
                       onClick={this.continue}
                    /><br/><br/> */}
                    </div>
                    </FormControl><br></br>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const stylesButton = theme => ({
    margin: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

const styles = {
    button: {
        margin: 15        
    }
}

FormPartnerDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FormPartnerDetails);
// export default FormPersonalDetails;