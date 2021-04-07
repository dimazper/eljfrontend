import React, { Component } from 'react';
import './App.css';
import {Placeholder } from './components/Placeholder'
import {UserForm} from './components/UserForm'
import Footer from './components/footer'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import UserForm from './components/UserForm';
import { Table } from 'material-ui';
import Table from './components/Table';

class App extends Component {
  render() { 
    return ( 
      <div>
      <div className="App">
        {/* <Placeholder/> */}
        {/* <LandingPage/> */}
        {/* <UserForm/> */}
      </div>
      
      </div>
     );
  }
}
 

export default App;
