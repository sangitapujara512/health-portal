import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
// import "./styles.css";
import {connect} from 'react-redux'
import {setLogin} from '../../actions/loginAction'
import {setPatient} from '../../actions/patientAction'
import store from '../../store'
import {
    Redirect,
    Link as Link,
  } from 'react-router-dom';
  import Patient from '../Patient'
  import Doctor from '../Doctor'




class AddPatient extends React.PureComponent {

    constructor(props){
        super(props);
        this.state={
            ploggedIn: false,
            dloggedIn:false,
           }
    }
    

  handleSubmit = () => {
    
    const patientList=[{
      "id": 5,
      "FirstName": "Dev",
      "LastName": "Puj",
      "Mobile": 555555555,
      "email": "dev.puj@gmail.com",
      "Medicine": ["Crocin", "Cough Syrup"],
      "Diagnosys":["fever","throat pain"],
      "Address" : "Street 1",
      "City": "Mumbai",
      "State":"Mah",
      "Country":"India",
      "Pincode": 400080,
      },
  ]
     
    //  dispatch(setLogin("account","newValue"))
    
    this.props.setPatient(patientList);
   
    
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
  };

  render() {   
      
    return (
      

      <>
        
        
        <div style={{alignSelf:'center'}}>
        <Link to='/'>Go to Home </Link>
       
        <button type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
    credentials: [state],
});
const mapDispatchToProps = (dispatch) => ({
    setLogin: (email,password) =>
        dispatch(setLogin(email,password)),
        setPatient: (patientDetails) =>
        dispatch(setPatient(patientDetails)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddPatient);

// export default LoginForm;
