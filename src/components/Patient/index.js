import React from 'react'
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
 
  

 function Patient(){
  const patientDetails = useSelector((state) => state.patient.patientList[0]);
  const userCredentials = useSelector((state) => state.login.login.email)

  let result = patientDetails && patientDetails.filter(patient => patient.email === userCredentials);
  let entry=result && result[0];
  console.log("result",entry)
  

  return (
   
    <div>
         <Link to='/'>Home </Link>
         {result && result.length > 0 ? 
     <TableContainer style={{ padding: '20px' }} >
         
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
               
                  <TableRow key={entry && entry.FirstName}>
                    <TableCell component="th" scope="row">
                      {entry && entry.FirstName}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {entry && entry.Mobile}
                    </TableCell>
                    <TableCell align="center">{entry && entry.email}</TableCell>
                    <TableCell align="center">

                     
                        <TableCell component="th" scope="row" style={{ display: "grid", borderBottom: 'none', textAlign: 'center' }} >
                          {/* {item} */}
                        </TableCell>

                     
                    </TableCell>


                    <TableCell align="center">

                    
                        <TableCell component="th" scope="row" style={{ display: "grid", borderBottom: 'none', textAlign: 'center' }} >
                          {/* {item} */}
                        </TableCell>

                    
                    </TableCell>

                    <TableCell align="center">{entry && entry.Address}</TableCell>
                    <TableCell align="center">{entry && entry.City}</TableCell>
                    <TableCell align="center">{entry && entry.State}</TableCell>
                    <TableCell align="center">{entry && entry.Country}</TableCell>
                    <TableCell align="center">{entry && entry.Pincode}</TableCell>
                    <TableCell align="center"><button  >Update</button></TableCell>
                   
                  </TableRow>
      
              </TableBody>
            </Table>
          </TableContainer>
          : "Your record is not yet created"}
    </div>
  )
}

export default Patient
