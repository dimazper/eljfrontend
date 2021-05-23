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
import axios from 'axios';
import Header from './Header';
import Fab from '@material-ui/core/Fab';





// import { UserForm } from './components/UserForm';

export class Profile extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            ccs: [],
            clientNumber: '',
        }
    }
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    componentDidMount() {
  
        let data ;
  
        axios.get('http://34.230.74.44:8000/parent/',
        {headers: {'authorization': 'Token 5f1c57dbbe2dbaabe6f8ada1c7f3c0e6dd2e2a35'}})
        .then(res => {
            data = res.data;
            this.setState({
                ccs : data    
            });
        })
        .catch(err => {})
    }

    back = e => {
        e.preventDefault();
        window.location.href='/landing';
    }; 

    render() { 
        const { values, handleChange } = this.props;

        return (  
            <MuiThemeProvider>
                <Header/> 
                <React.Fragment>
                <div>
            {this.state.ccs.map((ccs) =>  (
            <div key={ccs}>
  
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
                        label={ccs.clientNumber}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    </Grid>
                        <br></br>
                       
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Title</p>
                    </Grid>
                    <p>{ccs.title}</p>

                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        label="How often do you expect the payment?"
                                    ><p>{ccs.title}</p>
                                        <MenuItem value="" label={ccs.title}>
                                            <em>{ccs.title}</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Mr</MenuItem>
                                        <MenuItem value={20}>Mrs</MenuItem>
                                        <MenuItem value={30}>Ms</MenuItem>
                                        <MenuItem value={40}>Miss</MenuItem>
                                        <MenuItem value={50}>Other</MenuItem>


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
                        label={ccs.firstName}
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
                        label={ccs.lastName}
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
                        label={ccs.firstNameNOTsame}
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
                        label={ccs.lastNameNOTsame}
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
                        label={ccs.nameOtherKnown}
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
                        label={ccs.namePrefer}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Date of birth</p>
                    </Grid>

                    <p> {ccs.dob} </p>
                    

                    </Grid><br></br>
    
                    <Grid container spacing={24}>
                   <Grid item xs={4}>
                       <p>Gender</p>
                    </Grid>
                    <p>{ccs.gender}</p>
                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        label="How often do you expect the payment?"
                                    >
                                        <MenuItem value="">
                                            <em>{ccs.gender}</em>
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
                        label={ccs.irdNumber}
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                    /> 
                    

                    </Grid><br></br>

                    <div class="column">
        <div class="cardButtonLeft">
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="Add"
          onClick={this.back} style={styles.button}
        >
          Save and Exit
        </Fab>
        </div>      
        </div>

                   





                       </div>
                                 
            </div>
            
            )
        )}
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