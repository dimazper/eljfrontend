import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
// Import React Progress Bar
// import "react-step-progress-bar/styles.css";
// import { ProgressBar, Step } from "react-step-progress-bar";
// Import React Progress Bar
import Accordion from './Accordion';
import ProgressBar from './ProgressBar';
import './LandingPage.css';

import { faCircle, faDotCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';


export class FormUserDetails extends React.Component {
    state = { 
        showing2: false ,
        showing3: false,
        showing4: true,
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
        const { showing2,showing3 } = this.state;
        const showfirst = values.firstName+" "+values.lastName;
        const showsecond = values.firstNameNOTsame+" "+values.lastNameNOTsame;
        const { classes } = this.props;

        
        return (          
            <MuiThemeProvider id='title'> 
                <HeaderForm/>                        
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
                          
                    <div class="card">
                    <h2>Tell us about yourself </h2>
                    <br></br>
                    <br></br>
                    <ProgressBar></ProgressBar>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p class="question">Client Number</p>  
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
            
                    <br></br>

                    <Accordion/> 

                    <p class="question">What is your full name?</p>                
                    
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
                            onChange={handleChange('Title')}
                            defaultValue={values.Mr}
                            />
                            <FormControlLabel
                            value="Mrs"
                            control={<Radio color="primary" />}
                            label="Mrs"
                            labelPlacement="end"
                            />
                            <FormControlLabel
                            value="Ms"
                            control={<Radio color="primary" />}
                            label="Ms"
                            labelPlacement="end"
                            />
                            <FormControlLabel
                            value="Miss"
                            control={<Radio color="primary" />}
                            label="Miss"
                            labelPlacement="end"
                            />
                            <FormControlLabel
                            value="other"
                            control={<Radio color="primary" />}
                            label="Other"
                            labelPlacement="end"
                            />
                        </RadioGroup>
                    </FormControl>
                    </FormGroup>
                </div>

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
                    <TextField 
                    style={styles.input}
                       hintText="Enter Your First Name" //hfgfg
                       floatingLabelText="What is your full name?"
                       onChange={handleChange('firstName')}
                       defaultValue={values.firstName}
                       label="First and middle names?"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
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
                    <br></br>
                    {/* end of question 1 */}

                    {/* question 2 */}
                    <p class="question">Is the name of your birth certificate the same as above?</p>

                    <div className={classes.root}> 
                    <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel
                            value="No"
                            control={<Radio color="primary" />}
                            label="No"
                            labelPlacement="end"
                            />
                            <FormControlLabel className='question' onClick={() => this.setState({ showing2: !showing2 })} control={<Checkbox color="primary"/>} labelPlacement="end"
                            value="Yes"
                            control={<Radio color="primary" />}
                            label="Yes"
                            labelPlacement="end"
                            />
                    { showing2 ? 
                    <div>  
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="Enter Your First Name" //hfgfg
                       floatingLabelText="What is your full name?"
                       onChange={handleChange('firstNameNOTsame')}
                       defaultValue={values.firstNameNOTsame}
                       label="First and middle names?"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
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
           
                    <br></br>

                    <p class="question">Have you ever been known by any other name?</p>
                    <div className={classes.root}> 
                    <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel
                            value="No"
                            control={<Radio color="primary" />}
                            label="No"
                            labelPlacement="end"
                            />
                            <FormControlLabel onClick={() => this.setState({ showing3: !showing3 })} control={<Checkbox color="primary" />} labelPlacement="start"
                            value="Yes"
                            control={<Radio color="primary" />}
                            label="Yes"
                            labelPlacement="end"
                            />
                    { showing3 ? 
                    <div>  
                    <FormGroup aria-label="position" coloumn>
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
                    <br></br>
        
                     <p class="question">What name would you like us to call you?</p>
                     <div className={classes.root}> 
                <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel
                            value="FullName"
                            control={<Radio color="primary" />}
                            label="The same as Full Name"
                            labelPlacement="end"
                            />
                            <FormControlLabel
                            value="NameOnBirthCertificate"
                            control={<Radio color="primary" />}
                            label="The same as birth certificate"
                            labelPlacement="end"
                            />
                            <FormControlLabel
                            value="Other"
                            control={<Radio color="primary" />}
                            label="Other"
                            labelPlacement="end"
                            />
                        </RadioGroup>
                    </FormControl>
                    </FormGroup>
                </div>
                <FormGroup aria-label="position" coloumn>
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
                    <p class="question">What is your date of birth? </p>
                    <FormGroup aria-label="position" coloumn> 
                    <TextField
                        style={styles.input}
                        hintText="DOB" //hfgfg
                        onChange={handleChange('DOB')}
                        defaultValue={values.DOB}
                        label="Date of birth, eg.5/04/1996"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    </FormGroup>
            
                    <br></br>
                    <p class="question">Are you? </p>
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
                            onChange={handleChange('Male')}
                            defaultValue={values.Male}
                            />
                            <FormControlLabel
                            value="Female"
                            control={<Radio color="primary" />}
                            label="Female"
                            labelPlacement="end"
                            onChange={handleChange('Female')}
                            defaultValue={values.Female}
                            />
                            <FormControlLabel
                            value="Gender Diverse"
                            control={<Radio color="primary" />}
                            label="Gender Diverse"
                            labelPlacement="end"
                            onChange={handleChange('GenderDiverse')}
                            defaultValue={values.GenderDiverse}
                            />
                        </RadioGroup>
                    </FormControl>
                    </FormGroup>
                </div>
                    <br></br>

                    <p class="question">Where do you live?</p>
                    <FormGroup aria-label="position" row>
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
                    </FormGroup>
                    <br></br> 

                    <p class="question">Is your mailing address different from where you live?</p>
                    <div className='question'>   
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
                    <br></br> 

                    <p class="question">Do you agree to get emails from us?</p>
                    <div className='question'>   <FormControlLabel onClick={() => this.setState({ showing3: !showing3 })} control={<Checkbox color="primary" />} labelPlacement="start"
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
                    <br></br>  

                    <p class="question">Tick the group(s) you most identify with.</p>
                    <FormGroup aria-label="position" row>
        
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
                        value="Cook Island Māori"
                        control={<Checkbox color="primary" />}
                        onChange={handleChange('title')}

                        label="Cook Island Māori"
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
                    />
                {/* <FormControlLabel
                    value="Other"
                    control={<Checkbox color="primary" />}
                    onChange={handleChange('title')}

                    label="Other"
                    labelPlacement="end"
                /> */}

                <div className='question'>   
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
                <br></br>   

                <p class="question">Do you usually live in New Zealand?</p>                
                    <FormGroup aria-label="position" row>     
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
                    </FormGroup>     
                    
                    <RaisedButton
                       label="Continue" 
                       primary={true}
                       style={styles.button}
                       onClick={this.continue}
                    /><br/><br/>
                    </div>
                    </FormControl><br></br>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing.unit * 3,
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
    },
  });

// const styles = {
//     button: {
//         margin: 15        
//     },
// }

FormUserDetails.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(FormUserDetails);
// export default FormUserDetails;