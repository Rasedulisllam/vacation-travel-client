import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ManageBooking from '../ManageBooking/ManageBooking';

const ManageBookings = () => {
    const [bookingPackages,setBookingPackages]=useState([])

    // load all ordered package data
    useEffect(()=>{
        const url=`https://warm-atoll-50010.herokuapp.com/orderPackages`;
            axios.get(url)
                .then(res =>{
                   setBookingPackages(res.data)
                })
    },[])

    // handle cancel package booking
    const handleOrderedCancel=(id)=>{
        const isDelete=window.confirm('Are you sure CANCEL this booking ?')
        if(isDelete){
            const url=`https://warm-atoll-50010.herokuapp.com/orderPackages/${id}`;
            axios.delete(url)
                .then(res =>{
                    if(res.data.deletedCount>0){
                        alert('Cancel Booking successfutty')
                        const restPackage =bookingPackages.filter(packag => packag._id !== id)
                        setBookingPackages(restPackage)
                    }
                })
        }
    }

    return (
        <div className=''>
            <div className='py-4 my-4 bg-info'>
                <h4 className='text-uppercase text-white'>all order request package</h4>
            </div>
            <div className='mb-5'>
                {
                    bookingPackages.map(packag => <ManageBooking
                    key={packag._id}
                    packag={packag}
                    handleOrderedCancel={handleOrderedCancel}
                    ></ManageBooking>)
                }
            </div>
        </div>
    );
};

export default ManageBookings;