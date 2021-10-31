import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import {MdOutlineLocationOn} from 'react-icons/md'
import Destination from '../Destination/Destination';
import './Destinations.css'

const Destinations = () => {
    const [destinations,setDestinations]=useState([])

    // load destinations data
    useEffect(()=>{
        const url='https://warm-atoll-50010.herokuapp.com/popularDestination'
        axios.get(url)
            .then(res => {
                setDestinations(res.data)
            })
    },[])

    return (
        <div className='mb-5'>
            <Container className='text-start mt-5'>
                <h1>
                    <MdOutlineLocationOn className='text-primary'></MdOutlineLocationOn> Popular Destinations
                </h1>
                <p className='w-50 ms-2 text-muted'>What's on your travel bucket list? If you're like most people, the more you travel, the more places you add to your bucket list.</p>
            </Container>
            <div className='mt-5'>
                <CardGroup className='rounded-0'>
                    {
                        destinations.map(item => <Destination 
                            key={item._id} 
                            item={item}></Destination>)
                    }
                </CardGroup>
            </div>
        </div>
    );
};

export default Destinations;

// https://i.ibb.co/55C3Rp9/remi-thorel-m9hd-THTw-Fg-unsplash.jpg
// https://i.ibb.co/Y21c9MR/will-shirley-x-RKc-Ho-COA4-Y-unsplash.jpg
// https://i.ibb.co/n8rJnVw/yu-kato-cdda-ZDt6u-Rw-unsplash.jpg
// https://i.ibb.co/Sd7BT9T/gleb-albovsky-8x-Cd-S7-FBp-E8-unsplash.jpg
// https://i.ibb.co/zQG0RDS/jack-ward-rknrv-Crf-S1k-unsplash.jpg

// const data =[
//     {
//         key:1,
//         name:'South America',
//         img:'https://i.ibb.co/Sd7BT9T/gleb-albovsky-8x-Cd-S7-FBp-E8-unsplash.jpg',
//         tours:5
//     },
//     {
//         key:2,
//         name:'Europe',
//         img:'https://i.ibb.co/zQG0RDS/jack-ward-rknrv-Crf-S1k-unsplash.jpg',
//         tours:7
//     },
//     {
//         key:3,
//         name:'Asia',
//         img:'https://i.ibb.co/n8rJnVw/yu-kato-cdda-ZDt6u-Rw-unsplash.jpg',
//         tours:8
//     },
//     {
//         key:4,
//         name:'America',
//         img:'https://i.ibb.co/55C3Rp9/remi-thorel-m9hd-THTw-Fg-unsplash.jpg',
//         tours:3
//     },
//     {
//         key:5,
//         name:'Africa',
//         img:'https://i.ibb.co/Y21c9MR/will-shirley-x-RKc-Ho-COA4-Y-unsplash.jpg',
//         tours:6
//     },
// ]