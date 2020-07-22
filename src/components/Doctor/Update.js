// import React from 'react'
// import {setPatient,deletePatient,updatePatient} from '../../actions/patientAction';

// const Update = () => {
//   // console.log("update",patientlist);
//     const obj=[
//     {
//       "id": 2,
//         "FirstName": "Sang",
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
        
        
//     ]
//     const submit =()=>{

//     }
//   return (
//     <div>
//       <form>
//           <button onClick={submit}>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Update


import React, { Component } from 'react'
import {setPatient,deletePatient,updatePatient} from '../../actions/patientAction';
import { connect } from 'react-redux';
const obj=[
  {
    "id": 2,
      "FirstName": "Sang",
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

class Update extends Component {

  constructor(){
    super()
    this.state={
           
    }
  }



  submit1=(e)=>{
    alert("")
     console.log("e",e);
    // alert("patientDetails");
    // this.setState({
    //   updated:"true",
    //   updatedDetails:patientDetails
    // });
  
    // let  patientList=this.props && this.props.patient[0] && this.props.patient[0].patientList;
    // patientList=patientList[0];
    //   console.log("delete",patientList);
    //   console.log("patientDetails",patientDetails);
    //   const postUpdate=patientList.filter((patient)=>{
    //     console.log("patient",patient);
    //     return patient.id !=patientDetails[0].id
       
    //   })
    //   console.log("postUpdate",postUpdate[0]);
    //   const finalUpdated= [...postUpdate,patientDetails[0] ];
     
    //   console.log("finalUpdated",finalUpdated);
    //   console.log("finalUpdated",finalUpdated);
     
    //   alert ("calling");
    //    this.props.updatePatient(finalUpdated)
    //   //  this.setState({finalSet:finalUpdated});
    console.log("obj",obj);
   
    this.props.setPatient(obj);
      
   
    
  }
  
  render() {
    console.log("update",this.props);
    return (
      <div>
        <p>UPDATE</p>
      <form>
          <button onClick={this.submit}>Submit</button>
      </form>
    </div>
    )
  }
}
const mapStateToProps = (state) => ({
  patient: [state.patient],
});
const mapDispatchToProps = (dispatch) => ({
  updatePatient: (patientDetails) =>
  dispatch(updatePatient(patientDetails)),  
  

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Update);



