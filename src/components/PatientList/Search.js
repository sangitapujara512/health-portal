
import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {deletePatient,updatePatient,addPatient} from '../../actions/patientAction';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { 
  Link 
} from 'react-router-dom';
import '../../../src/App.css';
import UpdatePatient from './UpdatePatient';
import AddIcon from'@material-ui/icons/AddOutlined';

class Search extends Component {

  constructor(){
    super();

    this.state={
      search:null,
      showAddModal:false,
      propsData:'',
      showUpdateModal: false,
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }  

  // Delete the id from the array using filter method

  handleDelete =(e)=>{
    const patientList=this.props.patient[0]
    
    const postDelete=patientList.filter((patient)=>{
      
      return patient.id !=e.id     
    })
    
    this.props.deletePatient(postDelete)
  }

  // Update
  handleUpdate=(patientDetails)=>{
    
    this.setState({
      showUpdateModal: true,     
      propsData:patientDetails,
    });
  }

  // Modals
  handleAdd=(e)=>{
    
    this.setState({
      showAddModal:true,
    });
  }

  closeUpdateModal=()=>{    
    this.setState({
      showUpdateModal:false
    });
  }

  closeAddModal=()=>{
    this.setState({
      showAddModal:false
    });
  }

  render(){  
    const patientList=this.props.patient[0]
    
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
        
      if(this.state.search == null)
          return data
      else if(data.FirstName.toLowerCase().includes(this.state.search.toLowerCase()) || data.Medicine.toLowerCase().includes(this.state.search.toLowerCase()) || data.Diagnosys.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div>
          <TableContainer style={{ padding: '20px' }} >          
            <Table aria-label="simple table">             
              <TableBody>                
                  <TableRow key={data.FirstName}>
                    <TableCell component="th" scope="row" style={{width:'10%'}}>
                    {data.FirstName} {data.LastName}
                    </TableCell>
                    <TableCell component="th" scope="row" style={{width:'10%'}}>
                    {data.Mobile}
                    </TableCell>
                    <TableCell component="th" scope="row" style={{width:'10%'}}>
                    {data.email}
                    </TableCell>
                    <TableCell component="th" scope="row" style={{width:'10%'}}>                   
                      {data.Diagnosys}
                    </TableCell>
                    <TableCell component="th" scope="row" style={{width:'10%'}}>                    
                       {data.Medicine}
                    </TableCell>
                    {/* <TableCell component="th" scope="row">
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
                    </TableCell> */}
                    <TableCell align="center" style={{width:'10%'}}><Link to={{pathname:'/patientprofile',viewProfileProps:{data:data}}}>View Profile</Link></TableCell>
                    <TableCell align="center" style={{width:'10%'}}><button onClick={this.handleUpdate.bind(this, data)} className="customButton" >Update</button></TableCell>
                  <TableCell align="center" style={{width:'10%'}}><button onClick={this.handleDelete.bind(this, data)} className="customButton">Delete</button></TableCell>
                  </TableRow>                
              </TableBody>
            </Table>
          </TableContainer>
      </div>
      )
    })

    return (
      <div>
         {/* Add Modal Reuse UpdatePatient for add operation based on props */}
         
        <Modal
          isOpen={this.state.showAddModal}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeAddModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
        <UpdatePatient closeAddModal={this.closeAddModal} propsData={this.state.propsData} operation="add"/>
        {/* <div>ADD</div> */}
          </Modal>

        {/* ************************************************** */}

          {/* Update Modal Reuse UpdatePatient for update operation based on props */}

          <Modal
          isOpen={this.state.showUpdateModal}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeUpdateModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
        <UpdatePatient closeUpdateModal={this.closeUpdateModal} propsData={this.state.propsData} operation="update"/>
        {/* <div>ADD</div> */}
          </Modal>

      <div style={{display:'flex',justifyContent:'space-between'}}>    
      <input type="text" placeholder="Enter item to be searched" onChange={(e)=>this.searchSpace(e)}  className="searchStyle"/>
      <div style={{ marginTop: 2 }}>Add Patient
                  <div style={{ marginLeft: 5 }}>
                    <AddIcon onClick={this.handleAdd} fontSize="large" className="addIcon"/>
                  </div> 
                  </div>
                  </div> 
      <TableContainer style={{ padding: '20px' }} >         
            <Table aria-label="simple table">
              <TableHead>
                          
              {/* <button onClick={this.handleAdd} style={{height:"50px",width:"50px"}} className="customButton">Add Patient</button> */}
      <TableRow>
                  <TableCell style={{width:'10%'}} >Patient name</TableCell>
                  <TableCell align="center" style={{width:'10%'}} >Phone</TableCell>
                  <TableCell align="center" style={{width:'10%'}} >Email&nbsp;</TableCell>
                  <TableCell align="center" style={{width:'10%'}} >Diagnosis</TableCell>
                  <TableCell align="center" style={{width:'10%'}} >Medication</TableCell>
                  {/* <TableCell align="center">Address</TableCell>
                  <TableCell align="center">City</TableCell>
                  <TableCell align="center">State</TableCell>
                  <TableCell align="center">Country</TableCell>
                  <TableCell align="center">Pincode</TableCell> */}
                  <TableCell align="center" style={{width:'10%'}} >View Profile</TableCell>
                  <TableCell align="center" style={{width:'10%'}}>Update</TableCell>
                  <TableCell align="center" style={{width:'10%'}}>Delete</TableCell>
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
  // setPatient: (patientDetails) =>
  // dispatch(setPatient(patientDetails)),
  addPatient: (patientDetails) =>
  dispatch(addPatient(patientDetails)),
  deletePatient: (patientDetails) =>
  dispatch(deletePatient(patientDetails)), 

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

