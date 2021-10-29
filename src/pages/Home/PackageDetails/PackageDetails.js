import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import StarRatings from 'react-star-ratings';
import {MdOutlineWatchLater} from 'react-icons/md'
import {IoIosPeople} from 'react-icons/io'
import {BsWifi} from 'react-icons/bs'
import {MdEmojiPeople} from 'react-icons/md'
import {GoLocation} from 'react-icons/go'
import {GiPriceTag} from 'react-icons/gi'
import './PackageDetails.css'
import { useForm } from 'react-hook-form';

const PackageDetails = (props) => {
    const [packag,setPackag]=useState({});
    const {id} =useParams();

    // from control
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // load package deteils
    useEffect(()=>{
        const url=`http://localhost:5000/packages/${id}`
        axios.get(url)
            .then(res=>{
                setPackag(res.data)
            })
    },[])

    return (
        <div>
            <Container className='my-4'>
                <Row>
                    <Col md={7}>
                        <img style={{width:'100%'}} src={packag?.img} alt="" />
                        <div className='mt-4 text-start mb-2'>
                            <div className='d-flex align-items-start justify-content-between'>
                                <h3 className='w-50'>{packag?.name}</h3>
                                <div className='d-flex align-items-end align-items-center'>
                                    <StarRatings
                                    starDimension="1.2rem"
                                    starSpacing=".2rem"
                                    rating={packag?.rating}
                                    starRatedColor="#f1c40f"
                                    numberOfStars={5}
                                    />
                                    <span className="d-block ms-2">(6 Reviews)</span>
                                </div>
                            </div>
                        </div>
                        <div className='my-3 border border-secondary border-start-0 border-end-0 py-4'>
                            <Row sm={3} className='text-start g-4 '>
                                <Col className='fs-5'>
                                    <span className='text-muted'><MdOutlineWatchLater className='me-2 text-danger fs-3'/>{packag?.days} Days {packag?.days-1} Nights</span>
                                </Col>
                                <Col className='fs-5'>
                                    <span className='text-muted'><IoIosPeople className='me-2 text-danger fs-3'/>Max People: 10</span>
                                </Col>
                                <Col className='fs-5'>
                                    <span className='text-muted'><BsWifi className='me-2 text-danger fs-3'/>Wifi Available</span>
                                </Col>
                                <Col className='fs-5'>
                                    <span className='text-muted'><MdEmojiPeople className='me-2 text-danger fs-3'/>Min Age : 10+</span>
                                </Col>
                                <Col className='fs-5'>
                                    <span className='text-muted'><GoLocation className='me-2 text-danger fs-3'/>Pickup: Airpot</span>
                                </Col>
                            </Row>
                        </div>
                        <div className='text-start my-4'>
                            <p className='w-75 text-muted'>{packag?.details}</p>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className='package-detais-from'>
                            <div>
                                <h5 className=' py-3 text-white m-0' style={{backgroundColor:'#02cbf3'}}>Price</h5>
                                <h1 className='py-4 text-white m-0' style={{backgroundColor:'#2bccedcc'}}><GiPriceTag/> ${packag?.price}</h1>
                                
                            </div>

                            <div  className='text-start p-4'>
                                <h5 className='py-3 mb-4 text-start'>Enquiry Form</h5>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input 
                                    className={errors.name?'my-input required':'my-input'} type="text" 
                                    placeholder='Full Name'
                                    {...register("name", { required: true })} 
                                    /> 

                                    <input 
                                    className={errors.email?'my-input required':'my-input'} type="email"
                                    placeholder='Email Address' 
                                    {...register("email", { required: true })} 
                                    /> 

                                    <input 
                                    className={errors.number?'my-input required':'my-input'} type="text" 
                                    placeholder='Your number'
                                    {...register("number", { required: true })} 
                                    /> 

                                    <input 
                                    className={errors.date?'my-input required':'my-input'} type="date" 
                                    placeholder='Travel Date'
                                    {...register("date", { required: true })} 
                                    /> 
                                    <textarea 
                                    className={errors.enquiry?'my-input required':'my-input'} type="date" 
                                    placeholder='Your Enquiry'
                                    rows="3"
                                    cols="50"
                                    {...register("enquiry", { required: true })} 
                                    /> 

                                    <Button type="submit" className='text-uppercase mt-4' variant='info'>proceed booking</Button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PackageDetails;