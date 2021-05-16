import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

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
// import "react-step-progress-bar/styles.css";
// import { ProgressBar, Step } from "react-step-progress-bar";
// Import React Progress Bar
import Accordion from './Accordion';
// import ProgressBar from './ProgressBar';
import './LandingPage.css';

import { faCircle, faDotCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';
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



export class FormUserDetails extends React.Component {
    state = { 
        showing2: false ,
        showing3: false,
        showing4: true,
        showing5: false,
        namePrefer:'',
    };

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
      };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() { 
        const { values, handleChange } = this.props;
        const { showing2,showing3, showing5 } = this.state;
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
                    <h1>Tell us about yourself </h1>
                    <br></br>
                    <br></br>
                    <ProgressBar percent={26}>
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
                    <br></br>
                    <br></br>

                    <h3>Client number</h3>
                    {/* <p class="question">Client Number</p>  */}
                    <FormGroup aria-label="position" coloumn>                   
                    <TextField
                        style={styles.input}
                        hintText="9 digit Number" //hfgfg
                        floatingLabelText="Work and Income Client Number "
                        onChange={handleChange('clientNumber')}
                        defaultValue={values.clientNumber}
                        label="Work and Income Client Number"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    </FormGroup>


                    {/* <Accordion/>  */}

                <br></br> 
                <h3>What is your full name?</h3>                 
                {/* <p class="question">What is your full name?</p>   */}
                <div className={classes.root}> 
                <FormGroup aria-label="position" row>              
                    <FormControl component="fieldset" className={classes.formControl}>               
                        <RadioGroup
                            aria-label="gender"
                            name="gender2"
                            
                            className={classes.group}
                            // value={this.state.value}
                            // onChange={this.handleChange}
                        >
                            <FormControlLabel
                            style={styles.input}
                            value="Mr"
                            control={<Radio color="primary" />}
                            label="Mr"
                            labelPlacement="end"
                            onChange={handleChange('title')}
                            defaultValue={values.title}
                            />
                            <FormControlLabel
                            value="Mrs"
                            control={<Radio color="primary" />}
                            label="Mrs"
                            labelPlacement="end"
                            onChange={handleChange('title')}
                            defaultValue={values.title}
                            />
                            <FormControlLabel
                            value="Ms"
                            control={<Radio color="primary" />}
                            label="Ms"
                            labelPlacement="end"
                            onChange={handleChange('title')}
                            defaultValue={values.title}
                            />
                            <FormControlLabel
                            value="Miss"
                            control={<Radio color="primary" />}
                            label="Miss"
                            labelPlacement="end"
                            onChange={handleChange('title')}
                            defaultValue={values.title}
                            />
                            <FormControlLabel
                            value="other"
                            control={<Radio color="primary" />}
                            label="Other"
                            labelPlacement="end"
                            onChange={handleChange('title')}
                            defaultValue={values.title}
                            />
                        

                    {/* <FormControlLabel                  
                    value="mr"
                    control={<Radio color="primary" />}
                    label="Mr"
                    labelPlacement="end"
                    onChange={handleChange('title')}
                    defaultValue={values.title}
                    />
                    <FormControlLabel
                    value="mrs"
                    control={<Radio color="primary" />}
                    onChange={handleChange('title')}
                    label="Mrs"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="ms"
                    control={<Radio color="primary" />}
                    onChange={handleChange('title')}
                    label="Ms"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="miss"
                    control={<Radio color="primary" />}
                    onChange={handleChange('title')}
                    label="Miss"
                    labelPlacement="end"
                    /> */}

                    
                    <FormGroup aria-label="position" coloumn>
                    <p class="question">First and middle names</p> 
                    <TextField 
                    style={styles.input}
                       hintText="Enter Your First Name" //hfgfg
                       floatingLabelText="What is your full name?"
                       onChange={handleChange('firstName')}
                       defaultValue={values.firstName}
                       label="First and middle names"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                    <p class="question">Surname or family name</p> 
                    <TextField 
                       hintText="Enter Your Last Name" 
                       floatingLabelText="Surname or family name"
                       onChange={handleChange('lastName')}
                       defaultValue={values.lastName}
                       label="Surname or family name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    />
                    </FormGroup>
                    </RadioGroup>
                    </FormControl>
                    </FormGroup>
                </div>
                    <br></br>
                    {/* end of question 1 */}

                    {/* question 2 */}
                    <h3>Is the name of your birth certificate the same as above?</h3>  
                    {/* <p class="question">Is the name of your birth certificate the same as above?</p> */}

                    <div className={classes.root}> 
                    <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            className={classes.group}
                            aria-label="gender"
                            // name="position"
                            defaultValue="Yes"
                            // className={classes.group}
                            // value={this.state.value}
                            // onChange={this.handleChange}
                        >
                            <FormControlLabel
                            style={styles.input}
                            value="Yes"
                            control={<Radio color="primary" />}
                            label="Yes"
                            labelPlacement="end"
                            onChange={handleChange('nameOnBirthCert')}
                            defaultValue={values.nameOnBirthCert}
                            />
                            <FormControlLabel className='question' onClick={() => this.setState({ showing2: !showing2 })} control={<Checkbox color="primary"/>} labelPlacement="end"
                            value="No"
                            control={<Radio color="primary" />}
                            label="No"
                            labelPlacement="end"
                            onChange={handleChange('nameOnBirthCert')}
                            defaultValue={values.nameOnBirthCert}
                            />
                    { showing2 ? 
                    <div>
                     
                    <FormGroup aria-label="position" coloumn>
                    <p class="question">First and middle names</p> 
                    <TextField 
                    style={styles.input}
                       hintText="Enter Your First Name" //hfgfg
                       floatingLabelText="What is your full name?"
                       onChange={handleChange('firstNameNOTsame')}
                       defaultValue={values.firstNameNOTsame}
                       label="First and middle names"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                    <p class="question">Surname or family name</p> 
                    <TextField 
                       hintText="Enter Your Last Name" 
                       floatingLabelText="Surname or family name"
                       onChange={handleChange('lastNameNOTsame')}
                       defaultValue={values.lastNameNOTsame}
                       label="Surname or family name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    />
                    </FormGroup>
                    </div> : null }
                        </RadioGroup>
                    </FormControl>
                    </FormGroup>
                </div>

{/* 
                    <div className='question'>
                    <FormControlLabel
                        value="no"
                        control={<Radio color="primary" />}
                        onChange={handleChange('title')}
                        label="No"
                        labelPlacement="end"
                    />  
                    <FormControlLabel className='question' onClick={() => this.setState({ showing2: !showing2 })} control={<Checkbox color="primary"/>} labelPlacement="start"
                        value="no"
                        label="Yes"
                        aria-label="position" row
                        labelPlacement="end"
                        control={<Radio color="primary" />}
                    />
                    { showing2 ? 
                    <div>  
                    <TextField class="question"
                    hintText="Enter Your First Name" //hfgfg
                    floatingLabelText="First and middle names"
                    onChange={handleChange('firstNameNOTsame')}
                    defaultValue={values.firstNameNOTsame}
                    />              
                    <TextField 
                    hintText="Enter Your Last Name" 
                    floatingLabelText="Surname or family name"
                    onChange={handleChange('lastNameNOTsame')}
                    defaultValue={values.lastNameNOTsame}
                    />
                    </div> : null }
                    </div>  */}
           
                    {/* <br></br> */}
                    <h3>Have you ever been known by any other name?</h3> 
                    {/* <p class="question">Have you ever been known by any other name?</p> */}
                    <div className={classes.root}> 
                    <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                            defaultValue="No"

                        >
                            <FormControlLabel
                            value="No"
                            control={<Radio color="primary" />}
                            label="No"
                            labelPlacement="end"
                            onChange={handleChange('knownByOtherName')}
                            defaultValue={values.knownByOtherName}
                            />
                            <FormControlLabel onClick={() => this.setState({ showing3: !showing3 })} control={<Checkbox color="primary" />} labelPlacement="start"
                            value="Yes"
                            control={<Radio color="primary" />}
                            label="Yes"
                            labelPlacement="end"
                            onChange={handleChange('knownByOtherName')}
                            defaultValue={values.knownByOtherName}
                            />
                    { showing3 ? 
                    <div>  
                    <FormGroup aria-label="position" coloumn>
                    <p class="question">Write them all out below</p> 
                    <TextField 
                    style={styles.input}
                       hintText="1" //hfgfg
                       floatingLabelText="1"
                       onChange={handleChange('nameOtherKnown')}
                       defaultValue={values.nameOtherKnown}
                       label="1."
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                    <TextField 
                       hintText="2" 
                       floatingLabelText="2"
                       onChange={handleChange('nameOtherKnown')}
                       defaultValue={values.nameOtherKnown}
                       label="2."
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    />
                    </FormGroup>
                    </div> : null }
                        </RadioGroup>
                    </FormControl>
                    </FormGroup>
                </div>

                    {/* <div className='question'>   
                    <FormControlLabel onClick={() => this.setState({ showing3: !showing3 })} control={<Checkbox color="primary" />} labelPlacement="start"
                        value="yes"
                        label="Yes"
                        aria-label="position" row
                        labelPlacement="end"
                    />
                    { showing3 ? 
                    <div>  
                    <TextField 
                       hintText="Other names known by" 
                       floatingLabelText="Other name(s) known by"
                       onChange={handleChange('nameOtherKnown')}
                       defaultValue={values.nameOtherKnown}
                    /></div> : null }
                    </div>  */}
                    {/* <br></br> */}
                    <h3>What name would you like us to call you?</h3>
                     {/* <p class="question">What name would you like us to call you?</p> */}
                     <div className={classes.root}> 
                <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel
                            value="The same as Full Name"
                            control={<Radio color="primary" />}
                            label="The same as Full Name"
                            labelPlacement="end"
                            onChange={handleChange('nameToCall')}
                            defaultValue={values.nameToCall}
                            />
                            <FormControlLabel
                            value="The same as birth certificate"
                            control={<Radio color="primary" />}
                            label="The same as birth certificate"
                            labelPlacement="end"
                            onChange={handleChange('nameToCall')}
                            defaultValue={values.nameToCall}
                            />
                            <FormControlLabel onClick={() => this.setState({ showing3: !showing3 })} control={<Checkbox color="primary" />} labelPlacement="start"
                            value="Other"
                            control={<Radio color="primary" />}
                            label="Other"
                            labelPlacement="end"
                            onChange={handleChange('nameToCall')}
                            defaultValue={values.nameToCall}
                            />
                        
                { showing3 ?
                <div>
                <FormGroup aria-label="position" coloumn>
                <p class="question">Write the full name</p> 
                    <TextField 
                    style={styles.input}
                       hintText="NameCall" //hfgfg
                       onChange={handleChange('namePrefer')}
                       defaultValue={values.namePrefer}
                       label="Write the full name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    </FormGroup>
                        </div> : null }
                        </RadioGroup>
                    </FormControl>
                    </FormGroup>                  
                </div>
                     {/* <p onChange={() => this.state.namePrefer.value}></p>
                    <div className='question'>
                    <FormControlLabel
                        value="3q1name"
                        onClick={() => this.setState({ showing4: !showing4, namePrefer: {showfirst} })}
                        control={<Checkbox color="white" />}
                        label={showfirst}
                        labelPlacement="end"
                    />
                    { showing4 ?
                    <div>
                        <TextField 
                        hintText="Name you would like to be referred to" 
                        floatingLabelText="Preferred name"
                        onChange={handleChange('namePrefer')}
                        defaultValue={values.namePrefer}
                        />
                    </div> : null }
                    </div>     */}
                    <br></br>
                    <h3>What date were you born? </h3>
                    {/* <p class="question">What date were you born? </p> */}
                    <FormGroup aria-label="position" coloumn> 
                    <TextField
                        type='date'
                        hintText="" //hfgfg
                        onChange={handleChange('dob')}
                        defaultValue={values.dob}
                        label=""
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    </FormGroup>
            
                    <br></br>
                    <h3>Are you? </h3>
                    {/* <p class="question">Are you? </p> */}
                    <div className={classes.root}> 
                <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel
                            value="Male"
                            control={<Radio color="primary" />}
                            label="Male"
                            labelPlacement="end"
                            onChange={handleChange('gender')}
                            defaultValue={values.gender}
                            />
                            <FormControlLabel
                            value="Female"
                            control={<Radio color="primary" />}
                            label="Female"
                            labelPlacement="end"
                            onChange={handleChange('gender')}
                            defaultValue={values.gender}
                            />
                            <FormControlLabel
                            value="Gender Diverse"
                            control={<Radio color="primary" />}
                            label="Gender Diverse"
                            labelPlacement="end"
                            onChange={handleChange('gender')}
                            defaultValue={values.gender}
                            />
                        </RadioGroup>
                    </FormControl>
                    </FormGroup>
                </div>
                    {/* <br></br> */}
                    <h3>What is your Inland Revenue tax number?</h3>
                    {/* <p class="question">What is your Inland Revenue tax number?</p> */}
                    <FormGroup aria-label="position" coloumn> 
                    <TextField
                        type='text'
                        hintText="IR number" //hfgfg
                        onChange={handleChange('irdNumber')}
                        defaultValue={values.irdNumber}
                        label="Enter your Inland Revenue tax number"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    </FormGroup>
                    <br></br>
                    <h3>Where do you live?</h3>
                    {/* <p class="question">Where do you live?</p> */}
                    <FormGroup aria-label="position" coloumn>
                    <p class="question">Flat/House number</p>
                    <TextField 
                    style={styles.input}
                       hintText="Flat/House number" //hfgfg
                       floatingLabelText="Flat/House number"
                       onChange={handleChange('flatHouseNum')}
                       defaultValue={values.flatHouseNum}
                       label="Flat/House number"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <p class="question">Street Name</p>
                    <TextField 
                       hintText="Street Name" 
                       floatingLabelText="Street Name"
                       onChange={handleChange('streetName')}
                       defaultValue={values.streetName}
                       label="Street name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    />
                    </FormGroup>
                    <FormGroup aria-label="position" coloumn>
                    <p class="question">Suburb</p>
                    <TextField 
                    style={styles.input}
                       hintText="Suburb" //hfgfg
                       floatingLabelText="Suburb"
                       onChange={handleChange('suburb')}
                       defaultValue={values.suburb}
                       label="Suburb"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <p class="question">Town/City</p>
                    <TextField 
                       hintText="Town/City" 
                       floatingLabelText="Town/City"
                       onChange={handleChange('townCity')}
                       defaultValue={values.townCity}
                       label="Town/City"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    />
                    </FormGroup>
                    <br></br>



                    {/* <FormGroup aria-label="position" row>
                    <TextField 
                       hintText="Enter your flat number" //hfgfg
                       floatingLabelText="Flat/ House Number "
                       onChange={handleChange('clientNumber')}
                       defaultValue={values.clientNumber}
                    />
                    <TextField 
                       hintText="Enter your street name" //hfgfg
                       floatingLabelText="Street Name"
                       onChange={handleChange('irdNumber')}
                       defaultValue={values.irdNumber}
                    />
                    </FormGroup>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                       hintText="Enter your suburb" //hfgfg
                       floatingLabelText="Suburb "
                       onChange={handleChange('clientNumber')}
                       defaultValue={values.clientNumber}
                    />
                    <TextField 
                       hintText="Enter your town/ city" //hfgfg
                       floatingLabelText="Town/ City"
                       onChange={handleChange('irdNumber')}
                       defaultValue={values.irdNumber}
                    />
                    </FormGroup> */}
                    <br></br> 
                    <h3>Is your mailing address different from where you live?</h3>
                    {/* <p class="question">Is your mailing address different from where you live?</p> */}
                    <div className={classes.root}> 
                    <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                            defaultValue="No"

                        >
                            <FormControlLabel
                            value="No"
                            control={<Radio color="primary" />}
                            label="No"
                            labelPlacement="end"
                            onChange={handleChange('mailaddress')}
                            defaultValue={values.mailaddress}
                            />
                            <FormControlLabel onClick={() => this.setState({ showing3: !showing3 })} control={<Checkbox color="primary" />} labelPlacement="start"
                            value="Yes"
                            control={<Radio color="primary" />}
                            label="Yes"
                            labelPlacement="end"
                            onChange={handleChange('mailaddress')}
                            defaultValue={values.mailaddress}
                            />
                    { showing3 ? 
                    <div>  
                    <FormGroup aria-label="position" coloumn>
                    <p class="question">Tell us your mailing address</p>
                    <TextField 
                    style={styles.input}
                       hintText="1" //hfgfg
                       floatingLabelText="1"
                       onChange={handleChange('mailingAddr')}
                       defaultValue={values.mailingAddr}
                       label="Mailing address"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />

                    </FormGroup>
                    </div> : null }
                        </RadioGroup>
                    </FormControl>
                    </FormGroup>
                    </div>

                    <h3>How else can we contact you?</h3>
                    {/* <p class="question">How else can we contact you?</p> */}
                    <FormGroup aria-label="position" coloumn>
                    <p class="question">Home phone</p>
                    <TextField 
                    style={styles.input}
                       hintText="Home phone" //hfgfg
                       floatingLabelText="Home phone"
                       onChange={handleChange('homePhone')}
                       defaultValue={values.homePhone}
                       label="Home phone"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    {/* <br></br> */}
                    <p class="question">Mobile phone</p>
                    <TextField 
                       hintText="Mobile phone" 
                       floatingLabelText="Mobile phone"
                       onChange={handleChange('mobPhone')}
                       defaultValue={values.mobPhone}
                       label="Mobile phone"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    />
                    {/* <br></br> */}
                    <p class="question">Other phone</p>
                    <TextField 
                       hintText="Other phone" 
                       floatingLabelText="Other phone"
                       onChange={handleChange('otherPhone')}
                       defaultValue={values.otherPhone}
                       label="Other phone"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    />
                    </FormGroup>



                    {/* <div className='question'>   
                    <FormControlLabel className='question' onClick={() => this.setState({ showing2: !showing2 })} control={<Checkbox color="primary"/>} labelPlacement="start"
                        value="no"
                        label="Yes"
                        aria-label="position" row
                        labelPlacement="end"
                    />{ showing2 ? <div>  
                    <TextField class="question"
                    hintText="Tell us your mailing address" //hfgfg
                    floatingLabelText="Mailing address"
                    onChange={handleChange('firstNameNOTsame')}
                    defaultValue={values.firstNameNOTsame}
                    />
                    </div> : null }
                    </div>          
                    <br></br>

                    <p class="question">How else can we contact you?</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                       hintText="Enter your home phone" //hfgfg
                       floatingLabelText="Home phone "
                       onChange={handleChange('clientNumber')}
                       defaultValue={values.clientNumber}
                    />
                    <TextField 
                       hintText="Enter your mobile phone" //hfgfg
                       floatingLabelText="Mobile phone"
                       onChange={handleChange('irdNumber')}
                       defaultValue={values.irdNumber}
                    />
                    </FormGroup>

                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                       hintText="Enter your other phone" //hfgfg
                       floatingLabelText="Other phone "
                       onChange={handleChange('clientNumber')}
                       defaultValue={values.clientNumber}
                    />
                    </FormGroup>
                    <br></br>  */}
                    <br></br>
                    <h3>Do you agree to get emails from us?</h3>
                    {/* <p class="question">Do you agree to get emails from us?</p> */}
                    <div className={classes.root}> 
                    <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            className={classes.group}
                            // value={this.state.value}
                            // onChange={this.handleChange}
                        >
                            <FormControlLabel
                            value="No"
                            control={<Radio color="primary" />}
                            label="No"
                            labelPlacement="end"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            />
                            <FormControlLabel
                            value="I don't have an email address"
                            control={<Radio color="primary" />}
                            label="I don't have an email address"
                            labelPlacement="end"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            />
                            <FormControlLabel onClick={() => this.setState({ showing3: !showing3 })} control={<Checkbox color="primary" />} labelPlacement="start"
                            value="Yes"
                            control={<Radio color="primary" />}
                            label="Yes"
                            labelPlacement="end"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            />
                    { showing3 ? 
                    <div>  
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="Tell us your email address" //email doesnt exist in database - need to add
                       floatingLabelText="Tell us your email address"
                       onChange={handleChange('getEmails')}
                       defaultValue={values.getEmails}
                       label="Tell us your email address"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    </FormGroup>
                    </div> : null }
                        </RadioGroup>
                    </FormControl>
                    </FormGroup>
                    </div>

                    {/* <div className='question'>   <FormControlLabel onClick={() => this.setState({ showing3: !showing3 })} control={<Checkbox color="primary" />} labelPlacement="start"
                        value="yes"
                        label="Yes"
                        aria-label="position" row
                        labelPlacement="end"
                    />{ showing3 ? <div>  
                    <TextField 
                       hintText="Tell us your mailing address" 
                       floatingLabelText="Mailing address"
                       onChange={handleChange('nameOtherKnown')}
                       defaultValue={values.nameOtherKnown}
                    /></div> : null }
                    </div> 
                    <br></br>   */}
                    <h3>Tick the group(s) you most identify with.</h3>
                    {/* <p class="question">Tick the group(s) you most identify with.</p> */}
                    <div className={classes.root}> 
                <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            aria-label="gender"
                            name="gender2"
                            className={classes.group}
                            // value={this.state.value}
                            // onChange={this.handleChange}
                        >
                            <FormControlLabel
                            style={styles.input}
                            value="Māori"
                            control={<Checkbox color="primary" />}
                            label="Māori"
                            labelPlacement="end"
                            onChange={handleChange('ethnicGroup')}
                            defaultValue={values.ethnicGroup}
                            
                            />
                            <FormControlLabel
                            value="New Zealand European"
                            control={<Checkbox color="primary" />}
                            label="New Zealand European"
                            labelPlacement="end"
                            onChange={handleChange('ethnicGroup')}
                            defaultValue={values.ethnicGroup}
                            />
                            <FormControlLabel
                            value="Other European"
                            control={<Checkbox color="primary" />}
                            label="Other European"
                            labelPlacement="end"
                            onChange={handleChange('ethnicGroup')}
                            defaultValue={values.ethnicGroup}
                            />
                            <FormControlLabel
                            value="Cook Island Māori"
                            control={<Checkbox color="primary" />}
                            label="Cook Island Māori"
                            labelPlacement="end"
                            onChange={handleChange('ethnicGroup')}
                            defaultValue={values.ethnicGroup}
                            />
                            <FormControlLabel
                            value="Niuean"
                            control={<Checkbox color="primary" />}
                            label="Niuean"
                            labelPlacement="end"
                            onChange={handleChange('ethnicGroup')}
                            defaultValue={values.ethnicGroup}
                            />
                            <FormControlLabel
                            style={styles.input}
                            value="Tokelauan"
                            control={<Checkbox color="primary" />}
                            label="Tokelauan"
                            labelPlacement="end"
                            onChange={handleChange('ethnicGroup')}
                            defaultValue={values.ethnicGroup}
                            
                            />
                            <FormControlLabel
                            value="Samoan"
                            control={<Checkbox color="primary" />}
                            label="Samoan"
                            labelPlacement="end"
                            onChange={handleChange('ethnicGroup')}
                            defaultValue={values.ethnicGroup}
                            />
                            <FormControlLabel
                            value="Tongan"
                            control={<Checkbox color="primary" />}
                            label="Tongan"
                            labelPlacement="end"
                            onChange={handleChange('ethnicGroup')}
                            defaultValue={values.ethnicGroup}
                            />
                            <FormControlLabel
                            value="Indian"
                            control={<Checkbox color="primary" />}
                            label="Indian"
                            labelPlacement="end"
                            onChange={handleChange('ethnicGroup')}
                            defaultValue={values.ethnicGroup}
                            />
                            <FormControlLabel
                            value="Chinese"
                            control={<Checkbox color="primary" />}
                            label="Chinese"
                            labelPlacement="end"
                            onChange={handleChange('ethnicGroup')}
                            defaultValue={values.ethnicGroup}
                            />
                            <FormControlLabel
                            value="Don’t want to answer"
                            control={<Checkbox color="primary" />}
                            label="Don’t want to answer"
                            labelPlacement="end"
                            onChange={handleChange('ethnicGroup')}
                            defaultValue={values.ethnicGroup}
                            />
                            <FormControlLabel onClick={() => this.setState({ showing3: !showing3 })} control={<Checkbox color="primary" />} labelPlacement="start"
                            value="Other"
                            control={<Checkbox color="primary" />}
                            label="Other"
                            labelPlacement="end"
                            onChange={handleChange('ethnicGroup')}
                            defaultValue={values.ethnicGroup}
                            />
                            <br></br>
                            { showing3 ? 
                    <div>  
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="Please write below" //hfgfg
                       floatingLabelText="Please write below"
                       onChange={handleChange('ethnicity')}
                       defaultValue={values.ethnicity}
                       label="Please write below"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    </FormGroup>
                    </div> : null }
                        </RadioGroup>
                    </FormControl>
                    </FormGroup>
                </div>




                    {/* <FormGroup aria-label="position" row>
        
                    <FormControlLabel
                        value="Maori"
                        control={<Checkbox color="primary" />}
                        label="Maori"
                        labelPlacement="end"
                        onChange={handleChange('title')}
                        defaultValue={values.title}
                    />
                    <FormControlLabel
                        value="New Zealand European"
                        control={<Checkbox color="primary" />}
                        onChange={handleChange('title')}

                        label="New Zealand European"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Other European"
                        control={<Checkbox color="primary" />}
                        onChange={handleChange('title')}

                        label="Other European"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Cook Island Māori"
                        control={<Checkbox color="primary" />}
                        onChange={handleChange('title')}

                        label="Cook Island Māori"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                        value="Niuean"
                        control={<Checkbox color="primary" />}
                        label="Niuean"
                        labelPlacement="end"
                        onChange={handleChange('title')}
                        defaultValue={values.title}
                    />
                    <FormControlLabel
                        value="Tokelauan"
                        control={<Checkbox color="primary" />}
                        onChange={handleChange('title')}

                        label="Tokelauan"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Samoan"
                        control={<Checkbox color="primary" />}
                        onChange={handleChange('title')}

                        label="Samoan"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Tongan"
                        control={<Checkbox color="primary" />}
                        onChange={handleChange('title')}

                        label="Tongan"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                        value="Indian"
                        control={<Checkbox color="primary" />}
                        label="Indian"
                        labelPlacement="end"
                        onChange={handleChange('title')}
                        defaultValue={values.title}
                    />
                    <FormControlLabel
                        value="Chinese"
                        control={<Checkbox color="primary" />}
                        onChange={handleChange('title')}

                        label="Chinese"
                        labelPlacement="end"
                />
                    <FormControlLabel
                        value="Don’t want to answer"
                        control={<Checkbox color="primary" />}
                        onChange={handleChange('title')}

                        label="Don’t want to answer"
                        labelPlacement="end"
                    /> */}
                {/* <FormControlLabel
                    value="Other"
                    control={<Checkbox color="primary" />}
                    onChange={handleChange('title')}

                    label="Other"
                    labelPlacement="end"
                /> */}

                {/* <div className='question'>   
                <FormControlLabel className='question' onClick={() => this.setState({ showing2: !showing2 })} control={<Checkbox color="primary"/>} labelPlacement="start"
                        value="no"
                        label="Other"
                        aria-label="position" row
                        labelPlacement="end"
                />{ showing2 ? <div>  
                    <TextField class="question"
                    hintText="Please write below" //hfgfg
                    floatingLabelText="Please write below"
                    onChange={handleChange('firstNameNOTsame')}
                    defaultValue={values.firstNameNOTsame}
                 />
                    </div> : null }
                </div>                
              </FormGroup>
                <br></br>    */}
                <h3>Do you usually live in New Zealand?</h3>
                {/* <p class="question">Do you usually live in New Zealand?</p>  */}
                <div className={classes.root}> 
                <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            aria-label="gender"
                            name="gender2"
                            className={classes.group}
                            // value={this.state.value}
                            // onChange={this.handleChange}
                        >
                            <FormControlLabel
                            style={styles.input}
                            value="No"
                            control={<Radio color="primary" />}
                            label="No"
                            labelPlacement="end"
                            onChange={handleChange('usuallyNZ')}
                            defaultValue={values.usuallyNZ}
                            
                            />
                            <FormControlLabel
                            value="Yes"
                            control={<Radio color="primary" />}
                            label="Yes"
                            labelPlacement="end"
                            onChange={handleChange('usuallyNZ')}
                            defaultValue={values.usuallyNZ}
                            />
                        </RadioGroup>
                    </FormControl>
                    </FormGroup>
                </div>

                    {/* <FormGroup aria-label="position" row>     
                    <FormControlLabel
                    value="Yes"
                    control={<Checkbox color="primary" />}
                    label="Yes"
                    labelPlacement="end"
                    onChange={handleChange('title')}
                    defaultValue={values.title}
                    />
                    <FormControlLabel
                    value="No"
                    control={<Checkbox color="primary" />}
                    onChange={handleChange('title')}
                    label="No"
                    labelPlacement="end"
                    />
                    </FormGroup>      */}

                    <h3>What best describes your residence status in New Zealand? Tick only one box.</h3>
                    {/* <p class="question">What best describes your residence status in New Zealand? Tick only one box.</p> */}

                    <div className={classes.root}> 
                    <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel
                            value="NZ Citizen"
                            control={<Radio color="primary" />}
                            label="New Zealand citizen by birth"
                            labelPlacement="end"
                            onChange={handleChange('residenceStatus')}
                            defaultValue={values.residenceStatus}
                            />
                            <FormControlLabel className='question' onClick={() => this.setState({ showing2: !showing2 })} control={<Checkbox color="primary"/>} labelPlacement="end"
                            value="Granted Citizenship"
                            control={<Radio color="primary" />}
                            label="Granted New Zealand citizenship"
                            labelPlacement="end"
                            onChange={handleChange('residenceStatus')}
                            defaultValue={values.residenceStatus}
                            />
                            { showing2 ? 
                            <div>  
                            <FormGroup aria-label="position" coloumn>
                            <TextField 
                            style={styles.input}
                            type='date'
                            hintText="Date citizenship granted" //hfgfg
                            floatingLabelText="Date citizenship granted"
                            onChange={handleChange('dateGranted')}
                            defaultValue={values.dateGranted}
                            label="Date citizenship granted"
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                />
                            </FormGroup>
                            </div> : null }

                            <FormControlLabel className='question' onClick={() => this.setState({ showing5: !showing5 })} control={<Checkbox color="primary"/>} labelPlacement="end"
                            value="Granted permanent residency"
                            control={<Radio color="primary" />}
                            label="Granted permanent residency"
                            labelPlacement="end"
                            onChange={handleChange('residenceStatus')}
                            defaultValue={values.residenceStatus}
                            />
                            { showing5 ? 
                            <div>  
                            <FormGroup aria-label="position" coloumn>
                            <TextField 
                            style={styles.input}
                            type='date'
                            hintText="Date permanent residence granted" //hfgfg
                            floatingLabelText="Date permanent residence granted"
                            onChange={handleChange('dateGranted')}
                            defaultValue={values.dateGranted}
                            label="Date permanent residence granted"
                                variant="outlined"
                                id="mui-theme-provider-outlined-input"
                                />
                            </FormGroup>
                            </div> : null }

                            <FormControlLabel className='question' onClick={() => this.setState({ showing3: !showing3 })} control={<Checkbox color="primary"/>} labelPlacement="end"
                            value="Other"
                            control={<Radio color="primary" />}
                            label="Other"
                            labelPlacement="end"
                            onChange={handleChange('residenceStatus')}
                            defaultValue={values.residenceStatus}
                            />
                    { showing3 ? 
                    <div>  
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                    hintText="What is your residence status?" //hfgfg
                    floatingLabelText="What is your residence status?"
                    onChange={handleChange('residenceStatus')}
                    defaultValue={values.residenceStatus}
                    label="What is your residence status?"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    </FormGroup>
                    </div> : null }
                        </RadioGroup>
                    </FormControl>
                    </FormGroup>
                    </div>
                    <h3>When did you arrive in New Zealand? </h3>
                    {/* <p class="question">When did you arrive in New Zealand? </p> */}
                    <FormGroup aria-label="position" coloumn> 
                    <TextField
                        style={styles.input}
                        type='date'
                        hintText="" //hfgfg
                        onChange={handleChange('dateArrived')}
                        defaultValue={values.dateArrived}
                        label=""
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    </FormGroup>
                    <br></br>
                    <h3>What country were you born in? </h3>
                    {/* <p class="question">What country were you born in?</p> */}
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="country" //hfgfg
                       floatingLabelText="country"
                       onChange={handleChange('countryOfBirth')}
                       defaultValue={values.countryOfBirth}
                       label="Enter the country"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    </FormGroup>
                    <br></br>
                    <br></br>

        {/* <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="Add"
          className={classes.margin}
          onClick={this.back} 
          style={styles.button}
        >
          Back
        </Fab> */}
        <div class="column">
        <div class="cardButtonRight">
        </div>
        </div>

        <div class="column">
        <div class="cardButtonRight">
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
          onClick={this.continue} 
          style={styles.button}
        >
          Next
        </Fab>
        </div>
        </div>
                    {/* <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={this.continue} style={styles.button}>
          Continue 
        </Button>                   */}
                    {/* <RaisedButton
                       label="Continue"
                    //    primary={true}
                       backgroundColor= '#1cbaa1'
                       borderColor='#007bff'
                       style={styles.button}
                       onClick={this.continue}
                       variant="contained"
                    /> */}
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


// const styles = theme => ({
//     root: {
//       display: 'flex',
//     },
//     formControl: {
//       margin: theme.spacing.unit * 3,
//     },
//     group: {
//       margin: `${theme.spacing.unit}px 0`,
//     },
//   });

const styles = {
    button: {
        margin: 15        
    },
}



FormUserDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(FormUserDetails);
// export default FormUserDetails;