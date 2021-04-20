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
import ProgressBar from './ProgressBar';
import './LandingPage.css';

import { faCircle, faDotCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';


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
    
    render() { 
        const { values, handleChange } = this.props;
        const { showing2,showing3,showing4 } = this.state;
        const showfirst = values.firstName+" "+values.lastName;
        const showsecond = values.firstNameNOTsame+" "+values.lastNameNOTsame;


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
                    <h2>Tell us about your work, education and activies</h2>
                    <br></br>
                    <br></br>
                    <ProgressBar></ProgressBar>
                    <br></br>
                    <br></br>
                    

                    <p class="question">Tell us the reason you or your partner (if you have one) are applying for childcare assistance. Tick all that apply</p>                
                    <FormGroup aria-label="position" column>     
                    <FormControlLabel
                    value="work"
                    control={<Checkbox color="primary" />}
                    label="Work"
                    labelPlacement="end"
                    onChange={handleChange('title')}
                    defaultValue={values.title}
                    />
                    <FormControlLabel
                    value="work-related"
                    control={<Checkbox color="primary" />}
                    onChange={handleChange('title')}
                    label="Work-related course or studying"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="activies"
                    control={<Checkbox color="primary" />}
                    onChange={handleChange('title')}
                    label="Doing activities arranged by Work and Income"
                    labelPlacement="end"
                    />
                    <FormControlLabel
                    value="another"
                    control={<Checkbox color="primary" />}
                    onChange={handleChange('title')}
                    label="another reason"
                    labelPlacement="end"
                    />
                    <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="" />
                    </FormGroup>
                    <p class="question">Are you working?</p>                

                    <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" defaultValue="no" row>
        <FormControlLabel
          value="no"
          control={<Radio color="primary" />}
          label="No"
          labelPlacement="start"
        />
        <FormControlLabel
          value="yes"
          control={<Radio color="primary" />}
          label="Yes"
          labelPlacement="start"
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
                       onChange={handleChange('firstName')}
                       defaultValue={values.firstName}
                       label="Employers name"
                       variant="outlined"
                       id="mui-theme-provider-outlined-input"
                    />      
                                    <p>Employers address:</p>
              
                    <FormGroup aria-label="position" column>     

                <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="" />
                        </FormGroup>
                        <p>Employer's phone number:</p>
                    {/* <FormGroup aria-label="position" row> */}
                    <TextField 
        
                       onChange={handleChange('firstName')}
                       defaultValue={values.firstName}
                       label="phone number"
                       variant="outlined"
                       id="mui-theme-provider-outlined-input"
                    />  

                    <p>Employer's email / fax :</p>
                    {/* <FormGroup aria-label="position" row> */}
                    <TextField 
                       onChange={handleChange('firstName')}
                       defaultValue={values.firstName}
                       label="email / fax "
                       variant="outlined"
                       id="mui-theme-provider-outlined-input"
                    />  

                    <p>How many hours a week, <u>including lunch hours</u>, do you spend at work?</p>
                    {/* <FormGroup aria-label="position" row> */}
                    <TextField 
                       onChange={handleChange('firstName')}
                       defaultValue={values.firstName}
                       label="hours at work"
                       variant="outlined"
                       id="mui-theme-provider-outlined-input"
                    />  
                    <p>How many hours a week do you spend travelling <u>from the childcare service to work and returning</u>?</p>
                    {/* <FormGroup aria-label="position" row> */}
                    <TextField 
                       onChange={handleChange('firstName')}
                       defaultValue={values.firstName}
                       label="hours travelling"
                       variant="outlined"
                       id="mui-theme-provider-outlined-input"
                    />  
                    </div> : null }

                        
                        
                       
                    
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

const styles = {
    button: {
        margin: 15        
    }
}
 
export default FormPersonalDetails;