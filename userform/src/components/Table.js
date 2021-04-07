import React, { Component } from 'react';

export class Table extends Component {
    constructor(props) {
      super(props);
      this.state = {
        droplets: []
      }
    }
    
    componentDidMount() {
      fetch('https://catalogue.data.govt.nz/api/3/action/datastore_search?resource_id=f65dfeb4-94be-4879-957c-e081d9570216&limit=5')
      .then(res => res.json())
      .then(json => json.droplets)
      .then(droplets => this.setState({ 'droplets': droplets }))
    }
  
    render() {
        const Table = ({ droplets }) => {
            
            return (
              <table>
                  <Table droplets={ this.state.droplets } />
                <thead>
                  <tr>
                    <th>_id</th>
                    <th>ECE_Id</th>
                    <th>Org_name</th>
                    <th>Telephone</th>
                    <th>Fax</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                { (droplets.length > 0) ? droplets.map( (droplet, index) => {
                     return (
                      <tr key={ index }>
                        <td>{ droplet._id }</td>
                        <td>{ droplet.ECE_Id }</td>
                        <td>{ droplet.Org_name}</td>
                        <td>{ droplet.Telephone }</td>
                        <td>{ droplet.Fax }</td>
                        <td>{ droplet.Email }</td>
                      </tr>
                    )
                   }) : <tr><td colSpan="5">Loading...</td></tr> }
                </tbody>
              </table>
            );
        }

    }      
} 
  export default Table;

// const Table = ({ droplets }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>_id</th>
//           <th>ECE_Id</th>
//           <th>Org_name</th>
//           <th>Telephone</th>
//           <th>Fax</th>
//           <th>Email</th>
//         </tr>
//       </thead>
//       <tbody>
//       { (droplets.length > 0) ? droplets.map( (droplet, index) => {
//            return (
//             <tr key={ index }>
//               <td>{ droplet._id }</td>
//               <td>{ droplet.ECE_Id }</td>
//               <td>{ droplet.Org_name}</td>
//               <td>{ droplet.Telephone }</td>
//               <td>{ droplet.Fax }</td>
//               <td>{ droplet.Email }</td>
//             </tr>
//           )
//          }) : <tr><td colSpan="5">Loading...</td></tr> }
//       </tbody>
//     </table>
//   );
// }

// export default Table;