import React, { Component } from 'react';
import './App.css';
import {Placeholder } from './components/Placeholder'
import {UserForm} from './components/UserForm'
import Footer from './components/footer'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() { 
    return ( 
      <div>
      <div className="App">
        
        <Placeholder/>
        
      </div>
      
      </div>
     );
  }
}
 

export default App;
