import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

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
        const { values: {title, firstName, lastName, firstNameNOTsame, lastNameNOTsame, nameOtherKnown, namePrefer, email, occupation, city, bio} } = this.props;
        return (  
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
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
                    <RaisedButton
                       label="Back" 
                       primary={false}
                       style={styles.button}
                       onClick={this.back}
                    />
                    <RaisedButton
                       label="Confirm & Continue" 
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