
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import banner1 from '../../../images/benner/benner1.png'
import banner2 from '../../../images/benner/benner2.png'
import banner3 from '../../../images/benner/benner3.png'
import { Button, Col, Container, Row } from 'react-bootstrap';

const Benner = () => {
    return (
        <Carousel infiniteLoop autoPlay showThumbs={false} showIndicators={false} autoFocus={false}>
                <div>
                    <img src={banner1} alt='slider images' />
                    <Container className="legend bg-transparent" style={{top:'30%'}} >
                        <Row>
                            <Col md={6} className='text-start ms-5'>
                                <h1 className='fs-1  text-warning'>Find your parfect</h1>
                                <h1 className='text-uppercase' style={{fontSize:'84px'}}>Vacation</h1>
                                <p className='fs-5'>Bern, switzerland</p>
                                <Button variant="outline-warning px-4">Detail..</Button>
                            </Col>
                            <Col md={6}></Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    <img src={banner2} alt='slider images' />
                    <Container className="legend bg-transparent" style={{top:'30%'}} >
                        <Row>
                            <Col md={7} className='text-start ms-5 '>
                                <h1 className='text-uppercase text-primary' style={{fontSize:'84px'}}>special</h1>
                                <h1 className='text-uppercase fs-1' >5 days in italy</h1>
                                <p className='fs-5'>Italy , Rome</p>
                                <Button variant="primary px-4">Detail..</Button>
                            </Col>
                            <Col md={5}></Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    <img src={banner3} alt='slider images' />
                    <Container className="legend bg-transparent" style={{top:'30%'}} >
                        <Row>
                            <Col md={6} className='text-start ms-5'>
                                <h1 className='fs-1 text-warning text-uppercase'>Open your eyes to</h1>
                                <h1 className='text-uppercase' style={{fontSize:'84px'}}>The hidden world</h1>
                                <p className='fs-5'>Bern, switzerland</p>
                                <Button variant="outline-warning px-4">Detail..</Button>
                            </Col>
                            <Col md={6}></Col>
                        </Row>
                    </Container>
                </div>
        </Carousel>
    );
};

export default Benner;