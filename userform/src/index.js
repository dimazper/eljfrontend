import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import './index.css';
import App from './App';
import {Placeholder} from './components/Placeholder'
import LoginPage from './components/LoginPage'
import reportWebVitals from './reportWebVitals';
import UserForm from './components/UserForm';
import LandingPage from './components/LandingPage';
import ElsUserForm from './components/ElsUserForm';
import ElsLandingPage from './components/ElsLandingPage';
import FetchUser from './components/FetchUser';
import SuperReview from './SuperReview';
// import Table from './components/Table';




const rootElement = document.getElementById('root');
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Placeholder} />
          <Route path='/login' component={LoginPage} />
          <Route path='/landing' component={LandingPage} />
          <Route path='/userform' component={UserForm} />
          <Route path='/els' component={ElsUserForm} />
          <Route path='/elslanding' component={ElsLandingPage} />
          <Route path='/fetchuser' component={FetchUser} />
          <Route path='/review' component={SuperReview} />
          {/* <Route path='/table' component={Table} /> */}

        </Switch>
      </BrowserRouter>,
      rootElement
    );


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
