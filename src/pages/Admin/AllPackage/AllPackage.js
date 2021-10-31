import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import { useHistory } from 'react-router';
import StarRatings from 'react-star-ratings';

const AllPackage = (props) => {
    const history=useHistory()
    const {name,img,price,rating,review,_id}=props.packag;
    const handleDeletePackage=props.handleDeletePackage;
    

    // update button handle
    const handleUpdate =() =>{
        history.push(`/admin/updatePackage/${_id}`)
    }

    return (
        <div className='my-4 mx-3'>
            <Row className='p-2 py-3' style={{boxShadow:'1px 1px 20px #ddd'}}>
                <Col lg={2} md={2}>
                    <img className='img-fluid' src={img} alt="" />
                </Col>
                <Col lg={5} md={7} className='text-start d-flex flex-column justify-content-between'>
                       <div>
                            <h5 className='w-75' style={{fontSize:'18px'}}>{name}</h5>
                            <div className='d-flex'>
                                <span className='fw-bold fs-5 mt-3 text-danger d-block'>
                                        $ {price}
                                </span>
                                <span className='mt-3 ms-4'>
                                        <StarRatings
                                        starDimension="1.2rem"
                                        starSpacing=".2rem"
                                        rating={rating}
                                        starRatedColor="#f1c40f"
                                        numberOfStars={5}
                                        />
                                </span>
                                <span className="d-block ms-2 mt-3">({review?review:'0'} Reviews)</span>
                            </div>
                       </div>
                </Col>

                <Col lg={5} md={3} className='d-flex flex-md-column mt-4 mt-md-0 flex-lg-row justify-content-between justify-content-lg-end'>
                        <div className='d-block me-4'>
                                <Button
                                variant='outline-warning px-4 fw-bold'
                                onClick={handleUpdate} 
                                >update</Button>
                        </div>
                        <div className='d-block'>
                            <Button
                            onClick={()=>handleDeletePackage(_id)}
                            variant='danger fw-bold px-lg-3' 
                            >
                                <MdDelete/> Delete</Button>
                        </div>
                </Col>
                
            </Row>
        </div>
    );
};

export default AllPackage;