import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import { useHistory } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from '@material-ui/core/TextField';
import HeaderForm from './HeaderForm';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';




// import { UserForm } from './components/UserForm';

export class Profile extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            clientNumber: '',
        }
    }
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() { 
        const { values, handleChange } = this.props;

        return (  
            <MuiThemeProvider>
                <HeaderForm/> 
                <React.Fragment>
                    <h1 class='yourProfile'> Your profile </h1>
                   <div class='cardProfile'>
                       
                   <Grid container spacing={24}>
           

                   <Grid item xs={4}>
                       <p>Client Number</p>
                    </Grid>
                    <TextField 
                        style={styles.input}
                        hintText="Client Number" //hfgfg
                        floatingLabelText="Client Number"
                        label="Client Number"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    </Grid>
                        <br></br>
                       
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Title</p>
                    </Grid>

                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        label="How often do you expect the payment?"
                                    >
                                        <MenuItem value="">
                                            <em>               </em>
                                        </MenuItem>
                                        <MenuItem value={10}>Mr</MenuItem>
                                        <MenuItem value={20}>Mrs</MenuItem>
                                        <MenuItem value={30}>Ms</MenuItem>
                                        <MenuItem value={30}>Miss</MenuItem>
                                        <MenuItem value={30}>Other</MenuItem>


                                    </Select>
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>First Name</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="First Name" //hfgfg
                        floatingLabelText="First Name"
                        label="First Name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Last Name</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label="Last Name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>

                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>First name (not same on birth cert)</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="First Name" //hfgfg
                        floatingLabelText="First Name"
                        label="First Name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Last name (not same on birth cert)</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Last Name" //hfgfg
                        floatingLabelText="Last Name"
                        label="Last Name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Other known name</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Other known name" //hfgfg
                        floatingLabelText="Other known name"
                        label="Other known name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Preferred Name</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="Preferred Name" //hfgfg
                        floatingLabelText="Preferred Name"
                        label="Preferred Name"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Date of birth</p>
                    </Grid>

                    <p> 1 / 02 / 1982 </p>
                    

                    </Grid><br></br>
    
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Gender</p>
                    </Grid>

                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        label="How often do you expect the payment?"
                                    >
                                        <MenuItem value="">
                                            <em>               </em>
                                        </MenuItem>
                                        <MenuItem value={10}>Male</MenuItem>
                                        <MenuItem value={20}>Female</MenuItem>
                                        <MenuItem value={30}>Gender Diverse</MenuItem>
                                        


                                    </Select>
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>IRD Number</p>
                    </Grid>

                    <TextField 
                        style={styles.input}
                        hintText="IRD Number" //hfgfg
                        floatingLabelText="IRD Number"
                        label="IRD Number"
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>

                   





                       </div>
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
const style = {
    margin: 15,
   };

export default Profile;