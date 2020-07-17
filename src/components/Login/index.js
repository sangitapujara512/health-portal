import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import "./styles.css";

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
  handleSubmit = (values, { setSubmitting }) => {
     if(values.password === 'Healthcare'){
         console.log("Admin")
     }
     if(values.password === 'Password'){
        console.log("patient")
     }

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  render() {
    return (
      <>
        
        <div style={{alignSelf:'center'}}>
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

export default LoginForm;
