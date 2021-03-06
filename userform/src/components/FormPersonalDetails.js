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




export class FormPersonalDetails extends Component {
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
                    <h1>Tell us about your work, education and activities</h1>
                    <br></br>
                    <br></br>
                    <ProgressBar percent={25}>
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
                    <br></br>
                    
                    <h3>Tell us the reason you or your partner (if you have one) are applying for childcare assistance. Tick all that apply</h3>
                    {/* <p class="question">Tell us the reason you or your partner (if you have one) are applying for childcare assistance. Tick all that apply</p>                 */}
                    <FormGroup aria-label="position" column>     
                    <FormControlLabel
                    value="work"
                    control={<Checkbox color="primary" />}
                    label="Work"
                    labelPlacement="end"
                    onChange={handleChange('ccAssistanceReason')}
                    defaultValue={values.ccAssistanceReason}
                    />
                    <FormControlLabel
                    value="work-related"
                    control={<Checkbox color="primary" />}
                    onChange={handleChange('ccAssistanceReason')}
                    defaultValue={values.ccAssistanceReason}

                    label="Work-related course or studying"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="activies"
                    control={<Checkbox color="primary" />}
                    onChange={handleChange('ccAssistanceReason')}
                    defaultValue={values.ccAssistanceReason}

                    label="Doing activities arranged by Work and Income"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="another"
                    control={<Checkbox color="primary" />}
                    onChange={handleChange('ccAssistanceReason')}
                    defaultValue={values.ccAssistanceReason}
                    label="Another reason"
                    labelPlacement="end"
                    />
                    <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="" />
                    </FormGroup>
                    <br></br>
                    <h3>Are you working?</h3>
                    {/* <p class="question">Are you working?</p>                 */}

                    <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
        <FormControlLabel
          value="no"
          control={<Radio color="primary" />}
          label="No"
          labelPlacement="end"
          onChange={handleChange('isWorking')}
          defaultValue={values.isWorking}


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
    { showing2 ?
    <div class="question">
    <p class="question">Who are you working for?</p>    
                         
                    <p>Employers name:</p>
                    {/* <FormGroup aria-label="position" row> */}
                    <TextField 
                       hintText="Employers name" //hfgfg
                       floatingLabelText="Employers name"
                       onChange={handleChange('employerName')}
                       defaultValue={values.employerName}
                       label="Employers name"
                       variant="outlined"
                       id="mui-theme-provider-outlined-input"
                    />      
                                    <p>Employers address:</p>
              
                    <FormGroup aria-label="position" column>     

                <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="" 
                onChange={handleChange('employerAddr')}
                defaultValue={values.employerAddr}
                />
                        </FormGroup>
                        <p>Employer's phone number:</p>
                    {/* <FormGroup aria-label="position" row> */}
                    <TextField 
        
                       onChange={handleChange('employerPhone')}
                       defaultValue={values.employerPhone}
                       label="phone number"
                       variant="outlined"
                       id="mui-theme-provider-outlined-input"
                    />  

                    <p>Employer's email / fax :</p>
                    {/* <FormGroup aria-label="position" row> */}
                    <TextField 
                       onChange={handleChange('employerFaxEmail')}
                       defaultValue={values.employerFaxEmail}
                       label="email / fax "
                       variant="outlined"
                       id="mui-theme-provider-outlined-input"
                    />  

                    <p>How many hours a week, <u>including lunch hours</u>, do you spend at work?</p>
                    {/* <FormGroup aria-label="position" row> */}
                    <TextField 
                       onChange={handleChange('hoursPerWeek')}
                       defaultValue={values.hoursPerWeek}
                       label="hours at work"
                       variant="outlined"
                       id="mui-theme-provider-outlined-input"
                    />  
                    <p>How many hours a week do you spend travelling <u>from the childcare service to work and returning</u>?</p>
                    {/* <FormGroup aria-label="position" row> */}
                    <TextField 
                       onChange={handleChange('hoursTravel')}
                       defaultValue={values.hoursTravel}
                       label="hours travelling"
                       variant="outlined"
                       id="mui-theme-provider-outlined-input"
                    />  
                    </div> : null }
                    <br></br>
                    <h3>Are you on a work-related course or studying?</h3>
                    {/* <p class="question">Are you on a work-related course or studying?</p>                 */}

<FormControl component="fieldset">
<RadioGroup row aria-label="position" name="position" defaultValue="no" row>
<FormControlLabel
style={styles.input}
value="no"
control={<Radio color="primary" />}
label="No"
labelPlacement="end"
onChange={handleChange('workRelatedCourse')}
defaultValue={values.workRelatedCourse}

/>
<FormControlLabel
value="yes"
control={<Radio color="primary" />}
label="Yes"
labelPlacement="end"
onChange={handleChange('workRelatedCourse')}
defaultValue={values.workRelatedCourse}
/>
</RadioGroup>

</FormControl> <br></br>

<h3>Are you doing activities arranged for you by Work and Income?
</h3>
{/* <p class="question">Are you doing activities arranged for you by Work and Income?</p>                 */}

<FormControl component="fieldset">
<RadioGroup row aria-label="position" name="position" defaultValue="no" row>
<FormControlLabel
value="no"
control={<Radio color="primary" />}
label="No"
labelPlacement="end"
onChange={handleChange('activities')}
defaultValue={values.activities}
/>
<FormControlLabel
value="yes"
control={<Radio color="primary" />}
label="Yes"
labelPlacement="end"
onChange={handleChange('activities')}
defaultValue={values.activities}
/>
</RadioGroup>

</FormControl> <br></br>
<h3>Are you applying for childcare assistance because of medical reasons?</h3>
{/* <p class="question">Are you applying for childcare assistance because of medical reasons?</p>                 */}

<FormControl component="fieldset">
<RadioGroup row aria-label="position" name="position" defaultValue="no" row>
<FormControlLabel
value="no"
control={<Radio color="primary" />}
label="No"
labelPlacement="end"
onChange={handleChange('medicalReason')}
defaultValue={values.medicalReason}
/>
<FormControlLabel
value="yes"
control={<Radio color="primary" />}
label="Yes"
labelPlacement="end"
onChange={handleChange('medicalReason')}
defaultValue={values.medicalReason}
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

FormPersonalDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FormPersonalDetails);
// export default FormPersonalDetails;