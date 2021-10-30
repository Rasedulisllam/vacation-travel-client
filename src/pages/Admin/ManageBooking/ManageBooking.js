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
            const url=`http://localhost:5000/orderPackages/${id}`;
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
                <Col xs={2}>
                    <img className='img-fluid' src={img} alt="" />
                </Col>
                <Col xs={4} className='text-start d-flex flex-column justify-content-between'>
                   <div className='d-flex justify-content-between'>
                       <div>
                            <h5 className='w-75' style={{fontSize:'18px'}}>{packagName}</h5>
                            <span className='fw-bold fs-5 mt-3 text-danger d-block'>
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

                <Col xs={6}>
                    <Row>
                        <Col xs={7} className='text-start'>
                            <h5 className='fw-bold'>{name}</h5>
                            <p>EMAIL: <span className='text-primary'>{email}</span></p>
                            <p>NUMBER: {number}</p>
                        </Col>
                        <Col xs={5} className='d-flex align-items-end flex-column bd-highlight justify-content-between'>
                               <div className='d-block'>
                                    {
                                        (isAproved==='painding')?<Button
                                        onClick={()=>handleAproved(_id)}
                                        variant='outline-success me-3 px-4 fw-bold' 
                                        >Aprove</Button>:''
                                    }
                               </div>
                               <div className='d-block'>
                                    <Button
                                    onClick={()=>handleOrderedCancel(_id)}
                                    variant='danger me-3 px-3 fw-bold' 
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