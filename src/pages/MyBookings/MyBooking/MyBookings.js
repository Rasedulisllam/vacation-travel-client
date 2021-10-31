import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Booking from '../Booking/Booking';
import {FaLongArrowAltRight} from 'react-icons/fa'

const MyBookings = () => {
    const [myPackages,setMyPackages]=useState([]);
    const {user}=useAuth();

    // get my ordered package
    useEffect(()=>{
        if(user.email){
            const url=`https://warm-atoll-50010.herokuapp.com/orderPackages/${user.email}`;
            axios.get(url)
                .then(res =>{
                   setMyPackages(res.data)
                })
        }
    },[user])

    // handle delete order
    const cancelBooking =(id)=>{
        const isDelete=window.confirm('Are you sure CANCEL this booking ?')
        if(isDelete){
            const url=`https://warm-atoll-50010.herokuapp.com/orderPackages/${id}`;
            axios.delete(url)
                .then(res =>{
                    if(res.data.deletedCount>0){
                        alert('Cancel Booking successfutty')
                        const restPackage =myPackages.filter(packag => packag._id !== id)
                        setMyPackages(restPackage)
                    }
                })
        }
    }

    return (
        <div>
            <div className='py-3 bg-info text-white fw-bold'>
                <h2>WELCOME TO VACATION TRAVEL</h2>
            </div>
            <Container>
                <Row>
                    <Col md={3}>
                        <h4 className='text-warning fw-bold text-start mt-4'>
                          YOUR ALL BOOKING REQUIST <FaLongArrowAltRight/></h4>
                    </Col>
                    <Col md={9} className=' border-start'>
                        {
                            myPackages.map(packag=> <Booking
                                  cancelBooking={cancelBooking}
                                  packag={packag}
                                  key={packag._id}
                                  ></Booking>)
                        }
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default MyBookings;