import React,{useEffect} from 'react'
import {
    Redirect,
    Link as Link,
  } from 'react-router-dom';
  import { useSelector,useDispatch } from 'react-redux'
  import {setLogin} from '../../actions/loginAction'

const Logout = () => {
    // const clickHandler =()=>{
    //     console.log("clickHandler");
    // }
    const logout=()=>{
      // console.log("PROP COMP",getRole);
      dispatch(setLogin('','',''));
    }
    useEffect(logout,[])
    // const getRole = useSelector((state) => state.login && state.login.login && state.login.login.role)
    // const getEmail = useSelector((state) => state.login && state.login.login && state.login.login.email)
    const dispatch=useDispatch();
    
    
  return (     
    <div></div>
   
    
  )
}

export default Logout
