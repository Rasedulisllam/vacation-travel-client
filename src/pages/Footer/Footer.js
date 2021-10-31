import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import brand from '../../images/logo/logo3.png'
import { BsFacebook } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div style={{backgroundColor:'#202020'}} className='py-5'>
                <Container>
                    <Row>
                        <Col md={3} sm={6} className='text-sm-start mt-4 mt-md-0'>
                            <img width='104px' src={brand} alt="" />
                            <p className='text-muted  mt-4 w-sm-75'>What's on your travel bucket list? If you're like most people, the more you travel, the more places you add to your bucket list.</p>
                            <ul className='d-flex justify-content-center justify-content-sm-start list-unstyled text-white'>
                                <li className='me-4'>
                                    Follow us:
                                </li>
                                <li className='px-2 '>
                                    <BsFacebook className='footer-social-item'/>
                                </li>
                                <li className='px-2'>
                                    <AiOutlineTwitter className='footer-social-item'/>
                                </li>
                                <li className='px-2'>
                                    <BsLinkedin className='footer-social-item'/>
                                </li>
                                <li className='px-2'>
                                    <BsGithub className='footer-social-item'/>
                                </li>
                            </ul>
                        </Col>
                        <Col md={3} sm={6} className='text-white text-sm-start  mt-4 mt-md-0'>
                            <h3>About Us</h3>
                            <ul className='list-unstyled p-0 mt-4'>
                                <li className='py-1  footer-about-item'>Our Story</li>
                                <li className='py-1  footer-about-item'>Travel Blog Tips</li>
                                <li className='py-1  footer-about-item'>Working With Us</li>
                                <li className='py-1  footer-about-item'>Be Our Partner</li>
                            </ul>
                        </Col>
                        <Col md={3} sm={6} className='text-white text-sm-start mt-4 mt-md-0'>
                            <h3>Support</h3>
                            <ul className='list-unstyled p-0 mt-4'>
                                <li className='py-1  footer-about-item'>Customer Support</li>
                                <li className='py-1  footer-about-item'>Privacy  Policy</li>
                                <li className='py-1  footer-about-item'>Contact Channels</li>
                            </ul>
                        </Col>
                        <Col md={3} sm={6} className='text-white text-sm-start mt-4 mt-md-0'>
                            <div>
                                <h3 className='text-danger mb-2'>Call Us</h3>
                                <span><FaPhoneAlt  className='fs-4 me-2'/> +8801200010000</span>
                            </div>
                            <div className='mt-5'>
                                <h3 className='text-danger mb-2'>Email</h3>
                                <span><HiOutlineMail className='fs-4 me-2'/> vacation@gmail.com</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='footer-bottom py-3 bg-dark text-white'>
                <p className='text-white-50'>&copy; Vacation Travel All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;