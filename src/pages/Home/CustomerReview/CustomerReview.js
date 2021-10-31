import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { MdOutlineRateReview } from 'react-icons/md';
import { ImQuotesLeft } from 'react-icons/im';
import customer1 from '../../../images/customer/customer1.png'
import customer2 from '../../../images/customer/customer2.png'
import customer3 from '../../../images/customer/customer3.png'

const CustomerReview = () => {
    return (
        <Container className='text-start my-5 '>
            <h1 className='my-4 py-4'>
                <MdOutlineRateReview className='text-primary'></MdOutlineRateReview> Customer Review
            </h1>
            <Row lg={3} className='g-4'>
                <Col>
                    <Card className='bg-info p-5 '>
                        <div>
                            <ImQuotesLeft className='fs-1 text-danger mb-3'></ImQuotesLeft>
                        </div>
                        <p className='text-muted'>The most wonderful experience! The land based element was very full on, so that made having most afternoons free on the river cruise element a nice relaxing.</p>
                        <div className='d-flex align-items-center'>
                            <div className='rounded-circle overflow-hidden me-4' style={{width:'80px',height:'80px'}}>
                                <img className='img-fluid' src={customer1} alt="" />
                            </div>
                            <div className='text-white'>
                                <h5 className='fw-bold text-uppercase'>luaka smith</h5>
                                <p>solo traveler</p>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className='bg-info p-5 '>
                        <div>
                            <ImQuotesLeft className='fs-1 text-danger mb-3'></ImQuotesLeft>
                        </div>
                        <p className='text-muted'>The most wonderful experience! The land based element was very full on, so that made having most afternoons free on the river cruise element a nice relaxing.</p>
                        <div className='d-flex align-items-center'>
                            <div className='rounded-circle overflow-hidden me-4' style={{width:'80px',height:'80px'}}>
                                <img className='img-fluid' src={customer2} alt="" />
                            </div>
                            <div className='text-white'>
                                <h5 className='fw-bold text-uppercase'>jane deo</h5>
                                <p>solo traveler</p>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className='bg-info p-5 '>
                        <div>
                            <ImQuotesLeft className='fs-1 text-danger mb-3'></ImQuotesLeft>
                        </div>
                        <p className='text-muted'>The most wonderful experience! The land based element was very full on, so that made having most afternoons free on the river cruise element a nice relaxing.</p>
                        <div className='d-flex align-items-center'>
                            <div className='rounded-circle overflow-hidden me-4' style={{width:'80px',height:'80px'}}>
                                <img className='img-fluid' src={customer3} alt="" />
                            </div>
                            <div className='text-white'>
                                <h5 className='fw-bold text-uppercase'>jhon smith</h5>
                                <p>solo traveler</p>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomerReview;