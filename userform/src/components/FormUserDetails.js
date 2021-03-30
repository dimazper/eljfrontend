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
                    <AppBar title="Early Learning Center Form" />
                   
    <FormControl component="fieldset">
      <FormLabel component="legend">What is your full name?</FormLabel>
      <FormGroup aria-label="position" row>
        
        <FormControlLabel
          value="mr"
          control={<Checkbox color="primary" />}
          label="Mr"
          labelPlacement="end"
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
                       floatingLabelText="First Name"
                       onChange={handleChange('firstName')}
                       defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField 
                       hintText="Enter Your Last Name" 
                       floatingLabelText="Last Name"
                       onChange={handleChange('lastName')}
                       defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField 
                       hintText="Enter Your Email" 
                       floatingLabelText="Email"
                       onChange={handleChange('email')}
                       defaultValue={values.email}
                    />
                    <br/>
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