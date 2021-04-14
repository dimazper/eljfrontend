import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import RaisedButton from 'material-ui/RaisedButton';
import './Placeholder.css';
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from  'axios';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

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