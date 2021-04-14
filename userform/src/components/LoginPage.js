import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import { useHistory } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import HeaderForm from './HeaderForm';
// import { UserForm } from './components/UserForm';

export class LoginPage extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }
    // continue = e => {
    //     e.preventDefault();
    //     //Process Form//
    //     this.props.nextStep();
    // };
    // back = e => {
    //     e.preventDefault();
    //     this.props.prevStep();
    // }; 

    routeChange=()=> {
        if (this.state.username === 'parent'){
            window.location.href='/landing';
        }
        else if (this.state.username === 'els'){
            window.location.href='/elslanding';
        }
        else{
            alert("Wrong User!!");
        }
      }

    render() { 
        return (  
            <MuiThemeProvider>
                <HeaderForm/> 
                <React.Fragment>
                    {/* <AppBar title="Login page" /> */}
                    <div class="row">
                        <p><br/></p>
                        <p>Please enter your login name and password</p>
                        <p><br/></p>

                        <div class="column">
                            <TextField
                                hintText="Enter your Username"
                                floatingLabelText="Username"
                                onChange = {(event,newValue) => this.setState({username:newValue})}
                                />
                            <br/>
                            <TextField
                                type="password"
                                hintText="Enter your Password"
                                floatingLabelText="Password"
                                onChange = {(event,newValue) => this.setState({password:newValue})}
                            />
                            <br/>
                            <RaisedButton label="Login" primary={true} style={style} 
                            onClick={this.routeChange}/>
                            {/* <p>Login name:</p><input></input><br></br>
                            <p>Password:</p><input></input><p>  </p> */}
                            {/* <Link to="/userform"><button> Login </button></Link> */}
                        </div>
                    </div> 
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const style = {
    margin: 15,
   };

export default LoginPage;