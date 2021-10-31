import axios from 'axios';
import React from 'react';
import { useEffect,useRef } from 'react';
import { useState } from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import StarRatings from 'react-star-ratings';
import {MdOutlineWatchLater} from 'react-icons/md'
import {IoIosPeople} from 'react-icons/io'
import {BsWifi} from 'react-icons/bs'
import {MdEmojiPeople} from 'react-icons/md'
import {GoLocation} from 'react-icons/go'
import {GiPriceTag} from 'react-icons/gi'
import './PackageDetails.css'
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const PackageDetails = (props) => {
    const [packag,setPackag]=useState({});
    const {id} =useParams();
    const peopleRef = useRef(1.8)
    const [price,setPrice] = useState(0)
    const {user}=useAuth()
    const history =useHistory()

    // from control
    const { register, handleSubmit, formState: { errors } } = useForm();

    // save order on database
    const onSubmit = formData => {
        const data=formData;
        data.people=peopleRef.current.value;
        data.packagName=packag.name;
        data.price=price;
        data.img=packag.img;
        data.status='painding';
        data.days=packag.days;
        
        const url='https://warm-atoll-50010.herokuapp.com/orderPackages';
        axios.post(url,data)
            .then(res =>{
                if(res.data.insertedId){
                    alert('Booking requist placed successfully')
                    history.push('/')
                }
            })
    };

    // load package deteils by id
    useEffect(()=>{
        const url=`https://warm-atoll-50010.herokuapp.com/packages/${id}`
        axios.get(url)
            .then(res=>{
                setPackag(res.data);
                setPrice(res.data.price)
            })
    },[id])

    // control people depandent price value
    const handlePeople=()=>{
        const people=peopleRef.current.value;
        const newPrice=(packag?.price*parseFloat(people)).toFixed(2);
        setPrice(newPrice)
    }

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
                                    <span className="d-block ms-2">({packag?.review?packag.review:'0'} Reviews)</span>
                                </div>
                            </div>
                        </div>
                        <div className='my-3 border border-secondary border-start-0 border-end-0 py-4'>
                            <Row md={3} sm={2} xs={1} className='text-start g-1 g-md-4 '>
                                <Col className='fs-5 my-sm-2 my-md-2 my-2'>
                                    <span className='text-muted'><MdOutlineWatchLater className='me-2 text-danger fs-3'/>{packag?.days} Days {packag?.days-1} Nights</span>
                                </Col>
                                <Col className='fs-5 my-sm-2 my-md-2 my-2 '>
                                    <span className='text-muted'><IoIosPeople className='me-2 text-danger fs-3'/>Max People: 10</span>
                                </Col>
                                <Col className='fs-5 my-sm-2 my-md-2 my-2'>
                                    <span className='text-muted'><BsWifi className='me-2 text-danger fs-3'/>Wifi Available</span>
                                </Col>
                                <Col className='fs-5 my-sm-2 my-md-2 my-2'>
                                    <span className='text-muted'><MdEmojiPeople className='me-2 text-danger fs-3'/>Min Age : 10+</span>
                                </Col>
                                <Col className='fs-5 my-sm-2 my-md-2 my-2'>
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
                                <h1 className='py-4 text-white m-0' style={{backgroundColor:'#2bccedcc'}}><GiPriceTag/> ${price}</h1>
                                
                            </div>

                            <div  className='text-start p-4'>
                                <h5 className='py-3 mb-4 text-start'>Enquiry Form</h5>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input 
                                    className={errors.name?'my-input required':'my-input'} type="text" 
                                    placeholder='Full Name'
                                    defaultValue={user.displayName}
                                    {...register("name", { required: true })} 
                                    /> 

                                    <input 
                                    className={errors.email?'my-input required':'my-input'} type="email"
                                    placeholder='Email Address' 
                                    defaultValue={user.email}
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

                                    <select 
                                    className={errors.people?'my-input required':'my-input'}
                                    {...register("people")} 
                                    ref={peopleRef}
                                    onChange={handlePeople}
                                    form="carform">
                                    <option default value="1">Total people 1</option>
                                    <option value="3">Total people 2-3</option>
                                    <option value="6">Total people 4-6</option>
                                    <option value="10">Total people 7-10</option>
                                    </select>

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