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


export class FormDependentChildren extends Component {
    state = { 
        showing2: false ,
        showing3: true,
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
                    <div className={classes.root}> 
                    <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel onClick={() => this.setState({ showing3: !showing3 })} control={<Checkbox color="primary" />} labelPlacement="start"
                            value="no"
                            control={<Radio color="primary" />}
                            label="None of my children"
                            labelPlacement="end"
                            />
                               <br></br>
                               
                    { showing3 ? 
                    <div>  
                    <p class="question">Child 1</p> 
                    <p class="question">Child's Name</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="Child's Name" //hfgfg
                       floatingLabelText="Child's Name"
                       onChange={handleChange('ECEChild1Name')}
                       defaultValue={values.ECEChild1Name}
                       label="Child's Name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                  </FormGroup>

                  <p class="question">Which childcare service/s does the child get 20 Hours ECE from?</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="childcare service/s" //hfgfg
                       floatingLabelText="childcare service/s"
                       onChange={handleChange('childcareService')}
                       defaultValue={values.childcareService}
                       label="childcare service/s"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                  </FormGroup>

                  <p class="question">How many hours are received per week in total?</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="How many hours are received per week in total?" //hfgfg
                       floatingLabelText="How many hours are received per week in total?"
                       onChange={handleChange('hours')}
                       defaultValue={values.hours}
                       label="How many hours are received per week in total?"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                  </FormGroup>

                  <p class="question">What date did the 20 Hours ECE start?</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="What date did the 20 Hours ECE start?" //hfgfg
                       floatingLabelText="What date did the 20 Hours ECE start?"
                       onChange={handleChange('date')}
                       defaultValue={values.date}
                       label="Day/ Month/ Year"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                  </FormGroup>

                  <p class="question">Child 2</p> 
                    <p class="question">Child's Name</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="Child's Name" //hfgfg
                       floatingLabelText="Child's Name"
                       onChange={handleChange('ECEChild1Name')}
                       defaultValue={values.ECEChild1Name}
                       label="Child's Name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                  </FormGroup>

                  <p class="question">Which childcare service/s does the child get 20 Hours ECE from?</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="childcare service/s" //hfgfg
                       floatingLabelText="childcare service/s"
                       onChange={handleChange('childcareService')}
                       defaultValue={values.childcareService}
                       label="childcare service/s"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                  </FormGroup>

                  <p class="question">How many hours are received per week in total?</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="How many hours are received per week in total?" //hfgfg
                       floatingLabelText="How many hours are received per week in total?"
                       onChange={handleChange('hours')}
                       defaultValue={values.hours}
                       label="How many hours are received per week in total?"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                  </FormGroup>

                  <p class="question">What date did the 20 Hours ECE start?</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="What date did the 20 Hours ECE start?" //hfgfg
                       floatingLabelText="What date did the 20 Hours ECE start?"
                       onChange={handleChange('date')}
                       defaultValue={values.date}
                       label="Day/ Month/ Year"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                  </FormGroup>



                    </div> : null }
                        </RadioGroup>
                    </FormControl>
                    </FormGroup>
                    </div>

                    <p class="question">Which children do you wish to get Childcare Subsidy for?</p>
                    <div className={classes.root}> 
                    <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel onClick={() => this.setState({ showing3: !showing3 })} control={<Checkbox color="primary" />} labelPlacement="start"
                            value="no"
                            control={<Radio color="primary" />}
                            label="None of my children"
                            labelPlacement="end"
                            />
                               <br></br>
                               
                    { showing3 ? 
                    <div>  
                    <p class="question">Child 1</p> 
                    <p class="question">Child's Name</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="Child's Name" //hfgfg
                       floatingLabelText="Child's Name"
                       onChange={handleChange('subsidyChild1Name')}
                       defaultValue={values.subsidyChild1Name}
                       label="Child's Name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                  </FormGroup>

                  <p class="question">Child 2</p> 
                    <p class="question">Child's Name</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="Child's Name" //hfgfg
                       floatingLabelText="Child's Name"
                       onChange={handleChange('subsidyChild2Name')}
                       defaultValue={values.subsidyChild2Name}
                       label="Child's Name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                  </FormGroup>
                    </div> : null }
                        </RadioGroup>
                    </FormControl>
                    </FormGroup>
                    </div>


                    <p class="question">Which children do you wish to get OSCAR Subsidy for?</p>
                    <div className={classes.root}> 
                    <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel onClick={() => this.setState({ showing3: !showing3 })} control={<Checkbox color="primary" />} labelPlacement="start"
                            value="no"
                            control={<Radio color="primary" />}
                            label="None of my children"
                            labelPlacement="end"
                            />
                               <br></br>
                               
                    { showing3 ? 
                    <div>  
                    <p class="question">Child 1</p> 
                    <p class="question">Child's Name</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="Child's Name" //hfgfg
                       floatingLabelText="Child's Name"
                       onChange={handleChange('oscarChild1Name')}
                       defaultValue={values.oscarChild1Name}
                       label="Child's Name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                  </FormGroup>

                  <p class="question">Child 2</p> 
                    <p class="question">Child's Name</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="Child's Name" //hfgfg
                       floatingLabelText="Child's Name"
                       onChange={handleChange('oscarChild2Name')}
                       defaultValue={values.oscarChild2Name}
                       label="Child's Name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                  </FormGroup>
                    </div> : null }
                        </RadioGroup>
                    </FormControl>
                    </FormGroup>
                    </div>
                    <br/>
                    <RaisedButton
                       label="Back" 
                       primary={false}
                       style={style.button}
                       onClick={this.back}
                    />
                    <RaisedButton
                       label="Continue" 
                       primary={true}
                       style={style.button}
                       onClick={this.continue}
                    />
                    <br/><br/>
                    </div>
                    </FormControl><br></br>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const style = {
    button: {
        margin: 15        
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

  FormDependentChildren.propTypes = {
    classes: PropTypes.object.isRequired,
  };

 
export default withStyles(styles)(FormDependentChildren);
// export default FormDependentChildren;
