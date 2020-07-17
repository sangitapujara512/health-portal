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
import Patient from './components/Patient'
import Doctor from './components/Doctor'
import Home from './components/Home'

function App() {
  console.log("store",store.getState());
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>  
      <Route path='/' exact component={Home} />
      <Route path='/login' exact component={Login} />      
      <Route path='/patient' exact component={Patient} />
      <Route path='/doctor' exact component={Doctor} />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
