import React from 'react';
import axios from 'axios';
import FetchUser from './components/FetchUser';
import './App.css';
import Placeholder from './components/Placeholder';

  
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
            
                        
        <Placeholder/>
           
            
        
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
