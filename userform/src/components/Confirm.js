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
            firstName: '',
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
        const { values: {clientNumber, title, firstName, lastName, firstNameNOTsame, lastNameNOTsame, nameOtherKnown, namePrefer, email, occupation, city, bio} } = this.props;
        const { classes } = this.props;

        return (  
            <MuiThemeProvider>
                <HeaderForm/>
                <React.Fragment>
                    {/* <AppBar title="Confirm User Data" /> */}
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
                        primaryText="First name (not same as birth certificate)"
                        secondaryText={ firstNameNOTsame }
                        />
                         <ListItem
                        primaryText="Last name (not same as birth certificate)"
                        secondaryText={ lastNameNOTsame }
                        />
                         <ListItem
                        primaryText="Other name(s) known by"
                        secondaryText={ nameOtherKnown }
                        />
                         <ListItem
                        primaryText="Preferred"
                        secondaryText={ namePrefer }
                        />
                        <ListItem
                        primaryText="Email"
                        secondaryText={ email }
                        />
                        <ListItem
                        primaryText="Occupation"
                        secondaryText={ occupation }
                        />
                        <ListItem
                        primaryText="City"
                        secondaryText={ city }
                        />
                        <ListItem
                        primaryText="Bio"
                        secondaryText={ bio }
                        />

                    </List>
                    <br/>
                    <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={this.back} style={styles.button}>
          Back 
        </Button>

        <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={this.continue} style={styles.button}>
          Continue 
        </Button>
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