import React ,{useEffect} from 'react'
import {
    Redirect,
    Link as Link,
  } from 'react-router-dom';
  import { useSelector } from 'react-redux'
  import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { borderBottom } from '@material-ui/system';
import PatientDetails from './PatientDetails'
 
  

 function PatientProfile(props){
  const patientDetails = useSelector((state) => state.patient.patientList[0]);
  const userCredentials = useSelector((state) => state.login.login.email)

  let result = patientDetails && patientDetails.filter(patient => patient.email === userCredentials);
  let entry=result && result[0];
  console.log("result",entry)
  console.log("props location",props);
  const viewProfiledata=props.location && props.location.viewProfileProps && props.location.viewProfileProps.data;
  console.log(viewProfiledata);

  return (   
    <div>
         <Link to='/'>Home </Link>
         {result && result.length > 0 ? 
     <PatientDetails entry ={entry} showUpdate={true}/> 
          : viewProfiledata && viewProfiledata.id !== '' ? <PatientDetails entry ={viewProfiledata} showUpdate={false}/>: "Your record is not yet created"}
    </div>
  )
}

export default PatientProfile
