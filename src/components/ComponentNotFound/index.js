import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFound from '../../../src/assets/PageNotfound.png';


const ComponentNotFound = () => (
  <div className='externalContainer contactPadding'>
    <Link to='/'>    
      <img className='pageImages' src={pageNotFound} />
    </Link>    
  </div>
);
export default ComponentNotFound;
