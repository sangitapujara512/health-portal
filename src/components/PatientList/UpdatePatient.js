import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import {connect} from 'react-redux'
import {    
    Link as Link,
  } from 'react-router-dom';  
  import {updatePatient,addPatient} from '../../actions/patientAction';
  import shortid from 'shortid';

  const loginSchema = Yup.object().shape({   
    
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


class UpdatePatient extends React.PureComponent {

    constructor(props){
        super(props);
        this.state={
            ploggedIn: false,
            dloggedIn:false,
           }
    }


    // Handle Update form Submit 
    handleUpdateSubmit = (values, { setSubmitting }) => {
        const propsData =this.props &&  this.props.propsData ;
        values.id=propsData.id;
      const patientUpdate = values;      
      const patientList=this.props.patient[0]
      // Remove id updated from the array
      const postUpdate=patientList.filter((patient)=>{
            return (patient.id !=patientUpdate.id)
      })
      
    // Add updated form to the post update array
      const finalUpdated= [...postUpdate,patientUpdate];

       // Trigger Update action
      this.props.updatePatient(finalUpdated)

      setSubmitting(false);
      this.props.closeUpdateModal();
    };

    // Handle Add form Submit
    handleAddSubmit = (values, { setSubmitting }) => {
        const patientAdd = values;
        const patientList=this.props.patient[0]
        const key=shortid.generate()
        values.id=key;

        const finalAdd=[...patientList,patientAdd]
        // Trigger Add action
      this.props.addPatient(finalAdd)  
        
         setSubmitting(false);
        this.props.closeAddModal();
        
      };

  render() {
      const {operation}=this.props
     
     let propsData =this.props &&  this.props.propsData ;
     if (operation === "add"){
        propsData= "";
     }
     const fName=propsData.FirstName
    return (
      <>
        
        <div style={{alignSelf:'center'}}>
        <Link to='/'>Go to Home </Link>
              <Formik
          initialValues={{ 
          FirstName : fName,
          LastName : propsData.LastName,
          Mobile : propsData.Mobile,
          email: propsData.email,
          Medicine : propsData.Medicine,
          Diagnosys : propsData.Diagnosys,
          Address : propsData.Address,
          City : propsData.City,
          State : propsData.State,
          Country : propsData.Country,
          Pincode : propsData.Pincode,         
        }}
          validationSchema={loginSchema}
          onSubmit={operation === "update" ? this.handleUpdateSubmit: operation === "add" ? this.handleAddSubmit : ''}
        >
          {({ isSubmitting }) => (
            <Form>
              <label>
              FirstName: <Field type="text" name="FirstName" values={propsData && propsData.FirstName}/>
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
              Medicine: <Field type="text" name="Medicine" />
                <ErrorMessage name="Medicine" component="div" />
              </label>
              <label>
              Diagnosis: <Field type="text" name="Diagnosys" />
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
              <button type="submit" disabled={isSubmitting} onClick={this.props.closeUpdateModal}>
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
  updatePatient: (patientDetails) =>
  dispatch(updatePatient(patientDetails)),
  addPatient: (patientDetails) =>
  dispatch(addPatient(patientDetails)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePatient);

