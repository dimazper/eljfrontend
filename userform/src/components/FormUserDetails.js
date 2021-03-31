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


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() { 
        const { values, handleChange } = this.props;
        return (  
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Early Learning Center Form" /><br></br>
                   
    <FormControl component="fieldset">
      <FormLabel component="legend"><b>1.</b> What is your full name?</FormLabel>
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
          label="Mrs"
          labelPlacement="end"
        />
        <FormControlLabel
          value="ms"
          control={<Checkbox color="primary" />}
          label="Ms"
          labelPlacement="end"
        />
        <FormControlLabel
          value="miss"
          control={<Checkbox color="primary" />}
          label="Miss"
          labelPlacement="end"
        />
        
      </FormGroup>
    </FormControl><br></br>
                    

                    <TextField 
                       hintText="Enter Your First Name" //hfgfg
                       floatingLabelText="First and middle names"
                       onChange={handleChange('firstName')}
                       defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField 
                       hintText="Enter Your Last Name" 
                       floatingLabelText="Surname or family name"
                       onChange={handleChange('lastName')}
                       defaultValue={values.lastName}
                    />
                    <br/><br></br><br></br>
                    <FormLabel component="legend"><b>2. </b>Is the name of your birth certificate the same as above?</FormLabel>

                    <FormControlLabel
          value="no"
          control={<Checkbox color="primary" />}
          label="No"
          labelPlacement="end" 
        />
        <FormControlLabel
          value="yes"
          control={<Checkbox color="primary" />}
          label="Yes"
          labelPlacement="end"
        /><br></br>
                   <TextField 
                       hintText="Enter Your First Name" //hfgfg
                       floatingLabelText="First and middle names"
                       onChange={handleChange('firstNameNOTsame')}
                       defaultValue={values.firstNameNOTsame}
                    />
                    <br/>
                    <TextField 
                       hintText="Enter Your Last Name" 
                       floatingLabelText="Surname or family name"
                       onChange={handleChange('lastNameNOTsame')}
                       defaultValue={values.lastNameNOTsame}
                    />
                    <br/><br></br><br></br>
                    <FormLabel component="legend"><b>3. </b>Have you ever been known by another name?</FormLabel>
                    <FormControlLabel
          value="no"
          control={<Checkbox color="primary" />}
          label="No"
          labelPlacement="end"
        />
        <FormControlLabel
          value="yes"
          control={<Checkbox color="primary" />}
          label="Yes"
          labelPlacement="end"
        /><br></br>
        <TextField 
                       hintText="Other names known by" 
                       floatingLabelText="Other name(s) known by"
                       onChange={handleChange('nameOtherKnown')}
                       defaultValue={values.nameOtherKnown}
                    /><br></br><br></br><br></br>
                     <FormLabel component="legend"><b>4. </b>What name would you like us to call you?</FormLabel>
                    <FormControlLabel
          value="3q1name"
          control={<Checkbox color="primary" />}
          label="The name I wrote in Question 1"
          labelPlacement="end"
        /><br></br>
        <FormControlLabel
          value="3q2name"
          control={<Checkbox color="primary" />}
          label="The name I wrote in Question 2"
          labelPlacement="end"
        /><br></br>
        <TextField 
                       hintText="Name you would like to be referred to" 
                       floatingLabelText="Preferred name"
                       onChange={handleChange('namePrefer')}
                       defaultValue={values.namePrefer}
                    /><br></br>
                    <RaisedButton
                       label="Continue" 
                       primary={true}
                       style={styles.button}
                       onClick={this.continue}
                    />
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