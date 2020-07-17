import {
    SET_PATIENT,    
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