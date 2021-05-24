import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import HeaderForm from './HeaderForm';
import Fab from '@material-ui/core/Fab';
import './LandingPage.css';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        //Process Form//
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }; 
    
    render() { 
        const { values: {title, id,clientNumber, getEmails, Child_ece_Email_1, firstName, lastName, firstNameNOTsame, lastNameNOTsame, nameOtherKnown, namePrefer, email, occupation, city, bio} } = this.props;
        return (  
            <MuiThemeProvider>
                <HeaderForm/>
                <React.Fragment>
                <List> 
                    <div class="cardReview">
                    <h1>Confirmation</h1>
                    {/* <h2>Confirmation</h2> */}
                    {/* <h2>Personal Details</h2> */}
                    <ListItem
                        primaryText="A confirmation email has been sent to:"
                        // secondaryText={ Child_ece_Email_1 }
                        secondaryText="MSD for review"
                        />
                    <ListItem
                        primaryText="Your reference number is:"
                        secondaryText={ id }
                    />

                    <ListItem
                        primaryText="Supervisor’s statement:"
                        secondaryText={ id }
                    />

                    <ListItem
                        primaryText="• The information I have provided is true and complete."
                        secondaryText={ id }
                    />

                    <ListItem
                        primaryText="• I have authority to complete this form for my organisation."
                        secondaryText={ id }
                    />

                    <ListItem
                        primaryText="Supervisor’s name "
                        secondaryText={ id }
                    />

                    <FormGroup aria-label="position" coloumn>                   
                    <TextField
                        style={styles.input}
                        hintText="9 digit Number" //hfgfg
                        floatingLabelText="Full name "
                        // onChange={handleChange('clientNumber')}
                        // defaultValue={values.clientNumber}
                        label="Full name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        />
                    </FormGroup>

                    {/* <ListItem
                        primaryText="If you have applied for Childcare and Oscar Subsidy, your application has now been sent to ELS and MSD.
                        You don't need to do anything else. ELS or MSD might contact you to discuss your application. ELS or MSD will notify you once your application
                        has been processed "
                        /> */}
                        <Fab
                        variant="extended"
                        size="medium"
                        color="primary"
                        aria-label="Add"
                        // className={classes.margin}
                        onClick={this.editSection3} style={styles.button}
                        >
                        Print
                        </Fab>
                        </div>
                        </List>
                    
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