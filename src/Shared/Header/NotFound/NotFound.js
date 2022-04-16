import React from 'react';
import sleeping from '../../../images/4O4.jpg'
const NotFound = () => {
    return (
        <div className='text-center'>
            <h2 className='text-primary'>Mecanic is sleeping</h2>
            <img className=' h-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;