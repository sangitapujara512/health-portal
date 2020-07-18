import { SET_PATIENT,UPDATE_PATIENT } from '../constants';

const initialState = { 
  patientList:[{
    "FirstName": "John",
    "LastName": "Doe",
    "Mobile": 1111111111,
    "email": "john.doe@gmail.com",
    "Medicine": ["Crocin", "Cough Syrup"],
    "Diagnosys":["fever","throat pain"],
    "Address" : "Street 1",
    "City": "Mumbai",
    "State":"Mah",
    "Country":"India",
    "Pincode": 400080,
    },
    {
        "FirstName": "Ketty",
        "LastName": "Thomson",
        "Mobile": 2222222222,
        "email": "Ketty.Thomson@gmail.com",
        "Medicine": ["Domestal","Saridon"],
        "Diagnosys":["Stomach upset", "Head ache"],
        "Address" : "Street 2 ",
        "City": "Mumbai",
        "State":"Mah",
        "Country":"India",
        "Pincode": 400080,
        }
    
]
};

export default function setBrowserInfo(state = initialState, action) {
   
  switch (action.type) {
     
    case SET_PATIENT:
    console.log("LOGIN SET",state)
      return {
        ...state,
        patientList: [...state.patientList, action.payload.patientDetails[0]],
        
      };
      case UPDATE_PATIENT: 
      console.log("action.payload",action.payload)  
      alert("update");  
      return {
        ...state,
        patientList: [...state.patientList, action.payload.patientDetails[0]],
        
      };
    default:
      return state;
  }
}