import React from 'react'
import {
  Link as Link,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setLogin } from '../../actions/loginAction'

const Home = () => {

  // Get login details
  const getLogin = useSelector((state) => state.login && state.login.login)
  const getRole = getLogin && getLogin.role;
  const getEmail = getLogin && getLogin.email;

  const dispatch = useDispatch();

  // On logout setLogin to null
  const logout = () => {
    dispatch(setLogin('', '', ''));
  }
  return (
    <div>
      <p style={{ textAlign: 'center' }}> Welcome to Healthcare Portal</p>
      <div style={{ display: 'flex' }}>
        {(getRole === undefined || getRole == '') && <Link to='/login' style={{ padding: '20px' }}>
          Login
                      </Link>}
        {/* If patient logged in then only show My profile */}
        {getRole && getRole === 'patient' && <Link to='/patientprofile' style={{ padding: '20px' }}>
          My Profile
                    </Link>}
        {/* If Doctor logged in then only show patientlist */}
        {getRole && getRole === 'doctor' && <Link to='/patientlist' style={{ padding: '20px' }}>
          patientlist
                    </Link>}
        {/* If Doctor or patient logged in then only show Logout link */}
        {getRole && getRole === 'doctor' || getRole && getRole === 'patient' && getEmail !== '' ? <Link to='/' style={{ padding: '20px' }} onClick={logout}>
          Logout
                    </Link> : ''}
      </div>
    </div>
  )
}

export default Home
