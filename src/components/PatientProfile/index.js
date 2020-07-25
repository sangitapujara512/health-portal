import React from 'react'
import {
    Link as Link,
  } from 'react-router-dom';
  import { useSelector } from 'react-redux' 
import PatientDetails from './PatientDetails'
import { useDispatch } from 'react-redux'
import {setLogin} from '../../actions/loginAction' 
  
// Use same code to show patient profile when doctor or patient logges in
// If patient logs in show only his profile
// If doctor logs in, based on View profile click pass data and show the details in Tanular form 
// Tabular for data shown by component PatientDetails

 function PatientProfile(props){

  // Get the details when patient logs in,
  // based on his email id search in records and show the records from the database / json

  const patientDetails = useSelector((state) => state.patient.patientList[0]);
  const getRole = useSelector((state) => state.login && state.login.login && state.login.login.role)  
  const userCredentials = useSelector((state) => state.login.login.email)
  let result = patientDetails && patientDetails.filter(patient => patient.email === userCredentials);
  let entry=result && result[0];
  
  // When doctor cliks view profile then pass data and capture using props.location and pass to PatientDetails to show 
  const viewProfiledata=props.location && props.location.viewProfileProps && props.location.viewProfileProps.data;
  
  const dispatch=useDispatch();
  const logout=()=>{
    dispatch(setLogin('','',''));
  }

  return (   
    <div>
         <Link to='/'>Go to Home </Link>
         <Link to='/' style={{padding:'20px'}} onClick={logout}>
                     Logout
                    </Link>
          {/* Based on user action show data */}
         {result && result.length > 0 ? 
     <PatientDetails entry ={entry} showUpdate={true}/> 
          : viewProfiledata && viewProfiledata.id !== '' ? <PatientDetails entry ={viewProfiledata} showUpdate={false}/>: "Your record is not yet created"}
    </div>
  )
}

export default PatientProfile
