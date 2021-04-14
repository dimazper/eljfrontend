import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import HeaderForm from './HeaderForm';
import './Userform.css';
// Import React Progress Bar
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
// Import React Progress Bar



export class FormPersonalDetails extends Component {

    state = { showing: true };
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }; 

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }; 
    
    render() { 
        const { values, handleChange } = this.props;
        const { showing } = this.state;

        return (  
            <MuiThemeProvider>
                <HeaderForm/> 
                <React.Fragment>
                <ProgressBar
                    percent={35}
                    filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                    text="20%"
                    color="green"
                    height="15px"
                />

                    <h2>Tell us about your work, education and activities</h2>

                    <TextField 
                       hintText="Flat/House number" 
                       floatingLabelText="Number"
                       onChange={handleChange('occupation')}
                       defaultValue={values.occupation}
                    />
                    <br/>
                    <TextField 
                       hintText="Enter Your City" 
                       floatingLabelText="City"
                       onChange={handleChange('city')}
                       defaultValue={values.city}
                    />
                    <br/>
                    <TextField 
                       hintText="Enter Your Bio" 
                       floatingLabelText="Bio"
                       onChange={handleChange('bio')}
                       defaultValue={values.bio}
                    />
                    <br/>
                    <RaisedButton
                       label="Back" 
                       primary={false}
                       style={styles.button}
                       onClick={this.back}
                    />
                    <RaisedButton
                       label="Continue" 
                       primary={true}
                       style={styles.button}
                       onClick={this.continue}
                    />
                

                    
                </React.Fragment><br/>
              
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