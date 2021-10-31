import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';
import { useHistory } from 'react-router';
import StarRatings from 'react-star-ratings';

const AllPackage = (props) => {
    const history=useHistory()
    const {name,img,price,rating,_id}=props.packag;
    const handleDeletePackage=props.handleDeletePackage;
    

    // update button handle
    const handleUpdate =() =>{
        history.push(`/admin/updatePackage/${_id}`)
    }

    return (
        <div className='my-4 mx-3'>
            <Row className='p-2 py-3' style={{boxShadow:'1px 1px 20px #ddd'}}>
                <Col xs={2}>
                    <img className='img-fluid' src={img} alt="" />
                </Col>
                <Col xs={5} className='text-start d-flex flex-column justify-content-between'>
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
                                <span className="d-block ms-2 mt-3">(6 Reviews)</span>
                            </div>
                       </div>
                </Col>

                <Col xs={5} className='d-flex justify-content-end'>
                        <div className='d-block me-4'>
                                <Button
                                variant='outline-warning me-3 px-4 fw-bold'
                                onClick={handleUpdate} 
                                >update</Button>
                        </div>
                        <div className='d-block'>
                            <Button
                            onClick={()=>handleDeletePackage(_id)}
                            variant='danger me-3 fw-bold px-3' 
                            >
                                <MdDelete/> Delete</Button>
                        </div>
                </Col>
                
            </Row>
        </div>
    );
};

export default AllPackage;