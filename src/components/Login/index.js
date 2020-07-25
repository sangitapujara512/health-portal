import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import "./styles.css";
import {connect} from 'react-redux'
import {setLogin} from '../../actions/loginAction'
import {setPatient} from '../../actions/patientAction'
import {
    Redirect,
    Link as Link,
  } from 'react-router-dom';  
  import { withToastManager } from 'react-toast-notifications';

// Validations added 
const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")    
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

class LoginForm extends React.PureComponent {
    constructor(props){
        super(props);
        this.state={
            ploggedIn:false,
            dloggedIn:false,
            wrongPassword:false,
           }
    }
    

  handleSubmit = (values, { setSubmitting }) => {

    // If patient has changed logged in then get changed password from sessionStorage
    const changedPassword=sessionStorage.getItem("password");

    // Data to be set initially on login
    const patientList=[{
      "id": 1,
      "FirstName": "John",
      "LastName": "Doe",
      "Mobile": 1111111111,
      "email": "john.doe@gmail.com",
      "Medicine": "Crocin Cough Syrup",
      "Diagnosys":"fever throat pain",
      "Address" : "Street 1",
      "City": "Mumbai",
      "State":"Mah",
      "Country":"India",
      "Pincode": 400080,
      },
      {
        "id": 2,
          "FirstName": "Ketty",
          "LastName": "Thomson",
          "Mobile": 2222222222,
          "email": "Ketty.Thomson@gmail.com",
          "Medicine": "Domestal Saridon",
          "Diagnosys":"Stomach upset Head ache",
          "Address" : "Street 2 ",
          "City": "Mumbai",
          "State":"Mah",
          "Country":"India",
          "Pincode": 400080,
          },
          {
            "id": 3,
              "FirstName": "Denis",
              "LastName": "Penk",
              "Mobile": 4444444444,
              "email": "Denis.Penk@gmail.com",
              "Medicine": "Domestal Saridon",
              "Diagnosys":"Stomach upset Head ache",
              "Address" : "Street 2 ",
              "City": "Mumbai",
              "State":"Mah",
              "Country":"India",
              "Pincode": 400080,
              }

      
  ]

    // If doctor logged in 
     if(values.password === 'Healthcare'){
         
         this.setState({
            dloggedIn:true
        });
        values.role="doctor"
        //  dispatch(setLogin("account","newValue"))
     this.props.setLogin(values.email,values.password,values.role);
     this.props.setPatient(patientList);
     }

    //  if patient logged in , if already password changed then check with updated password
     if(changedPassword && values.password === changedPassword){
        
        this.setState({
            ploggedIn:true
        });
        values.role="patient"        
     this.props.setLogin(values.email,values.password,values.role);
     this.props.setPatient(patientList);
     }
    //  If password not changed for patient then check if password is "Password"
     else if(!changedPassword && values.password === "Password"){
      
      this.setState({
          ploggedIn:true
      });
      values.role="patient"
      
   this.props.setLogin(values.email,values.password,values.role);
   this.props.setPatient(patientList);
   }
  //  If wrong password entered
     else {
    this.setState({
       wrongPassword:true
   });}   

     setSubmitting(false);
  };

  componentDidUpdate(props,prevState) {
    this.toastManager = props.toastManager;

    // Show notifications based on the login status
    if(this.state.dloggedIn !== prevState.dloggedIn){
      
      if(this.state.dloggedIn){
      this.toastManager.add("Doctor Login Success", {
        appearance: 'success',
        autoDismiss: true,
      });
    }
  }

  if(this.state.ploggedIn !== prevState.ploggedIn){
      
    if(this.state.ploggedIn){
    this.toastManager.add("Patient Login Success", {
      appearance: 'success',
      autoDismiss: true,
    });
  }
}

if(this.state.wrongPassword !== prevState.wrongPassword){
      
  if(this.state.wrongPassword){
  this.toastManager.add("Wrong Password Entered", {
    appearance: 'warning',
    autoDismiss: true,
  });
}
}
    
  }

  render() {   
       const {ploggedIn,dloggedIn}= this.state;

      //  redirect patient to patientprofile
       if (ploggedIn) {
        return <Redirect to='/patientprofile' />;
      }
      //  redirect doctor to patientlist   
      if (dloggedIn) {
        return <Redirect to='/patientlist' />;
      } 
    return (
      <>
        <div style={{alignSelf:'center'}}>
        <Link to='/'>Go to Home </Link>
        <h1>Login</h1>

        {/* Login form  */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={this.handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <label>
                Email: <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </label>
              <label>
                Password:
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </label>
              <button type="submit" disabled={isSubmitting}>
                Submit
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
    credentials: [state],
});
const mapDispatchToProps = (dispatch) => ({
    setLogin: (email,password,role) =>
        dispatch(setLogin(email,password,role)),
        setPatient: (patientDetails) =>
        dispatch(setPatient(patientDetails)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withToastManager(LoginForm));

