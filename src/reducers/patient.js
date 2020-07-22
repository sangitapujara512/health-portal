import { SET_PATIENT,UPDATE_PATIENT,DELETE_PATIENT,ADD_PATIENT } from '../constants';

const initialState = { 
  patientList:[   
]
};

export default function setBrowserInfo(state = initialState, action) {
   
  switch (action.type) {
     
    case SET_PATIENT:
    console.log("SET_PATIENT",action)
    console.log("SET_PATIENT",action)
    
      return {
        ...state,
        // patientList: [...state.patientList, action.payload.patientDetails],
          patientList: [...state.patientList, action.payload.patientDetails],
        
      };
      case ADD_PATIENT:
    
    console.log("ADD red",action.payload.patientDetails)
    const abc= action.payload.patientDetails[0];
    
      return {
        ...state,
        patientList: [action.payload.patientDetails],
        // patientList: [action.payload.patientDetails[0]],
        
      };
      case DELETE_PATIENT:
    console.log("DELE",action.payload.patientDetails)
      return {
        ...state,
        patientList: [action.payload.patientDetails],
        
      };
      case UPDATE_PATIENT: 
      // console.log("action.payload",action.payload)  
      // console.log("action.payload",action.payload)
      // const abc={
                
      //   // patientList: [action.payload.patientDetails],
      //   ...state,        
      //   patientList: [action.payload.patientDetails],
      // }
      // console.log("abc",abc);
      return {
                
        // patientList: [action.payload.patientDetails],
        ...state,        
        patientList: [action.payload.patientDetails],
      };
    default:
      return state;
  }
}