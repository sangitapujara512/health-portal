import React from 'react';
import { Link } from 'react-router-dom';
import pageNotFound from '../../../src/assets/PageNotfound.png';
import './styles.css'

const ComponentNotFound = () => (
    <div >
        <Link to='/'>
            <img className='pageImages' src={pageNotFound} className="set-height-width"/>
        </Link>
    </div>
);
export default ComponentNotFound;
