import { SET_LOGIN } from '../constants';

const initialState = {
  login: [],
//   patientList:[{
//     "FirstName": "John",
//     "LastName": "Doe",
//     "Mobile": 1111111111,
//     "email": "john.doe@gmail.com",
//     "Medicine": ["Crocin", "Cough Syrup"],
//     "Diagnosys":["fever","throat pain"],
//     "Address" : "Street 1",
//     "City": "Mumbai",
//     "State":"Mah",
//     "Country":"India",
//     "Pincode": 400080,
//     },
//     {
//         "FirstName": "Ketty",
//         "LastName": "Thomson",
//         "Mobile": 2222222222,
//         "email": "Ketty.Thomson@gmail.com",
//         "Medicine": ["Domestal","Saridon"],
//         "Diagnosys":["Stomach upset", "Head ache"],
//         "Address" : "Street 2 ",
//         "City": "Mumbai",
//         "State":"Mah",
//         "Country":"India",
//         "Pincode": 400080,
//         }
    
// ]
};

export default function setBrowserInfo(state = initialState, action) {
    // console.log("action",state)
  switch (action.type) {
     
    case SET_LOGIN:
    console.log("LOGIN SET",state)
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
}