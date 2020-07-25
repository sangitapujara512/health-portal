import { SET_PATIENT, UPDATE_PATIENT, DELETE_PATIENT, ADD_PATIENT } from '../constants';

const initialState = {
  patientList: [
  ]
};

export default function setBrowserInfo(state = initialState, action) {

  switch (action.type) {
    case SET_PATIENT:
      return {
        ...state,
        patientList: [...state.patientList, action.payload.patientDetails],
      };
    case ADD_PATIENT:
      return {
        ...state,
        patientList: [action.payload.patientDetails],
      };
    case DELETE_PATIENT:
      return {
        ...state,
        patientList: [action.payload.patientDetails],
      };
    case UPDATE_PATIENT:
      return {
        ...state,
        patientList: [action.payload.patientDetails],
      };
    default:
      return state;
  }
}