import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import HeaderForm from './HeaderForm';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
// Import React Progress Bar
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


export class Confirm extends Component {
    constructor(props)
    {
        super(props);
        this.state= {
            clientNumber:'',
            title:'',
            firstName: '',
            lastName: '',
            nameOnBirthCert:'',
            firstNameNOTsame:'',
            lastNameNOTsame:'',
            knownByOtherName:'',
            nameOtherKnown:'',
            nameToCall:'',
            namePrefer:'',
            dob:'',
            gender:'',
            irdNumber:'',
            flatHouseNum:'',
            streetName:'',
            suburb:'',
            townCity:'',
            mailaddress:'',
            mailingAddr:'',
            homePhone:'',
            mobPhone:'',
            otherPhone:'',
            email:'',
            getEmails:'',
            ethnicGroup:'',
            ethnicity:'',
            usuallyNZ:'',
            residenceStatus:'',
            dateGranted:'',
            residenceStatus:'',
            dateArrived:'',
            countryOfBirth:'',
        }
    }

    continue = e => {
        e.preventDefault();
        //Process Form//
        
        console.log("test")
        
        const axios = require('axios')
        var body = {
            clientNumber: this.props.values.clientNumber,
            firstName: this.props.values.firstName,

            

        }
        axios({
            method: 'post',
            url: 'http://34.230.74.44:8000/ccs/',
            headers: {'authorization': 'Token 5f1c57dbbe2dbaabe6f8ada1c7f3c0e6dd2e2a35'},
            data: body
        })
          .then(function (response) {
            console.log(response);
          })





        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }; 
    
    render() { 
        const { values: {clientNumber, title, firstName, lastName, nameOnBirthCert, 
            firstNameNOTsame, lastNameNOTsame, knownByOtherName, nameOtherKnown, nameToCall, namePrefer, 
            dob, gender, irdNumber, flatHouseNum, streetName, suburb, townCity, mailaddress, mailingAddr, mailingAddress2,
            homePhone, mobPhone, otherPhone, email, getEmails, ethnicGroup, ethnicity, usuallyNZ, residenceStatus, dateGranted, 
            dateArrived, countryOfBirth 
         } } = this.props;
        const { classes } = this.props;

        return (  
            <MuiThemeProvider>
                <HeaderForm/>
                <React.Fragment>
                    {/* <AppBar title="Confirm User Data" /> */}
                    <div class="cardReview">
                    <List>                    
                    <ListItem
                        primaryText="Client Number"
                        secondaryText={ clientNumber }
                        />
                    <ListItem
                        primaryText="Title"
                        secondaryText={ title }
                        />
                        <ListItem
                        primaryText="First Name"
                        secondaryText={ firstName }
                        />
                        <ListItem
                        primaryText="Last Name"
                        secondaryText={ lastName }
                        />
                        <ListItem
                        primaryText="Name on birth certificate the same as above"
                        secondaryText={ nameOnBirthCert }
                        />
                        
                        <ListItem
                        primaryText="First name (not same as birth certificate)"
                        secondaryText={ firstNameNOTsame }
                        />
                         <ListItem
                        primaryText="Last name (not same as birth certificate)"
                        secondaryText={ lastNameNOTsame }
                        />
                        <ListItem
                        primaryText="Have you ever been known by any other name?"
                        secondaryText={ knownByOtherName }
                        />
                         <ListItem
                        primaryText="Other name(s) known by"
                        secondaryText={ nameOtherKnown }
                        />
                        <ListItem
                        primaryText="What name would you like us to call you?"
                        secondaryText={ nameToCall }
                        />
                         <ListItem
                        primaryText="Preferred name"
                        secondaryText={ namePrefer }
                        />
                        <ListItem
                        primaryText="Date of birth"
                        secondaryText={ dob }
                        />
                        <ListItem
                        primaryText="Gender"
                        secondaryText={ gender }
                        />
                        <ListItem
                        primaryText="Inland Revenue tax number"
                        secondaryText={ irdNumber }
                        />
                        <ListItem
                        primaryText="Flat/ House Number"
                        secondaryText={ flatHouseNum }
                        />
                        <ListItem
                        primaryText="Street Name"
                        secondaryText={ streetName }
                        />
                        <ListItem
                        primaryText="Suburb"
                        secondaryText={ suburb }
                        />
                        <ListItem
                        primaryText="Town/City"
                        secondaryText={ townCity }
                        />
                        <ListItem
                        primaryText="Is your mailing address different from where you live?"
                        secondaryText={ mailaddress }
                        />
                        <ListItem
                        primaryText="Mailing address (if different from where you live)"
                        secondaryText={ mailingAddr }
                        />
                        <ListItem
                        primaryText="Home phone"
                        secondaryText={ homePhone }
                        />
                        <ListItem
                        primaryText="Mobile phone"
                        secondaryText={ mobPhone }
                        />
                        <ListItem
                        primaryText="Other phone"
                        secondaryText={ otherPhone }
                        />
                        <ListItem
                        primaryText="Do you agree to get emails from us?"
                        secondaryText={ email }
                        />
                        <ListItem
                        primaryText="Email address"
                        secondaryText={ getEmails }
                        />
                        <ListItem
                        primaryText="the group(s) you most identify with"
                        secondaryText={ ethnicGroup }
                        />
                        <ListItem
                        primaryText="the group(s) you most identify with (if you opt for other)"
                        secondaryText={ ethnicity }
                        />
                        <ListItem
                        primaryText="Do you usually live in New Zealand?"
                        secondaryText={ usuallyNZ }
                        />
                        <ListItem
                        primaryText="Residence status"
                        secondaryText={ residenceStatus }
                        />
                        <ListItem
                        primaryText="Date granted"
                        secondaryText={ dateGranted }
                        />
                        <ListItem
                        primaryText="What is your residence status (if you opt for other)?"
                        secondaryText={ residenceStatus }
                        />
                        <ListItem
                        primaryText="The date you arrived in New Zealand"
                        secondaryText={ dateArrived }
                        />
                        <ListItem
                        primaryText="Country of birth"
                        secondaryText={ countryOfBirth }
                        />                        
                    </List>
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
          Continue
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
                       style={styles.button}
                       onClick={this.back}
                    />
                    <RaisedButton
                       label="Confirm & Continue" 
                    //    primary={true}
                       backgroundColor= '#1cbaa1'
                       style={styles.button}
                       onClick={this.continue}
                    /> */}
                    
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

Confirm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Confirm);