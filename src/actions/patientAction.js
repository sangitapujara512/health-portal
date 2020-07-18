import {
    SET_PATIENT,
    UPDATE_PATIENT,    
  } from '../constants';
  
  // Added for Login
  export function setPatient(patientDetails) {  
      console.log("credentials",patientDetails)
    return {
      type: SET_PATIENT,
      payload: {
        patientDetails
      },
    };
  }


  // Update Patient
  export function updatePatient(patientDetails) {  
    console.log("updatePatient",patientDetails)
  return {
    type: UPDATE_PATIENT,
    payload: {
      patientDetails
    },
  };
}