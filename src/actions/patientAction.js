import {
  SET_PATIENT,
  UPDATE_PATIENT,
  DELETE_PATIENT,
  ADD_PATIENT
} from '../constants';

// Set Patient
export function setPatient(patientDetails) {
  return {
    type: SET_PATIENT,
    payload: {
      patientDetails
    },
  };
}
// Add Patient
export function addPatient(patientDetails) {
  return {
    type: ADD_PATIENT,
    payload: {
      patientDetails
    },
  };
}
// Update Patient
export function updatePatient(patientDetails) {
  return {
    type: UPDATE_PATIENT,
    payload: {
      patientDetails
    },
  };
}

// Delete Patient
export function deletePatient(patientDetails) {
  return {
    type: DELETE_PATIENT,
    payload: {
      patientDetails
    },
  };
}