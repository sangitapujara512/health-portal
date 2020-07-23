import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
// import "./styles.css";
import {connect} from 'react-redux'
import {setLogin} from '../../actions/loginAction'
// import {setPatient} from '../../actions/patientAction'
import store from '../../store'
import {
    Redirect,
    Link as Link,
  } from 'react-router-dom';
  import Patient from '../Patient'
  import Doctor from '../Doctor'
  import {setPatient,deletePatient,updatePatient,addPatient} from '../../actions/patientAction';
  import shortid from 'shortid';

  


  const loginSchema = Yup.object().shape({
    // password: Yup.string()
    //   .min(8, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("Required")    
    //   .matches(
    //       /^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/,
    //       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    //     ),      
        FirstName: Yup.string()            
      .required("Required"),
      LastName: Yup.string()        
      .required("Required"),
      Mobile: Yup.string()            
      .required("Required")
      .min(10, "Enter 10 digits phone number")
      .max(10, "Enter 10 digits phone number")
      .matches(
        /^[0-9]*$/ ,"Enter 10 digits phone number"),
        email: Yup.string()
    .email("Invalid email")
    .required("Required") ,
    Medicine: Yup.string()   
    .required("Required"),
    Diagnosys:Yup.string()    
    .required("Required"),
    Address:Yup.string()    
    .required("Required"),
    City:Yup.string()    
    .required("Required"),
    State:Yup.string()    
    .required("Required"),
    Country:Yup.string()    
    .required("Required"),
    Pincode: Yup.string()            
    .required("Required")
    .min(6, "Enter 6 digits phone number")
    .max(6, "Enter 6 digits phone number")
    .matches(
      /^[0-9]*$/ ,"Enter 6 digits phone number"),


        

  });
class AddPatient extends React.PureComponent {

    constructor(props){
        super(props);
        this.state={
            ploggedIn: false,
            dloggedIn:false,
           }
    }


    // Handle form Submit
    handleSubmit = (values, { setSubmitting }) => {
      const patientAdd = values;
      const patientList=this.props.patient[0]
      const key=shortid.generate()
      values.id=key;
      console.log("values",values.id);

      const finalAdd=[...patientList,patientAdd]
        console.log("finalAdd",finalAdd);
    
    console.log(patientList);
    this.props.addPatient(finalAdd)

      //  this.props.setLogin(values.email,values.password);
      //  this.props.setPatient(patientList);
       setSubmitting(false);
      this.props.closeAddModal();
      
    };

    

 // const patientAdd={
  //   "id": key,
  //   "FirstName": key,
  //   "LastName": "Doe",
  //   "Mobile": 1111111111,
  //   "email": "john.doe@gmail.com",
  //   "Medicine": ["Crocin", "Cough Syrup"],
  //   "Diagnosys":["fever","throat pain"],
  //   "Address" : "Street 1",
  //   "City": "Mumbai",
  //   "State":"Mah",
  //   "Country":"India",
  //   "Pincode": 400080,
  //   }

  render() { 
    console.log("prop update",this.prop);  
      
    return (
      

      <>
        
        
        <div style={{alignSelf:'center'}}>
        <Link to='/'>Go to Home </Link>
       
        <button type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
              <Formik
          initialValues={{ 
          FirstName : "",
          LastName : "",
          Mobile : "",
          email: "",
          Medicine : "",
          Diagnosys : "",
          Address : "",
          City : "",
          State : "",
          Country : "",
          Pincode : "",         
        }}
          validationSchema={loginSchema}
          onSubmit={this.handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <label>
              FirstName: <Field type="text" name="FirstName" />
                <ErrorMessage name="FirstName" component="div" />
              </label>
              <label>
              LastName: <Field type="text" name="LastName" />
                <ErrorMessage name="LastName" component="div" />
              </label>
              <label>
              Mobile: <Field type="text" name="Mobile" />
                <ErrorMessage name="Mobile" component="div" />
              </label>
              <label>
              Email: <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </label>
              <label>
              Medicine: <Field type="text" name="Medicine" placeholder="Enter space seperated values"/>
                <ErrorMessage name="Medicine" component="div" />
              </label>
              <label>
              Diagnosis: <Field type="text" name="Diagnosys" placeholder="Enter space seperated values "/>
                <ErrorMessage name="Diagnosys" component="div" />
              </label>
              <label>
              Address: <Field type="text" name="Address" />
                <ErrorMessage name="Address" component="div" />
              </label>
              <label>
              City: <Field type="text" name="City" />
                <ErrorMessage name="City" component="div" />
              </label>
              
              <label>
              State: <Field type="text" name="State" />
                <ErrorMessage name="State" component="div" />
              </label>
              <label>
              Country: <Field type="text" name="Country" />
                <ErrorMessage name="Country" component="div" />
              </label>
              <label>
              Pincode: <Field type="text" name="Pincode" />
                <ErrorMessage name="Pincode" component="div" />
              </label>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
              <button type="submit" disabled={isSubmitting} onClick={this.props.closeAddModal}>
                Cancel
              </button>
            </Form>
          )}
        </Formik>

        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  patient: [state.patient.patientList[0]],
});
const mapDispatchToProps = (dispatch) => ({
  
  addPatient: (patientDetails) =>
  dispatch(addPatient(patientDetails)),
  
  

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPatient);

