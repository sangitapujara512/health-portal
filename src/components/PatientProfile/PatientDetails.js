import React, { useState } from 'react'
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
import Modal from 'react-modal';
import UpdatePassword from '../Login/UpdatePassword'

function PatientDetails({ entry, showUpdate }) {

  const getEmail = useSelector((state) => state.login && state.login.login && state.login.login.email)

  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState(getEmail)

  const handleUpdatePassword = () => {
    setShowModal(true);
  }
  const closeUpdateModal = () => {
    setShowModal(false);

  }
  return (
    <div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeUpdateModal}
        contentLabel="Example Modal"  >
        <UpdatePassword closeUpdateModal={closeUpdateModal} email={email} />

      </Modal>
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
              {showUpdate == true && <TableCell align="center">Update</TableCell>}
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
                  {entry && entry.Medicine}
                </TableCell>
              </TableCell>
              <TableCell align="center">
                <TableCell component="th" scope="row" style={{ display: "grid", borderBottom: 'none', textAlign: 'center' }} >
                  {entry && entry.Diagnosys}
                </TableCell>
              </TableCell>
              <TableCell align="center">{entry && entry.Address}</TableCell>
              <TableCell align="center">{entry && entry.City}</TableCell>
              <TableCell align="center">{entry && entry.State}</TableCell>
              <TableCell align="center">{entry && entry.Country}</TableCell>
              <TableCell align="center">{entry && entry.Pincode}</TableCell>              
              {showUpdate && <TableCell align="center" ><button onClick={handleUpdatePassword} className="customButton">Update Password</button></TableCell>}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default PatientDetails
