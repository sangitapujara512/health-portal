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
// import Update from './UpdatePatient'
import {setPatient,deletePatient,updatePatient,addPatient} from '../../actions/patientAction';
import store from '../../store'
import AddPatient from './AddPatient'
import shortid from 'shortid';
import Search from './Search'
import {setLogin} from '../../actions/loginAction'

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


class PatientList extends Component {
  constructor(){
    super()
    this.state={
      showModal: false,
      showAddModal:false,
      updatedDetails:'',
      updated: "false",
      search:null,
      finalSet: ''      
    }
  }


  handleUpdate=(e)=>{
    this.setState({
      showModal:true
    });

  }
  handleAdd=(e)=>{
    this.setState({
      showAddModal:true
    });

  }
  handleDelete =(e)=>{
    let  patientList=this.props && this.props.patient[0] && this.props.patient[0].patientList;
    patientList= patientList[0];
    console.log("delete",patientList);
    const postDelete=patientList.filter((patient)=>{
      console.log("patient",patient.id);
      return patient.id !=e.id
     
    })
    console.log("postDelete",postDelete);
    this.props.deletePatient(postDelete)
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
  closeAddModal=()=>{
    this.setState({
      showAddModal:false
    });
  }
submit=(patientDetails)=>{
  console.log("patientDetails",patientDetails);
  
  this.setState({
    updated:"true",
    updatedDetails:patientDetails
  });

  let  patientList=this.props && this.props.patient[0] && this.props.patient[0].patientList;
  patientList=patientList[0];
    console.log("delete",patientList);
    console.log("patientDetails",patientDetails);
    const postUpdate=patientList.filter((patient)=>{
      console.log("patient",patient);
      return patient.id !=patientDetails[0].id
     
    })
    console.log("postUpdate",postUpdate[0]);
    const finalUpdated= [...postUpdate,patientDetails[0] ];
   
    console.log("finalUpdated",finalUpdated);
    console.log("finalUpdated",finalUpdated);
   
    alert ("calling");
     this.props.updatePatient(finalUpdated)
     this.setState({finalSet:finalUpdated});
    
 
  
}
add=()=>{
  const key=shortid.generate()

 const patientList=[{
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
      },
  ]
  console.log(patientList);
  this.props.addPatient(patientList)

  
    
 
  
}

// componentDidUpdate(prevProps){
//   let patientlist = this.props && this.props.patient[0] && this.props.patient[0].patientList;
//   patientlist= patientlist && patientlist[0];
//   console.log("STATE",this.state);
 
//   if(this.prevProps && this.prevProps.patient[0] != this.props && this.props.patient[0]){
 
  
//     console.log("PRP",this.props);
//     console.log("check");
//       // alert("updated");

//     //  this.props.updatePatient(patientlist)
    
//   }

// }
// componentDidMount(){
//   let patientlist = this.props && this.props.patient[0] && this.props.patient[0].patientList;
//   patientlist= patientlist && patientlist[0];
//   console.log("before mountpatientlist",this.props);
//   this.setState({
//     finalSet:patientlist
//   },()=>{console.log("mount",this.state.finalSet)});
// }
static getDerivedStateFromProps(props, state) {
    let patientlist = props && props.patient[0] && props.patient[0].patientList;
  patientlist= patientlist && patientlist[0];
console.log("patientlist",patientlist);

  return { finalSet: patientlist };
}
// componentDidUpdate(prevState){
//   // let patientlist = this.props && this.props.patient[0] && this.props.patient[0].patientList;
//   // patientlist= patientlist && patientlist[0];
//   // console.log("STATE",this.state);
 
//   if(this.prevState && this.prevState.finalSet != this.state && this.state.finalSet){ 
  
//     console.log("PRP",this.state.finalSet);
//     console.log("check");
//       // alert("updated");

//     //  this.props.updatePatient(patientlist)
    
//   }

// }

searchSpace=(event)=>{
  let keyword = event.target.value;
  this.setState({search:keyword})
}
logout=()=>{
  this.props.setLogin(setLogin('','',''));
}



  render() {
    const {showModal,showAddModal}=this.state
    const getRole = this.props && this.props.login[0] && this.props.login[0].login.role;
    console.log("DOC",getRole)
    let patientlist = this.props && this.props.patient[0] && this.props.patient[0].patientList;
    patientlist= patientlist && patientlist[0];
    console.log("PROPS", patientlist && patientlist[0]);
    console.log("PROPS", this.props);
    return (
      <div>
        <Link to='/'>Go to Home </Link>
        {getRole && getRole === 'doctor' || getRole && getRole === 'patient' ? <Link to='/' style={{padding:'20px'}} onClick={this.logout}>
                     Logout
                    </Link>:''}
       
        <>
        <Modal
          isOpen={showModal}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
        {/* <Update submit={this.submit} setPatient={this.props && this.props.setPatient}/> */}
          </Modal>

           {/* <Modal
          isOpen={showAddModal}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeAddModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
        <AddPatient add={this.add}/>
          </Modal> */}
          
          <p style={{ textAlign: 'center', color: 'blue', fontWeight: 'bold' }}>Patient List</p>
          <div>
            <Search/>
         
     
      </div>
          {/* <TableContainer style={{ padding: '20px' }} >
          <button onClick={this.add} style={{height:"100px",width:"100px"}}>Add Patient</button>
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
                  <TableCell align="center">Delete</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {patientlist && patientlist.map((entry, j) => (
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
                    <TableCell align="center"><button onClick={this.handleUpdate.bind(this, entry)} >Update</button></TableCell>
                    <TableCell align="center"><button onClick={this.handleDelete.bind(this, entry)}>Delete</button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}
        </>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  patient: [state.patient],
  login:[state.login]
});
const mapDispatchToProps = (dispatch) => ({
  setLogin: (email,password,role) =>
        dispatch(setLogin(email,password,role)),
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
)(PatientList);

