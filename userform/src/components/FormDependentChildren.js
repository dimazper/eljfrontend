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


export class FormDependentChildren extends Component {
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
                    <h2>Tell us about your dependent children</h2>
                    <br></br>
                    <br></br>
                    <ProgressBar></ProgressBar>
                    <br></br>
                    <br></br>
                    

                    <p class="question">Who are the dependent children in your care?</p>
                    <p3 class="question">Child 1</p3> 
                    <br></br>
                    <br></br>
                    <p class="question">Full Name</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="Full Name" //hfgfg
                       floatingLabelText="Full Name"
                       onChange={handleChange('Child1fullName')}
                       defaultValue={values.child2child2FullName}
                       label="Full Name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                  </FormGroup>

                    
                    <FormGroup aria-label="position" coloumn>  
                    <p class="question">Date of birth</p>                 
                    <TextField 
                    style={styles.input}
                       hintText="Date of birth" //hfgfg
                       floatingLabelText="Date of birth"
                       onChange={handleChange('Child1DOB')}
                       defaultValue={values.Child1DOB}
                       label="Day/ Month/ Year"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                    <p class="question">Relationship to you</p>  
                    <TextField 
                       hintText="Relationship" 
                       floatingLabelText="Relationship"
                       onChange={handleChange('child1Relationship')}
                       defaultValue={values.child1Relationship}
                       label="Relationship to you"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    />
                    </FormGroup>
                    <br></br>
                    <br></br>

                    <p3 class="question">Child 2</p3> 
                    <br></br>
                    <br></br>
                    <p class="question">Full Name</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="Full Name" //hfgfg
                       floatingLabelText="Full Name"
                       onChange={handleChange('child2FullName')}
                       defaultValue={values.child2FullName}
                       label="Full Name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                  </FormGroup>

                    
                    <FormGroup aria-label="position" coloumn>  
                    <p class="question">Date of birth</p>                 
                    <TextField 
                    style={styles.input}
                       hintText="Date of birth" //hfgfg
                       floatingLabelText="Date of birth"
                       onChange={handleChange('Child2DOB')}
                       defaultValue={values.Child2DOB}
                       label="Day/ Month/ Year"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                    <p class="question">Relationship to you</p>  
                    <TextField 
                       hintText="Relationship" 
                       floatingLabelText="Relationship"
                       onChange={handleChange('child2Relationship')}
                       defaultValue={values.child2Relationship}
                       label="Relationship to you"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    />
                    </FormGroup>
                    <br></br>

                    <p class="question">Which children receive 20 hours ECE from any childcare service?</p>
                    <p3 class="question">Child 1</p3> 
                    <br></br>
                    <br></br>
                    <p class="question">Full Name</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="Full Name" //hfgfg
                       floatingLabelText="Full Name"
                       onChange={handleChange('Child1fullName')}
                       defaultValue={values.child2child2FullName}
                       label="Full Name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
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

const styles = {
    button: {
        margin: 15        
    }
}
 
export default FormDependentChildren;