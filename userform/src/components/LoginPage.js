import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom'

// import { UserForm } from './components/UserForm';



export class LoginPage extends Component {
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
        return (  
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Login page" />
                    <div class="row">
                        <p><br/></p>
                        <p>Please enter your login name and password</p>
                        <p><br/></p>

                        <div class="column">
                            <p>Login name:</p><input></input><br></br>
                            <p>Password:</p><input></input><p>  </p>
                            <Link to="/userform"><button> Login </button></Link>
                        </div>
                    
                    </div>                 
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default LoginPage;