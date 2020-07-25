import React from 'react'
import {
    Redirect,
    Link as Link,
  } from 'react-router-dom';
  import { useSelector,useDispatch } from 'react-redux'
  import {setLogin} from '../../actions/loginAction'

const Home = () => {
    const clickHandler =()=>{
        console.log("clickHandler");
    }
    const getRole = useSelector((state) => state.login && state.login.login && state.login.login.role)
    const getEmail = useSelector((state) => state.login && state.login.login && state.login.login.email)
    const dispatch=useDispatch();
    console.log("PROP login",getRole);
    const logout=()=>{
      dispatch(setLogin('','',''));
    }
  return (     
    // <div>        
    //   Welcome to Healthcare Portal
    <div style={{display:'flex'}}>
      {/* <Link to='/login'style={{padding:'20px'}}>
                        Login
                      </Link> */}
                      {(getRole === undefined || getRole == '') && <Link to='/login'style={{padding:'20px'}}>
                        Login
                      </Link>}
                    {getRole && getRole === 'patient' && <Link to='/patientprofile'style={{padding:'20px'}}>
                      My Profile
                    </Link>}
                    {getRole && getRole === 'doctor' && <Link to='/patientlist'style={{padding:'20px'}}>
                     patientlist
                    </Link>}
                    
                    {getRole && getRole === 'doctor' || getRole && getRole === 'patient' && getEmail !== ''? <Link to='/' style={{padding:'20px'}} onClick={logout}>
                     Logout
                    </Link>:''}
                    
                    </div>
     
    // </div>
   
    
  )
}

export default Home
