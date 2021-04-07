import React, { Component } from 'react';

export class FetchUser extends Component {   
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
        const url = "https://catalogue.data.govt.nz/api/3/action/datastore_search?resource_id=f65dfeb4-94be-4879-957c-e081d9570216&limit=5";
        const response = await fetch (url);
        const data = await response.json();
        this.setState({ datastore: data.result.records[3], loading: false});
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
                <h1 id='title'>ECE Table</h1>  
                <table id='users'>
                 <tbody>                   
                    <tr>{this.createTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table> 

              <div>
                 {this.state.loading || !this.state.datastore ? 
                    (<div>loading...</div>) : 
                        (<div>
                     <div>{this.state.datastore.Org_Name}</div>
                     <div>{this.state.datastore.ECE_Id}</div>
                     <div>{this.state.datastore.Telephone}</div>
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
 
export default FetchUser;