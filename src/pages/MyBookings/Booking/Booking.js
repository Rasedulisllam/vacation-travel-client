import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import {MdOutlineWatchLater} from 'react-icons/md'
import {IoIosPeople} from 'react-icons/io'
import {BsArrowClockwise} from 'react-icons/bs'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Booking = (props) => {
    const {packagName,price,people,img ,days,status,_id}=props.packag;
    const cancelBooking=props.cancelBooking;
    // console.log(props.packag)
    return (
        <div className='my-4 mx-3'>
            <Row className='p-2' style={{boxShadow:'1px 1px 20px #ddd'}}>
                <Col xs={4}>
                    <img className='img-fluid' src={img} alt="" />
                </Col>
                <Col xs={8} className='text-start p-1 d-flex flex-column justify-content-between'>
                   <div className='d-flex justify-content-between'>
                       <h5 className='w-50'>{packagName}</h5>
                       <div className='me-3'>
                           {
                               (status==="painding")?<span className='text-warning fw-bold'><BsArrowClockwise/> Painding</span>:(
                                   <span className='text-success fw-bold' >
                                       <AiOutlineCheckCircle/>
                                       Approved</span>
                               )
                           }
                       </div>
                   </div>
                      
                   <div className=''>
                        <Row>
                            <Col xs={4}>
                                <span className='fw-bold fs-4 text-danger d-block'>
                                    ${price}
                                </span>
                            </Col>

                            <Col xs={2}>
                                <span className='text-muted  d-block'><IoIosPeople className='text-danger fs-3'/> {people}</span>
                            </Col>

                            <Col xs={2}>
                                <span className='text-muted d-block '><MdOutlineWatchLater className=' text-danger fs-5'/> {days} Day</span>
                            </Col>

                            <Col xs={4} className='text-end '>
                                <Button
                                 onClick={()=>cancelBooking(_id)}
                                 variant='outline-warning me-3 fw-bold' 
                                 >Cancel</Button>
                            </Col>
                        </Row>                 
                   </div>
                </Col>
                
            </Row>
        </div>
    );
};

export default Booking;