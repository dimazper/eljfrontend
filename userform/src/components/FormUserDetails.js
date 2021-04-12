import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import { Checkbox } from 'material-ui';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './Userform.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import Progress from './progress'
import BorderLinearProgress from '@material-ui/core/LinearProgress';
import DatePicker from 'react-bootstrap';



import { faCircle, faDotCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export class FormUserDetails extends Component {
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
                <React.Fragment>
                <h1 id='title'>
                    <BorderLinearProgress variant="determinate" value={10} />

                    {/* <FontAwesomeIcon color='#067BEA' icon={faCircle}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/>
                    <FontAwesomeIcon color='lightblue' icon={faDotCircle}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/>
                    <FontAwesomeIcon color='lightblue' icon={faDotCircle}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/>
                    <FontAwesomeIcon color='lightblue' icon={faDotCircle}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/>
                    <FontAwesomeIcon color='lightblue' icon={faDotCircle}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/><FontAwesomeIcon color='lightgrey' icon={faEllipsisH}/>
                    <FontAwesomeIcon color='lightblue' icon={faDotCircle}/> */}

                   
                
           
                </h1>
                    <br></br>
{/* Question 1              */}
      <FormControl component="fieldset">
     
      <TextField 
                       hintText="9 digit Number" //hfgfg
                       floatingLabelText="Work and Income Client Number "
                       onChange={handleChange('clientNumber')}
                       defaultValue={values.clientNumber}
                    />
                    <TextField 
                       hintText="9 digit number" //hfgfg
                       floatingLabelText="IRD Number"
                       onChange={handleChange('irdNumber')}
                       defaultValue={values.irdNumber}
                    /><br></br>
      <p class="question">What is your full name?</p>
              <FormGroup aria-label="position" row>
        
                <FormControlLabel
                    value="mr"
                    control={<Checkbox color="primary" />}
                    label="Mr"
                    labelPlacement="end"
                    onChange={handleChange('title')}
                    defaultValue={values.title}
                />
                <FormControlLabel
                    value="mrs"
                    control={<Checkbox color="primary" />}
                    onChange={handleChange('title')}

                    label="Mrs"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="ms"
                    control={<Checkbox color="primary" />}
                    onChange={handleChange('title')}

                    label="Ms"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="miss"
                    control={<Checkbox color="primary" />}
                    onChange={handleChange('title')}

                    label="Miss"
                    labelPlacement="end"
                />
              </FormGroup>
                <br></br>
                    <FormGroup aria-label="position" row>
                    <TextField 
                       hintText="Enter Your First Name" //hfgfg
                       floatingLabelText="First and middle names"
                       onChange={handleChange('firstName')}
                       defaultValue={values.firstName}
                    />
                    
                    <TextField 
                       hintText="Enter Your Last Name" 
                       floatingLabelText="Surname or family name"
                       onChange={handleChange('lastName')}
                       defaultValue={values.lastName}
                    /></FormGroup>
                    <br/>
                    <br/>
                    <br/>

  {/* end of question 1 */}

  {/* question 2 */}
  <p class="question">Is the name of your birth certificate different to above?</p>
        <div className='question'>   <FormControlLabel className='question' onClick={() => this.setState({ showing2: !showing2 })} control={<Checkbox color="primary"/>} labelPlacement="start"
                        value="no"
                        label="Yes"
                        aria-label="position" row
                />{ showing2 ? <div>  
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
                    /></div> : null }
        </div> 
           
        
                 
        
        
                    <br/><br></br><br></br>
                    <p class="question">Have you ever been known by another name?</p>
                    <div className='question'>   <FormControlLabel onClick={() => this.setState({ showing3: !showing3 })} control={<Checkbox color="primary" />} labelPlacement="start"
                        value="yes"
                        label="Yes"
                        aria-label="position" row
                />{ showing3 ? <div>  
                    <TextField 
                       hintText="Other names known by" 
                       floatingLabelText="Other name(s) known by"
                       onChange={handleChange('nameOtherKnown')}
                       defaultValue={values.nameOtherKnown}
                    /></div> : null }
        </div> 
                    <br></br>
        <br></br><br></br><br></br>
                     <p class="question">What name would you like us to call you?</p>
                     <p onChange={() => this.state.namePrefer.value}></p>
                    <div className='question'><FormControlLabel
          value="3q1name"
          onClick={() => this.setState({ showing4: !showing4, namePrefer: {showfirst} })}
          control={<Checkbox color="white" />}
          label={showfirst}
          labelPlacement="end"
        /><br></br>
        <br></br><br></br>{ showing4 ? <div>
        <TextField 
                       hintText="Name you would like to be referred to" 
                       floatingLabelText="Preferred name"
                       onChange={handleChange('namePrefer')}
                       defaultValue={values.namePrefer}
                    /></div> : null }<br></br>
                    <p class="question">What is your date of birth? </p>
                    <TextField
                        type='date' 
                        floatingLabelText=''
                        onChange={handleChange('dob')}
                        defaultValue={values.namePrefer}/>
                        
                    

                        <p class="question">Are you? </p>
                        <FormGroup aria-label="position" row>
        
        <FormControlLabel
            value="male"
            control={<Checkbox color="primary" />}
            label="Male"
            labelPlacement="end"
            onChange={handleChange('gender')}
            defaultValue={values.gender}
        />
        <FormControlLabel
            value="female"
            control={<Checkbox color="primary" />}
            onChange={handleChange('gender')}

            label="Female"
            labelPlacement="end"
        />
        <FormControlLabel
            value="diverse"
            control={<Checkbox color="primary" />}
            onChange={handleChange('gender')}

            label="Gender diverse"
            labelPlacement="end"
        />
        
      </FormGroup>
                    
                    <RaisedButton
                       label="Continue" 
                       primary={true}
                       style={styles.button}
                       onClick={this.continue}
                       color="red"
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
 
export default FormUserDetails;