


import {
    SET_LOGIN,    
  } from '../constants';
  
  // Added for Login
  export function setLogin(email,password) {  
      console.log("credentials",email,password)
    return {
      type: SET_LOGIN,
      payload: {
        email,password,
      },
    };
  }
  