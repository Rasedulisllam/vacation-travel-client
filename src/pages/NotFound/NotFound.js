import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/benner/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='w-50' src={img} alt="" />
            <Link className='d-block my-4' to='/'>
            <Button variant='warning'>Go Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;