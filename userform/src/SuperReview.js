import React from 'react';
import axios from 'axios';
import FetchUser from './components/FetchUser';
import './App.css';

  
class SuperReview extends React.Component {
  
    state = {
        ccs : [],
    }
  
    componentDidMount() {
  
        let data ;
  
        axios.get('http://34.230.74.44:8000/ccs/',
        {headers: {'authorization': 'Token 5f1c57dbbe2dbaabe6f8ada1c7f3c0e6dd2e2a35'}})
        .then(res => {
            data = res.data;
            this.setState({
                ccs : data    
            });
        })
        .catch(err => {})
    }
  
  render() {
    return(
      <div>
            {this.state.ccs.map((ccs) =>  (
            <div key={ccs}>
            <div >
                  <div ><h1>CCS Application: {ccs.id}</h1>

                        <p>Primary Applicant: {ccs.firstName} {ccs.lastName}</p>
                        <p>Client number: {ccs.clientNumber} </p>
                        <p>Child full name: {ccs.Child_ECE_ChildName_1}</p>
                        <p>Early Childhood Service: {ccs.Child_ECE_Provider_1}</p>
                        <p>Weekly Total Hours ECE: {ccs.Child_ECE_WeekTotal_1}</p>
                        <p>Total CCS hours used: 3</p>
                        
                        <p>Care start date: {ccs.Child_ECE_StartDate_1}</p>
                        <br>
                        </br>

                        <footer >
                        <p><b>Supervisor Data Match</b></p>
                        <FetchUser />
                        <p>What is your CCS/OSCAR providor number?: <input></input></p>
                        <br></br><button> Accept </button>
                        </footer>
                  </div>
            </div>
            </div>
            )
        )}
      </div>
      );
  }
}
  
export default SuperReview;




// import React, { Component } from 'react';
// import './App.css';



// class App extends Component {
//   render() { 
//     return ( 
//       <div>
//         <p>Test</p>
//       <div className="App">
//         {/* <Placeholder/> */}
//         {/* <LandingPage/> */}
//         {/* <UserForm/> */}
//       </div>
      
//       </div>
//      );
//   }
// }
 

// export default App;
