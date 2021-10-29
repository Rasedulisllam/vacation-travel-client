import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brand from '../../images/logo/logo3.png'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="#"><img width='104px' src={brand} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 ms-5"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} to='/home' className='fw-bold'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/home' className='fw-bold'>my-order</Nav.Link>
                    <Nav.Link as={Link} to='/home' className='fw-bold'>admin</Nav.Link>
                    
                </Nav>
               
                    <Button variant="outline-success">Login</Button>
                    <Button variant="outline-warning">Logout</Button>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
};

export default Header;