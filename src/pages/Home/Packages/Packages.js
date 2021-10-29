import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Package from '../Package/Package';

const Packages = () => {
    const [packages,setPackages]=useState([]);


    // fetching all packages data from database
    useEffect(()=>{
        const url='http://localhost:5000/packages'
        axios.get(url)
            .then(res =>{
                setPackages(res.data)
            })
    },[])

    return (
        <Container className='text-start my-5'>
            <h1 className='text-uppercase text-danger'>Popular Tour Packages</h1>

            <Row xs={1} md={2} className="g-5 mt-3">
                {
                    packages.map( packag => <Package key={packag._id} packag={packag}></Package>)
                }
            </Row>

        </Container>
    );
};

export default Packages;


// const packages=[
//     {
//         key:1,
//         name:'Oahu Tour: Honolulu, Pearl Harbor, & Diamond Head',
//         location:'Honolulu',
//         details:'Nobody goes to Hawaii to hang around inside all day, and the best activities in Honolulu take you out into the abundance of natural beauty.',
//         img:'https://i.ibb.co/t2kgYgK/honululul.png',
//         days:2,
//         rating:4,
//         price:1150,
//         sale:0,
//     },
//     {
//         key:2,
//         name:'Enquiry Form Only – Paris – 6 Days',
//         location:'Paris, france',
//         details:'Capital and most populous city of France, with an estimated population of 2,175,601 residents as of 2018, in an area of more than 105 square kilometres Since the 17th century, Paris has been one of Europe major centres of finance, diplomacy, commerce, fashion, gastronomy, science, and arts. The City of Paris is the centre and seat of government of the region and province of Île-de-France.',
//         img:'https://i.ibb.co/z7ynqkR/parish.jpg',
//         days:4,
//         rating:5,
//         price:1520,
//         sale:10,
//     },
//     {
//         key:3,
//         name:'Venice, Rome and Milan – 9 Days',
//         location:'Italy,Rome',
//         details:'Discover the Vatican on a tour of Sistine Chapel, and the Vatican Museums. Navigate the vast complex of rooms, artwork, and history with a guide, who brings the ancient collection to life. Skip all the entrance lines to explore halls such as the Gallery of the Maps and Raphael’s Room.',
//         img:'https://i.ibb.co/FxH4BnD/rome.png',
//         days:4,
//         rating:4,
//         price:1200,
//         sale:0
//     },
//     {
//         key:4,
//         name:'JAPAN –Best Journey IN TOKYO, FUJIKAWA',
//         location:'japan',
//         details:'Japanese is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south.',
//         img:'https://i.ibb.co/LrZHKX0/japan.png',
//         days:5,
//         rating:4,
//         price:1500,
//         sale:0,
//     },
//     {
//         key:5,
//         name:'FINLAND – HELSINKI, SANTA CLAUS TOWN',
//         location:'Finland',
//         details:'The earliest written appearance of the name Finland is thought to be on three runestones. Two were found in the Swedish province of Uppland and have the inscription finlonti . The third was found in Gotland.',
//         img:'https://i.ibb.co/Krkj7CY/finland.jpg',
//         days:1,
//         rating:5,
//         price:100,
//         sale:0,
//     },
//     {
//         key:6,
//         name:'Glories of Turkey Tour: A Cultural & Historical Journey',
//         location:'Turkey',
//         details:'The Byzantine era is usually dated from 330 AD, when Constantine the Great moved the Roman capital to Byzantium, which became Constantinople, until the fall of the Byzantine Empire in 1453. Its architecture dramatically influenced the later medieval architecture throughout Europe and the Near East.',
//         img:'https://i.ibb.co/cD7cXmG/turkyi.png',
//         days:6,
//         rating:4,
//         price:1050,
//         sale:10
//     },
// ]


// https://i.ibb.co/LrZHKX0/japan.png
// https://i.ibb.co/z7ynqkR/parish.jpg
// https://i.ibb.co/FxH4BnD/rome.png
// https://i.ibb.co/X7NKXtX/see.png
// https://i.ibb.co/cD7cXmG/turkyi.png
// https://i.ibb.co/Krkj7CY/finland.jpg
// https://i.ibb.co/t2kgYgK/honululul.png


