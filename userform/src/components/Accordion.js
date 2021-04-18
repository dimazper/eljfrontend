import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import RaisedButton from 'material-ui/RaisedButton';
import './Placeholder.css';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import parent from '../assets/family2.jpg';

class Accordion extends Component {
 
    render() { 
        return ( 
            <div>
              <button class="accordion">Tell us the names you’ve been known by</button>
                <div class="panel">
                    <p>Lorem ipsum...</p>
                </div>

                {/* <button class="accordion">Section 2</button>
                    <div class="panel">
                        <p>Lorem ipsum...</p>
                    </div>
                <button class="accordion">Section 3</button>
                    <div class="panel">
                        <p>Lorem ipsum...</p>
                    </div>  */}
            </div>
         );        
    }    
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



 
export default Accordion;

