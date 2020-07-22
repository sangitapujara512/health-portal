
import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {setPatient,deletePatient,updatePatient,addPatient} from '../../actions/patientAction';
import { connect } from 'react-redux';
import shortid from 'shortid';

import '../../../src/App.css';
// import Information from './info-json';
// const patientList=[{
//     "id": 1,
//     "FirstName": "John",
//     "LastName": "Doe",
//     "Mobile": 1111111111,
//     "email": "john.doe@gmail.com",
//     "Medicine": ["Crocin", "Cough Syrup"],
//     "Diagnosys":["fever","throat pain"],
//     "Address" : "Street 1",
//     "City": "Mumbai",
//     "State":"Mah",
//     "Country":"India",
//     "Pincode": 400080,
//     },
//     {
//       "id": 2,
//         "FirstName": "Ketty",
//         "LastName": "Thomson",
//         "Mobile": 2222222222,
//         "email": "Ketty.Thomson@gmail.com",
//         "Medicine": ["Domestal","Saridon"],
//         "Diagnosys":["Stomach upset", "Head ache"],
//         "Address" : "Street 2 ",
//         "City": "Mumbai",
//         "State":"Mah",
//         "Country":"India",
//         "Pincode": 400080,
//         },
//         {
//           "id": 3,
//             "FirstName": "Denis",
//             "LastName": "Penk",
//             "Mobile": 4444444444,
//             "email": "Denis.Penk@gmail.com",
//             "Medicine": ["Domestal","Saridon"],
//             "Diagnosys":["Stomach upset", "Head ache"],
//             "Address" : "Street 2 ",
//             "City": "Mumbai",
//             "State":"Mah",
//             "Country":"India",
//             "Pincode": 400080,
//             }

    
// ]

class Search extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  // Add
  add=()=>{
    const patientList=this.props.patient[0]
    console.log("delete",patientList);
    const key=shortid.generate()
  
   const patientAdd={
        "id": key,
        "FirstName": key,
        "LastName": "Doe",
        "Mobile": 1111111111,
        "email": "john.doe@gmail.com",
        "Medicine": ["Crocin", "Cough Syrup"],
        "Diagnosys":["fever","throat pain"],
        "Address" : "Street 1",
        "City": "Mumbai",
        "State":"Mah",
        "Country":"India",
        "Pincode": 400080,
        }

        const finalAdd=[...patientList,patientAdd]
        console.log("finalAdd",finalAdd);
    
    console.log(patientList);
    this.props.addPatient(finalAdd)
  }

  // Delete

  handleDelete =(e)=>{
    const patientList=this.props.patient[0]
    console.log("delete",patientList);
    const postDelete=patientList.filter((patient)=>{
      console.log("patient",patient.id);
      return patient.id !=e.id
     
    })
    console.log("postDelete",postDelete);
    this.props.deletePatient(postDelete)




  }

  // Update
  handleUpdate=(patientDetails)=>{

    const patientUpdate={
      "id": 1,
      "FirstName": 1,
      "LastName": "Doe",
      "Mobile": 1111111111,
      "email": "john.doe@gmail.com",
      "Medicine": ["Crocin", "Cough Syrup"],
      "Diagnosys":["fever","throat pain"],
      "Address" : "Street 1",
      "City": "Mumbai",
      "State":"Mah",
      "Country":"India",
      "Pincode": 400080,
      }
    // console.log("patientDetails",patientDetails);
    
    // this.setState({
    //   updated:"true",
    //   updatedDetails:patientDetails
    // });
  
    const patientList=this.props.patient[0]
      console.log("delete",patientList);
     
      const postUpdate=patientList.filter((patient)=>{
        console.log("patient",patient);
        return patient.id !=patientUpdate.id
       
      })
      console.log("postUpdate",postUpdate);
      const finalUpdated= [...postUpdate,patientUpdate];
     
     
     

       this.props.updatePatient(finalUpdated)
      //  this.setState({finalSet:finalUpdated});
      
   
    
  }

  render(){
  
    const patientList=this.props.patient[0]
    console.log("SER",patientList)
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }
    const items = patientList && patientList.filter((data)=>{
        console.log("data",data);
      if(this.state.search == null)
          return data
      else if(data.FirstName.toLowerCase().includes(this.state.search.toLowerCase()) || data.email.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div>
          <TableContainer style={{ padding: '20px' }} >
          {/* <button onClick={this.add} style={{height:"100px",width:"100px"}}>Add Patient</button> */}
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/* <TableCell>Patient name</TableCell>
                  <TableCell align="center">Phone</TableCell>
                  <TableCell align="center">Email&nbsp;</TableCell>
                  <TableCell align="center">Diagnosis</TableCell>
                  <TableCell align="center">Prescribed Medication</TableCell>
                  <TableCell align="center">Address</TableCell>
                  <TableCell align="center">City</TableCell>
                  <TableCell align="center">State</TableCell>
                  <TableCell align="center">Country</TableCell>
                  <TableCell align="center">Pincode</TableCell>
                  <TableCell align="center">Update</TableCell>
                  <TableCell align="center">Delete</TableCell> */}

                </TableRow>
              </TableHead>
              <TableBody>
                
                  <TableRow key={data.FirstName}>
                    <TableCell component="th" scope="row">
                    {data.FirstName}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {data.Mobile}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {data.email}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {/* {data.Diagnosys} */}
                    {data.Diagnosys && data.Diagnosys.map((item, j) => (
                        <TableCell component="th" scope="row" style={{ display: "grid", borderBottom: 'none', textAlign: 'center' }} key={j}>
                          {item}
                        </TableCell>

                      ))}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {/* {data.Medicine} */}
                    {data.Medicine && data.Medicine.map((item, k) => (
                        <TableCell component="th" scope="row" style={{ display: "grid", borderBottom: 'none', textAlign: 'center' }} key={k}>
                          {item}
                        </TableCell>

                      ))}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {data.Address}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {data.City}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {data.State}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {data.Country}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {data.Pincode}
                    </TableCell>
                    <TableCell align="center"><button onClick={this.handleUpdate.bind(this, data)} >Update</button></TableCell>
                  <TableCell align="center"><button onClick={this.handleDelete.bind(this, data)}>Delete</button></TableCell>

                    {/* <TableCell component="th" scope="row">
                      {entry && entry.Mobile}
                    </TableCell>
                    <TableCell align="center">{entry && entry.email}</TableCell>
                    <TableCell align="center">

                      {entry && entry.Diagnosys.map((item, j) => (
                        <TableCell component="th" scope="row" style={{ display: "grid", borderBottom: 'none', textAlign: 'center' }} key={j}>
                          {item}
                        </TableCell>

                      ))}
                    </TableCell>


                    <TableCell align="center">

                      {entry && entry.Medicine.map((item, k) => (
                        <TableCell component="th" scope="row" style={{ display: "grid", borderBottom: 'none', textAlign: 'center' }} key={k}>
                          {item}
                        </TableCell>

                      ))}
                    </TableCell>

                    <TableCell align="center">{entry && entry.Address}</TableCell>
                    <TableCell align="center">{entry && entry.City}</TableCell>
                    <TableCell align="center">{entry && entry.State}</TableCell>
                    <TableCell align="center">{entry && entry.Country}</TableCell>
                    <TableCell align="center">{entry && entry.Pincode}</TableCell>
                    <TableCell align="center"><button onClick={this.handleUpdate.bind(this, entry)} >Update</button></TableCell>
                    <TableCell align="center"><button onClick={this.handleDelete.bind(this, entry)}>Delete</button></TableCell> */}
                  </TableRow>
                
              </TableBody>
            </Table>
          </TableContainer>
        {/* <ul>
          <li style={{position:'relative',left:'10vh'}}>
            <span style={styleInfo}>{data.FirstName}</span>
            <span style={styleInfo}>{data.email}</span>
            <span style={styleInfo}>{data.Mobile}</span>
          </li>
        </ul> */}

        
      </div>
      )
    })

    return (
      <div>
      <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      <TableContainer style={{ padding: '20px' }} >
          {/* <button onClick={this.add} style={{height:"100px",width:"100px"}}>Add Patient</button> */}
            <Table aria-label="simple table">
              <TableHead>
              <button onClick={this.add} style={{height:"50px",width:"50px"}}>Add Patient</button>
      <TableRow>
                  <TableCell>Patient name</TableCell>
                  <TableCell align="center">Phone</TableCell>
                  <TableCell align="center">Email&nbsp;</TableCell>
                  <TableCell align="center">Diagnosis</TableCell>
                  <TableCell align="center">Prescribed Medication</TableCell>
                  <TableCell align="center">Address</TableCell>
                  <TableCell align="center">City</TableCell>
                  <TableCell align="center">State</TableCell>
                  <TableCell align="center">Country</TableCell>
                  <TableCell align="center">Pincode</TableCell>
                  {/* <TableCell align="center">Update</TableCell>
                  <TableCell align="center">Delete</TableCell> */}

                </TableRow>
                </TableHead>
                </Table>
                </TableContainer>
              
      {items}
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  patient: [state.patient.patientList[0]],
});
const mapDispatchToProps = (dispatch) => ({
  updatePatient: (patientDetails) =>
  dispatch(updatePatient(patientDetails)),
  setPatient: (patientDetails) =>
  dispatch(setPatient(patientDetails)),
  addPatient: (patientDetails) =>
  dispatch(addPatient(patientDetails)),
  deletePatient: (patientDetails) =>
  dispatch(deletePatient(patientDetails)),
  

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
// export default Search;
