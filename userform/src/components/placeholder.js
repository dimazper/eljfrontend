import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import RaisedButton from 'material-ui/RaisedButton';
import './placeholder.css';
import { Link } from 'react-router-dom';

export class Placeholder extends Component {
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
                    <AppBar title="Placeholder Info Page" />
                    <div class="row">
                        <p><br/></p>
                        <p>Lorum ipsum, information about early learning</p>
                        <p><br/></p>

                        <div class="column">
                            <p>You are eligible for the subsidy</p>
                            <FontAwesomeIcon color='green' icon={faCheckCircle}/>

                        </div>
                        <div class="column"><br/>
                        <Link to='/login'><RaisedButton
                       label=" Apply "></RaisedButton></Link>
                       
                    
                        </div>
                    </div>                 
                </React.Fragment>
                
            </MuiThemeProvider>
        );
    }
}

export default Placeholder;