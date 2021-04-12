import React, { Component } from 'react';
import App from '../App';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FetchTest extends Component {   
    constructor (props) {
        super (props)
        // var num = 20;
        // var hrs = num.toString ();
        this.state = {
            loading: true,
            datastore: null,     
            users: [
                { _id: '', ECE_Id: '', Org_name: '', Telephone: '', Fax: '', Email: ''}
            ]
        }
    }

    async componentDidMount (){
        const url = "https://catalogue.data.govt.nz/api/3/action/datastore_search?resource_id=f65dfeb4-94be-4879-957c-e081d9570216&limit=50000";
        const response = await fetch (url);
        const data = await response.json();
        this.setState({ datastore: data.result.records[3000], loading: false});
        // this.setState({ datastore: data.result.records[20566], loading: false});

        // let ece_id = this.state.datastore.ECE_Id;
        // let _id = this.state.datastore._id;
    }

    renderTableData() {
        return this.state.users.map((user, index) => {
           const {_id, ECE_Id, Org_name, Telephone, Fax, Email } = user 
           return (
              <tr key={_id}>
                  <td>{_id}</td>
                  <td>{ECE_Id}</td>
                  <td>{Org_name}</td>
                  <td>{Telephone}</td>
                  <td>{Fax}</td>
                  <td>{Email}</td>
              </tr>              
           )
        })
     }

     createTableHeader() {
        let header = Object.keys(this.state.users[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
     
     render (){
         return (
             <div>    
                <h1 id='title'></h1>  
                <table id='users'>
                 <tbody>                   
                    {/* <tr>{this.createTableHeader()}</tr>
                    {this.renderTableData()} */}
                 </tbody>
              </table> 

              <div>
                 {this.state.loading || !this.state.datastore ? 
                    (<div>loading...</div>) : 
                        (<div>
                     <div>ECE Service: {this.state.datastore.Org_Name}</div>
                     <div>ECE ID: {this.state.datastore.ECE_Id}</div>
                     <div>Phone number: {this.state.datastore.Telephone}</div>
                     <div>Email: {this.state.datastore.Email}</div>
                     <div>20 hours ECE: YES</div>
                     <p><b></b>  
                            
                            <FormControlLabel
                                    value="yes"
                                    control={<Checkbox color="primary" />}
                                    label="Do you charge a holding or absense fee?"
                                    labelPlacement="start"
                            /></p>
                            

                    
                 </div>)}
             </div>
            
             </div>
         );
     }

}
//     state = { 
//         loading: true,
//         datastore: null
//      }

//    async componentDidMount (){
//         // const url = "https://catalogue.data.govt.nz/api/3/action/datastore_search?resource_id=f65dfeb4-94be-4879-957c-e081d9570216/";
//         const url = "https://catalogue.data.govt.nz/api/3/action/datastore_search?resource_id=f65dfeb4-94be-4879-957c-e081d9570216&limit=5";
//         const response = await fetch (url);
//         const data = await response.json();
//         this.setState({ datastore: data.result.records[2], loading: false});
//         let ece_id = this.state.datastore.ECE_Id;
//         let _id = this.state.datastore._id;
//     }

//     render() { 
//         return (  
//             <div>
//                 {this.state.loading || !this.state.datastore ? 
//                 (<div>loading...</div>) : 
//                 (<div>
//                     <div>{this.state.datastore.Org_Name}</div>
//                     <div>{this.state.datastore.ECE_Id}</div>
//                 </div>)}
//             </div>

//         );
//     }
// }
 
export default FetchTest;