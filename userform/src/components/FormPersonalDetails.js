import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import BorderLinearProgress from '@material-ui/core/LinearProgress';
// import { Checkbox } from 'material-ui';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RaisedButton from 'material-ui/RaisedButton';



export class FormPersonalDetails extends Component {

    state = { showing: false 
    
    
    };
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
                
                <React.Fragment>
                <BorderLinearProgress variant="determinate" value={20} />
                    
                    
                    <TextField 
                       hintText="Flat/House number" 
                       floatingLabelText="Number"
                       onChange={handleChange('flatHouseNum')}
                       defaultValue={values.flatHouseNum}
                    />
                    <br/>
                    <TextField 
                       hintText="Street Name" 
                       floatingLabelText="streetName"
                       onChange={handleChange('streetName')}
                       defaultValue={values.streetName}
                    />
                    <br/>
                    <TextField 
                       hintText="Suburb" 
                       floatingLabelText="suburb"
                       onChange={handleChange('suburb')}
                       defaultValue={values.suburb}
                    />
                       <TextField 
                       hintText="Town / City" 
                       floatingLabelText="townCity"
                       onChange={handleChange('townCity')}
                       defaultValue={values.townCity}
                    />
                    <br/>
                    <p >Is your mailing address different from where you live?</p>
                    <div >   <FormControlLabel onClick={() => this.setState({ showing: !showing })} control={<Checkbox color="primary" />} labelPlacement="start"
                        value="yes"
                        label="Yes"
                        aria-label="position" row
                />{ showing ? <div>  
                     <TextField 
                       hintText="Flat/House number" 
                       floatingLabelText="Number"
                       onChange={handleChange('flatHouseNum')}
                       defaultValue={values.flatHouseNum}
                    />
                    <br/>
                    <TextField 
                       hintText="Street Name" 
                       floatingLabelText="streetName"
                       onChange={handleChange('streetName')}
                       defaultValue={values.streetName}
                    />
                    <br/>
                    <TextField 
                       hintText="Suburb" 
                       floatingLabelText="suburb"
                       onChange={handleChange('suburb')}
                       defaultValue={values.suburb}
                    />
                       <TextField 
                       hintText="Town / City" 
                       floatingLabelText="townCity"
                       onChange={handleChange('townCity')}
                       defaultValue={values.townCity}
                    /></div> : null }
        </div> 
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
                    /><br/><br/>
                

                    
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