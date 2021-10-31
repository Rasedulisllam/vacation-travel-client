import React from 'react';
import { Card } from 'react-bootstrap';
import { MdOutlineLocationOn } from 'react-icons/md';

const Destination = (props) => {
    const {name,img,tours}=props.item
    return (
        <Card className='destination-card'>
        <Card.Img variant="top" className='destination-card-img h-100' src={img} />
        <div className='destination-card-details text-start ms-3'>
            <div className='d-flex '>
                <h5 className='text-white'>
                <MdOutlineLocationOn className='me-1'/>
                    {name}
                </h5>
                <p className='text-warning ms-3'>{tours} tours</p>
            </div>
            <span className='text-center d-block text-decoration-none text-warning' >View all tour</span>
        </div>
    </Card>
    );
};

export default Destination;