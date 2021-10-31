import axios from 'axios';
import React, { useState } from 'react';
import { Col, Row,Button } from 'react-bootstrap';
import { IoIosPeople } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';

const ManageBooking = (props) => {
    const {img,packagName,status,people,price,date,name,email,number, _id}=props.packag
    const [isAproved,setAproved]=useState(status)

    const handleOrderedCancel=props.handleOrderedCancel;
    
     // handle aproved update data
     const handleAproved=(id)=>{
        const isupdate=window.confirm('Press OK to APROVED')
        if(isupdate){
            const url=`https://warm-atoll-50010.herokuapp.com/orderPackages/${id}`;
            axios.put(url)
                .then(res =>{
                    if(res.data.matchedCount){
                        alert('Status Aproved')
                        setAproved('aproved')
                    }
                })
        }
    }

    return (
        <div className='my-4 mx-3'>
            <Row className='p-2 py-3' style={{boxShadow:'1px 1px 20px #ddd'}}>
                <Col lg={2} md={6}>
                    <img className='img-fluid' src={img} alt="" />
                </Col>
                <Col lg={4} md={6} className='text-start d-flex flex-column justify-content-between mt-4 mt-md-0'>
                   <div className='d-flex justify-content-between'>
                       <div>
                            <h5 className='w-md-75' style={{fontSize:'18px'}}>{packagName}</h5>
                            <span className='fw-bold fs-5 mt-md-3 text-danger d-block'>
                                    $ {price}
                            </span>
                       </div>
                   </div>
                      
                   <div className=''>
                        <Row>
                            <Col xs={7}>
                                <span className='text-primary mt-2 d-block'>
                                    {date}
                                </span>
                            </Col>

                            <Col xs={5}>
                                <span className='text-muted  d-block'><IoIosPeople className='text-primary fs-3'/> {people}</span>
                            </Col>
                        </Row>                 
                   </div>
                </Col>

                <Col lg={6} md={12} className='mt-4 mt-lg-0'>
                    <Row>
                        <Col sm={7} className='text-start'>
                            <h5 className='fw-bold'>{name}</h5>
                            <p>EMAIL: <span className='text-primary'>{email}</span></p>
                            <p>NUMBER: {number}</p>
                        </Col>
                        <Col sm={5} className='d-flex align-items-end flex-sm-column bd-highlight justify-content-between  '>
                               <div className='d-block'>
                                    {
                                        (isAproved==='painding')?<Button
                                        onClick={()=>handleAproved(_id)}
                                        variant='outline-success me-md-0 px-4 fw-bold' 
                                        >Aprove</Button>:''
                                    }
                               </div>
                               <div className='d-block'>
                                    <Button
                                    onClick={()=>handleOrderedCancel(_id)}
                                    variant='danger me-md-0 fw-bold' 
                                    >
                                     <MdDelete/> Cancel</Button>
                               </div>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
        </div>
    );
};

export default ManageBooking;