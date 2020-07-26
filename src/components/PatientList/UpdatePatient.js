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
        
        <div style={{alignSelf:'center', width:"50%"}}>
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
              FirstName: <Field type="text" name="FirstName" values={propsData && propsData.FirstName} className='text-format'/>
                <ErrorMessage name="FirstName" component="div" className='errorStyle'/>
              </label>
              <label>
              LastName: <Field type="text" name="LastName" className='text-format'/>
                <ErrorMessage name="LastName" component="div" className='errorStyle'/>
              </label>
              <label>
              Mobile: <Field type="text" name="Mobile" className='text-format'/>
                <ErrorMessage name="Mobile" component="div" className='errorStyle'/>
              </label>
              <label>
              Email: <Field type="email" name="email" className='text-format'/>
                <ErrorMessage name="email" component="div" className='errorStyle'/>
              </label>
              <label>
              Medicine: <Field type="text" name="Medicine" className='text-format'/>
                <ErrorMessage name="Medicine" component="div" className='errorStyle'/>
              </label>
              <label>
              Diagnosis: <Field type="text" name="Diagnosys" className='text-format'/>
                <ErrorMessage name="Diagnosys" component="div" className='errorStyle'/>
              </label>
              <label>
              Address: <Field type="text" name="Address" className='text-format'/>
                <ErrorMessage name="Address" component="div" className='errorStyle'/>
              </label>
              <label>
              City: <Field type="text" name="City" className='text-format'/>
                <ErrorMessage name="City" component="div" className='errorStyle'/>
              </label>
              
              <label>
              State: <Field type="text" name="State" className='text-format'/>
                <ErrorMessage name="State" component="div" className='errorStyle'/>
              </label>
              <label>
              Country: <Field type="text" name="Country" className='text-format'/>
                <ErrorMessage name="Country" component="div" className='errorStyle'/>
              </label>
              <label>
              Pincode: <Field type="text" name="Pincode" className='text-format'/>
                <ErrorMessage name="Pincode" component="div" className='errorStyle'/>
              </label>
              <button type="submit" disabled={isSubmitting} className="customButton">
                Submit
              </button>
              <button type="submit" disabled={isSubmitting} onClick={this.props.closeUpdateModal} className="customButton">
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

