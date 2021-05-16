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



export class FormChecklist extends Component {
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
                    <h1>Information and Checklist</h1>
                    <br></br>
                    <h3>Work and Income may be able to help with assistance towards childcare costs if: </h3>
                    <br>
                    </br>
                    <li>you’re the main caregiver of the child, and </li>
                    <li>your family is on a low or middle income, and </li>
                    <li>you’re a New Zealand citizen or permanent resident, and </li>
                    <li>your child has at least three hours of care a week. </li>
                    <br></br>
                    <p>The childcare assistance available to you will depend on your individual situation and the type of childcare your child is enrolled in. If you have a 3 or 4 year old child, they may be able to get up to 20 hours of early childhood education (20 Hours ECE) funded by the Government. It will depend on the type of childcare service your child attends and whether they offer 20 hours ECE.</p>
                    <br>
                    </br>
                    <h2>Things you need for this application</h2>
                    <br>
                    </br>
                    <p>If you were <b>born in New Zealand</b> bring any 1 of the following forms of identification</p>
                    <li>birth certificate</li>
                    <li>passport</li>
                    <li>driver licence</li>
                    <li>Firearms licence</li>
                    <li>deed poll</li>
                    <p>If you were <b>born in an overseas country</b> bring proof that you have a right to live in New Zealand. eg</p>
                    a citizenship certificate, a New Zealand passport, a passport from another country with residence class visa or proof of permanent residence
                    <li>a citizenship certificate</li>
                    <li>a New Zealand passport</li>
                    <li>a passport from another country with residence class visa or proof of permanent residence</li>
                    <p>If <b>your name has changed</b> bring</p>
                    <li>your marriage certificate</li>
                    <li>deed poll</li>
                    <li>other proof of the name change</li>
                    <p><b>All people applying</b> need to bring at <b>at least 2</b> documents from the following</p>
                    <li>marriage certificate</li>
                    <li>bank statement</li>
                    <li>phone or power account</li>
                    <li>driver licence</li>
                    <p>Other things you must bring</p>
                    <li>Full birth certificates for <b>each dependent child</b> in your care.</li>
                    <li>Your full set of business accounts, if you have your own business.</li>
                    <p>Depending on answers, you may need to bring:</p>
                    <li>Your marriage or civil union certificate, for a current relationship</li>
                    <li>Proof of your wages or salary for the last 52 weeks (for example, payslips, a letter from your employer).</li>
                    <li>Proof of any other before-tax income for the last 52 weeks(for example, interest, child support, rental income, etc).</li>

                  


                    
                    <br></br>



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

FormChecklist.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FormChecklist);
// export default FormPersonalDetails;