import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import store from './store'
import { Provider } from 'react-redux';
import { Form, Field } from 'formik'
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import PatientProfile from './components/PatientProfile'
import PatientList from './components/PatientList'
import Home from './components/Home'

function App() {
  console.log("store",store.getState());
  return (
    <div className="App">
      <Provider store={store}>
      <ToastProvider>
      <BrowserRouter>  
      <Route path='/' exact component={Home} />
      <Route path='/login' exact component={Login} />      
      <Route path='/patientprofile' exact component={PatientProfile} />
      <Route path='/patientlist' exact component={PatientList} />
      </BrowserRouter>
      </ToastProvider>
      </Provider>
    </div>
  );
}

export default App;
