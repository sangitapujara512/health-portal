import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import "./styles.css";
import {connect} from 'react-redux'
import {setLogin} from '../../actions/loginAction'
import {
    Redirect,
    Link as Link,
  } from 'react-router-dom';  
  import { withToastManager } from 'react-toast-notifications';

  const Schema = Yup.object().shape({
    password: Yup.string().required("This field is required"),
    changepassword: Yup.string().when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      )
    })
  });

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")    
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
      changepassword: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        )
      }),


      password: Yup.string()
      .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")    
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    changepassword: Yup.string().when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      )
    }),

      
    
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),

    

});

class UpdatePassword extends React.PureComponent {

    constructor(props){
        super(props);
        this.state={
            // ploggedIn:false,
            // dloggedIn:false,
            // wrongPassword:false,
            passwordChanged:false
           }
    }
    

  handleSubmit = (values, { setSubmitting }) => {
    sessionStorage.setItem("password", values.password);
    this.props.setLogin(values.email,values.password,values.role);
     setSubmitting(false);
     this.setState({
      passwordChanged: true
     })
     this.props.closeUpdateModal();
  };
//   componentDidUpdate(props,prevState) {
//     this.toastManager = props.toastManager;
//     if(this.state.dloggedIn !== prevState.dloggedIn){
      
//       if(this.state.dloggedIn){
//       this.toastManager.add("Doctor Login Success", {
//         appearance: 'success',
//         autoDismiss: true,
//       });
//     }
//   }

//   if(this.state.ploggedIn !== prevState.ploggedIn){
      
//     if(this.state.ploggedIn){
//     this.toastManager.add("Patient Login Success", {
//       appearance: 'success',
//       autoDismiss: true,
//     });
//   }
// }

// if(this.state.wrongPassword !== prevState.wrongPassword){
      
//   if(this.state.wrongPassword){
//   this.toastManager.add("Wrong Password Entered", {
//     appearance: 'warning',
//     autoDismiss: true,
//   });
// }
// }

    

    
//   }
handleChange=()=>{}

  render() {  
    const {passwordChanged} =this.state
    console.log("cred",this.props);
    const email=this.props.email;
    if (passwordChanged) {
      return <Redirect to='/' />;
    }   
    return (
      

      <>
        
        
        <div style={{alignSelf:'center'}}>
        <Link to='/'>Go to Home </Link>
        <h1>Update password</h1>
        <Formik
          initialValues={{ email: email, password: "" }}
          validationSchema={loginSchema}
          onSubmit={this.handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <label>
                Email: <Field type="email" name="email" onChange={this.handleChange}/>
                <ErrorMessage name="email" component="div" />
              </label>
              <label>
                Password:
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </label>
              <label>
                Confirm Password:
                <Field type="password" name="changepassword" />
                <ErrorMessage name="changepassword" component="div" />
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

// const mapStateToProps = (state) => ({
//     login: [state.login],
// });
const mapDispatchToProps = (dispatch) => ({
    setLogin: (email,password,role) =>
        dispatch(setLogin(email,password,role)),        
});
export default connect(
    null,
    mapDispatchToProps
)(withToastManager(UpdatePassword));

