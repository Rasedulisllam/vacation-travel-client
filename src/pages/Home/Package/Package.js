import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import {MdOutlineWatchLater} from 'react-icons/md'
import './Package.css'
import { useHistory } from 'react-router';


const Package = (props) => {
    const history=useHistory()
    const {name,price,img,days,rating ,review,location,_id}=props.packag


    // handle book now button
    const handleBookNow =(id)=>{
        history.push(`/packageDetails/${id}`)
    }

    return (
            <Col>
            <Card className='h-100 border-0 my-card'>
                <div className='card-img'>
                    <Card.Img variant="top"  style={{maxHeight:"290px"}} src={img} />
                </div>
                <Card.Body className='p-4'>
                    <Row>
                        <Col xs={8}>
                            <Card.Title className='fw-bold fs-4 package-name'>{name}</Card.Title>
                            <Card.Text className='text-muted'>
                                {location}
                            </Card.Text>
                        </Col>
                        <Col xs={4} className='text-end' >
                            <Card.Text className=' fw-bold fs-3 text-danger'>
                                ${price}
                            </Card.Text>
                        </Col>
                    </Row>
                    

                    <Row className='mt-4'>
                        <Col xs={8} lg={8} md={12}>
                            <Card.Text className='fs-5'>
                                <span className='text-muted'><MdOutlineWatchLater className='me-3 text-danger'/>{days} days</span>
                            </Card.Text>
                            <div className='d-flex align-items-end'>
                                <StarRatings
                                starDimension="1.2rem"
                                starSpacing=".2rem"
                                rating={rating}
                                starRatedColor="#f1c40f"
                                numberOfStars={5}
                                />
                                <span className="d-block ms-2">({review?review:'0'} Reviews)</span>
                            </div>
                            
                        </Col>
                        <Col xs={4} lg={4} md={6}  className='text-end d-flex align-items-end justify-content-end' >
                             <Button
                             onClick={()=>handleBookNow(_id)}
                             variant='outline-info px-2' 
                             className=' mt-3 text-uppercase d-block'
                             >book now</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            </Col>
    );
};

export default Package;