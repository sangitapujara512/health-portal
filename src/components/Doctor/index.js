import React, { Component } from 'react'
import {
  Redirect,
  Link as Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { borderBottom } from '@material-ui/system';
import Modal from 'react-modal';
import Update from './Update'
import {updatePatient} from '../../actions/patientAction'

class Doctor extends Component {
  constructor(){
    super()
    this.state={
      showModal: false,
      updatedDetails:'',
      updated: "false",
    }
  }


  handleUpdate=(e)=>{
    this.setState({
      showModal:true
    });

  }
  afterOpenModal=()=>{
    this.setState({
      showModal:true
    });
  }

  closeModal=()=>{
    this.setState({
      showModal:false
    });
  }
submit=(patientDetails)=>{
  this.setState({
    updated:"true",
    updatedDetails:patientDetails
  });
  this.props.updatePatient(patientDetails)
 
  
}
// componentDidUpdate(prevState){
//   console.log("STATE",this.state);
 
//   if(this.state.updatedthis.state.updated){
 
//     console.log("update",this.state.updatedDetails)

//     this.props.updatePatient(this.state.updatedDetails)
    
//   }

// }
  render() {
    const {showModal}=this.state
    const patientlist = this.props && this.props.patient[0] && this.props.patient[0].patientList;
    console.log("PROPS", patientlist);
    console.log("PROPS", this.props);
    return (
      <div>
        <Link to='/'>Go to Home </Link>
        <>
        <Modal
          isOpen={showModal}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
        <Update submit={this.submit}/>
          </Modal>
          <p style={{ textAlign: 'center', color: 'blue', fontWeight: 'bold' }}>Patient List</p>
          <TableContainer style={{ padding: '20px' }}>
            <Table aria-label="simple table">
              <TableHead>
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
                  <TableCell align="center">Update</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {patientlist.map((entry, j) => (
                  <TableRow key={entry && entry.FirstName}>
                    <TableCell component="th" scope="row">
                      {entry && entry.FirstName}
                    </TableCell>
                    <TableCell component="th" scope="row">
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
                    <TableCell align="center"><button onClick={this.handleUpdate.bind(this, entry)}>Update</button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  patient: [state.patient],
});
const mapDispatchToProps = (dispatch) => ({
  updatePatient: (patientDetails) =>
  dispatch(updatePatient(patientDetails)),

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Doctor);

