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
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';



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
                    <h1>Tell us about your dependent children</h1>
                    <br></br>
                    <br></br>
                    <ProgressBar></ProgressBar>
                    <br></br>
                    <br></br>
                    
{/*                 
                    <p class="question">Who are the dependent children in your care?</p> */}
                    <h3>Who are the dependent children in your care?</h3>
                    <p3 class="question">Child 1</p3> 
                    <br></br>
                    <br></br>
                    <p class="question">Full Name</p>
                    <FormGroup aria-label="position" coloumn>
                    <TextField 
                    style={styles.input}
                       hintText="Full Name" //hfgfg
                       floatingLabelText="Full Name"
          
                       onChange={handleChange('childFullName_1')}
                       defaultValue={values.childFullName_1}

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
                       hintText="Date of birth1" //hfgfg
                       floatingLabelText="Date of birth2"
                       onChange={handleChange('childDOB_1')}
                       defaultValue={values.childDOB_1}
                       label=""
                       type='date'
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                    <p class="question">Relationship to you</p>  
                    <TextField 
                       hintText="Relationship" 
                       floatingLabelText="Relationship"
                       onChange={handleChange('childRelationToYou_1')}
                       defaultValue={values.childRelationToYou_1}
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
                       onChange={handleChange('childFullName_2')}
                       defaultValue={values.childFullName_2}
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
                       floatingLabelText=""
                       onChange={handleChange('childDOB_2')}
                       defaultValue={values.childDOB_2}
                       label=""
                       type='date'
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    <br></br>
                    <p class="question">Relationship to you</p>  
                    <TextField 
                       hintText="Relationship" 
                       floatingLabelText="Relationship"
                       onChange={handleChange('childRelationToYou_2')}
                       defaultValue={values.childRelationToYou_2}
                       label="Relationship to you"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    />
                    </FormGroup>
                    <br></br>

                    <h3>Which children receive 20 hours ECE from any childcare service?</h3>
                    {/* <p class="question">Which children receive 20 hours ECE from any childcare service?</p> */}
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
                            label="None of my childrenne of my children"
                            labelPlacement="end"
                            onChange={handleChange('childReceive20Hrs')}
                            defaultValue={values.childReceive20Hrs}
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
                       onChange={handleChange('Child_ECE_ChildName_1')}
                       defaultValue={values.Child_ECE_ChildName_1}
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
                       onChange={handleChange('Child_ECE_Provider_1')}
                       defaultValue={values.Child_ECE_Provider_1}
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
                       onChange={handleChange('Child_ECE_WeekTotal_1')}
                       defaultValue={values.Child_ECE_WeekTotal_1}
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
                       onChange={handleChange('Child_ECE_StartDate_1')}
                       defaultValue={values.Child_ECE_StartDate_1}
                       label=""
                       type='date'
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
                       onChange={handleChange('Child_ECE_ChildName_2')}
                       defaultValue={values.Child_ECE_ChildName_2}
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
                       onChange={handleChange('Child_ECE_Provider_2')}
                       defaultValue={values.Child_ECE_Provider_2}
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
                       onChange={handleChange('Child_ECE_WeekTotal_2')}
                       defaultValue={values.Child_ECE_WeekTotal_2}
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
                       onChange={handleChange('Child_ECE_StartDate_2')}
                       defaultValue={values.Child_ECE_StartDate_2}
                       label=""
                       type='date'
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
                    <h3>Which children do you wish to get Childcare Subsidy for?</h3>
                    {/* <p class="question">Which children do you wish to get Childcare Subsidy for?</p> */}
                    <div className={classes.root}> 
                    <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel onClick={() => this.setState({ showing3: !showing3 })} control={<Checkbox color="primary" />} labelPlacement="start"
                            value="None of my children"
                            control={<Radio color="primary" />}
                            label="None of my children"
                            labelPlacement="end"
                            onChange={handleChange('childareSubsidy')}
                            defaultValue={values.childareSubsidy}
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
                       onChange={handleChange('whichChildCCS_1')}
                       defaultValue={values.whichChildCCS_1}
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
                       onChange={handleChange('whichChildCCS_2')}
                       defaultValue={values.whichChildCCS_2}
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

                    <h3>Which children do you wish to get OSCAR Subsidy for?</h3>
                    {/* <p class="question">Which children do you wish to get OSCAR Subsidy for?</p> */}
                    <div className={classes.root}> 
                    <FormGroup aria-label="position" row>                  
                    <FormControl component="fieldset" className={classes.formControl}>
                        <RadioGroup
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel onClick={() => this.setState({ showing3: !showing3 })} control={<Checkbox color="primary" />} labelPlacement="start"
                            value="None of my children"
                            control={<Radio color="primary" />}
                            label="None of my children"
                            labelPlacement="end"
                            onChange={handleChange('oscarSubsidy')}
                            defaultValue={values.oscarSubsidy}
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
                       onChange={handleChange('whichChildOSCAR_1')}
                       defaultValue={values.whichChildOSCAR_1}
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
                       onChange={handleChange('whichChildOSCAR_2')}
                       defaultValue={values.whichChildOSCAR_2}
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


                    {/* <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={this.back} style={styles.button}>
          Back 
        </Button>

        <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={this.continue} style={styles.button}>
          Continue 
        </Button> */}
                    {/* <RaisedButton
                       label="Back" 
                       primary={false}
                       style={style.button}
                       onClick={this.back}
                    />
                    <RaisedButton
                       label="Continue" 
                      //  primary={true}
                       backgroundColor= '#1cbaa1'
                       style={style.button}
                       onClick={this.continue}
                    /> */}
                    <br/><br/>
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

  FormDependentChildren.propTypes = {
    classes: PropTypes.object.isRequired,
  };

 
export default withStyles(styles)(FormDependentChildren);
// export default FormDependentChildren;
