import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaPlaneDeparture } from 'react-icons/fa';
import { GiPriceTag } from 'react-icons/gi';
import { RiCustomerService2Line } from 'react-icons/ri';
import './BulletPoint.css'

const BulletPoint = () => {
    return (
        <div style={{backgroundColor:'#0095ff', padding:'2rem 0'}}>
            <Container>
                <Row>
                    <Col md={4} className='text-start bulletItem text-white'>
                        <div>
                            <FaPlaneDeparture className='bullet-icon'></FaPlaneDeparture>
                        </div>
                        <div className='ms-4 pe-4'>
                            <h5>100+ DESTINATIONS</h5>
                            <p>Our expert team handpicked all destinations in this site</p>
                        </div>
                    </Col>
                    <Col md={4} className='text-start bulletItem text-white'>
                        <div>
                        <RiCustomerService2Line className='bullet-icon'></RiCustomerService2Line>
                        </div>
                        <div className='ms-4 pe-4' >
                            <h5>GREAT CUSTOMER</h5>
                            <p>We are here to help, before, during, and even after your trip.</p>
                        </div>
                    </Col>
                    <Col md={4} className='text-start bulletItem text-white'>
                        <div>
                        <GiPriceTag className='bullet-icon'></GiPriceTag>
                        </div>
                        <div className='ms-4 pe-4'>
                            <h5>BEST PRICE GUARANTEE</h5>
                            <p>Price match within 48 hours of order confirmation</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BulletPoint;