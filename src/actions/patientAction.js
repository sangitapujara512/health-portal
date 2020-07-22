import {
    SET_PATIENT,
    UPDATE_PATIENT,
    DELETE_PATIENT,
    ADD_PATIENT    
  } from '../constants';
  
  // Added for Login
  export function setPatient(patientDetails) {  
      console.log("SET patient action",patientDetails)
    return {
      type: SET_PATIENT,
      payload: {
        patientDetails
      },
    };
  }

  export function addPatient(patientDetails) {  
    console.log("add patient action",patientDetails)
  return {
    type: ADD_PATIENT,
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

// Update Patient
export function deletePatient(patientDetails) {  
  console.log("updatePatient",patientDetails)
return {
  type: DELETE_PATIENT,
  payload: {
    patientDetails
  },
};
}