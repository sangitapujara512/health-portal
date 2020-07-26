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
  import Grid from '@material-ui/core/Grid';
  import Container from '@material-ui/core/Container';

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
          "email": "ketty.thomson@gmail.com",
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
              "email": "denis.penk@gmail.com",
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
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}   
             
            >
            <Container
              component='main'
              maxWidth='xs'
              >
                <h1>Log In </h1>
        {/* Login form  */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={this.handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <label>
                Email: <Field type="email" name="email" className='text-format'/>
                <ErrorMessage name="email" component="div" className='errorStyle'/>
              </label>
              <label>
                Password:
                <Field type="password" name="password" className='text-format' />
                <ErrorMessage name="password" component="div" className='errorStyle'/>
              </label>
              <button type="submit" disabled={isSubmitting}
              className="customButton"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
        {/* </div> */}
            </Container>
          </Grid>          
       
        <Grid>          
        </Grid>
     
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

