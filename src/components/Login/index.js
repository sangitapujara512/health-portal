import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import "./styles.css";
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

class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state={
            ploggedIn: false,
            dloggedIn:false,
           }
    }
    

  handleSubmit = (values, { setSubmitting }) => {
    const obj=[{
        "FirstName": "Sang",
		"LastName": "Puj",
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
        
        
    ]
     if(values.password === 'Healthcare'){
         console.log("Admin")
         this.setState({
            dloggedIn:true
        });
     }
     if(values.password === 'Password'){
        console.log("patient")
        this.setState({
            ploggedIn:true
        });
     }
    //  dispatch(setLogin("account","newValue"))
     this.props.setLogin(values.email,values.password);
     this.props.setPatient(obj);
     setSubmitting(false);
    
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
  };

  render() {   
       const {ploggedIn,dloggedIn}= this.state

       console.log("PROPS",store.getState())
       if (ploggedIn) {
        return <Redirect to='/Patient' />;
      }   
      if (dloggedIn) {
        return <Redirect to='/Doctor' />;
      } 
    return (
      

      <>
        
        
        <div style={{alignSelf:'center'}}>
        <Link to='/'>Home </Link>
        <h1>Login</h1>
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
    setLogin: (email,password) =>
        dispatch(setLogin(email,password)),
        setPatient: (patientDetails) =>
        dispatch(setPatient(patientDetails)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

// export default LoginForm;
