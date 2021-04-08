import React from 'react';
import axios from 'axios';
  
class App extends React.Component {
  
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
                        <p>Child Applicant: {ccs.Child_ECE_ChildName_1}</p>
                        <p>Early Childhood Service: {ccs.Child_ECE_Provider_1}</p>

                        <footer >
                        
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
  
export default App;




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
