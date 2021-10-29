import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import {MdOutlineLocationOn} from 'react-icons/md'
import './Destinations.css'

const Destinations = () => {
    return (
        <div className='mb-5'>
            <Container className='text-start mt-5'>
                <h1>
                    <MdOutlineLocationOn className='text-primary'></MdOutlineLocationOn> Popular Destinations
                </h1>
                <p className='w-50 ms-2 text-muted'>What's on your travel bucket list? If you're like most people, the more you travel, the more places you add to your bucket list.</p>
            </Container>
            <div className='mt-5'>
            <CardGroup className='rounded-0'>
                <Card className='destination-card'>
                    <Card.Img variant="top" className='destination-card-img h-100' src="https://i.ibb.co/Krkj7CY/finland.jpg" />
                    <div className='destination-card-details text-start ms-3'>
                        <div className='d-flex '>
                            <h5 className='text-white'>
                            <MdOutlineLocationOn className='me-1'/>
                            South America
                            </h5>
                            <p className='text-warning ms-3'>4 tours</p>
                        </div>
                        <span className='text-center d-block text-decoration-none text-warning' >View all tour</span>
                    </div>
                </Card>
                <Card className='destination-card'>
                    <Card.Img variant="top" className='destination-card-img h-100' src="https://i.ibb.co/Krkj7CY/finland.jpg" />
                    <div className='destination-card-details text-start ms-3'>
                        <div className='d-flex '>
                            <h5 className='text-white'>
                            <MdOutlineLocationOn className='me-1'/>
                            South America
                            </h5>
                            <p className='text-warning ms-3'>4 tours</p>
                        </div>
                        <span className='text-center d-block text-decoration-none text-warning' >View all tour</span>
                    </div>
                </Card>
                <Card className='destination-card'>
                    <Card.Img variant="top" className='destination-card-img h-100' src="https://i.ibb.co/Krkj7CY/finland.jpg" />
                    <div className='destination-card-details text-start ms-3'>
                        <div className='d-flex '>
                            <h5 className='text-white'>
                            <MdOutlineLocationOn className='me-1'/>
                            South America
                            </h5>
                            <p className='text-warning ms-3'>4 tours</p>
                        </div>
                        <span className='text-center d-block text-decoration-none text-warning' >View all tour</span>
                    </div>
                </Card>
                <Card className='destination-card'>
                    <Card.Img variant="top" className='destination-card-img h-100' src="https://i.ibb.co/Krkj7CY/finland.jpg" />
                    <div className='destination-card-details text-start ms-3'>
                        <div className='d-flex '>
                            <h5 className='text-white'>
                            <MdOutlineLocationOn className='me-1'/>
                            South America
                            </h5>
                            <p className='text-warning ms-3'>4 tours</p>
                        </div>
                        <span className='text-center d-block text-decoration-none text-warning' >View all tour</span>
                    </div>
                </Card>
                <Card className='destination-card'>
                    <Card.Img variant="top" className='destination-card-img h-100' src="https://i.ibb.co/Krkj7CY/finland.jpg" />
                    <div className='destination-card-details text-start ms-3'>
                        <div className='d-flex '>
                            <h5 className='text-white'>
                            <MdOutlineLocationOn className='me-1'/>
                            South America
                            </h5>
                            <p className='text-warning ms-3'>4 tours</p>
                        </div>
                        <span className='text-center d-block text-decoration-none text-warning' >View all tour</span>
                    </div>
                </Card>
                
                </CardGroup>
            </div>
        </div>
    );
};

export default Destinations;