import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return(
    <>
        <div className="title center text-center">
            <h3 className="text-center">Welcome</h3>
        </div>
        <div className="title center text-center">
            <Link to='/Login' className='btn'>Login</Link>
        </div>
    </>
    );
}
export default Welcome;