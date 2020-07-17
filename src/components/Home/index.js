import React from 'react'
import {
    Redirect,
    Link as Link,
  } from 'react-router-dom';

const index = () => {
    const clickHandler =()=>{
        console.log("clickHandler");
    }
  return (     
    // <div>        
    //   Welcome to Healthcare Portal
      <Link to='/login'>
                        Login
                      </Link>
     
    // </div>
   
    
  )
}

export default index
