import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import brand from '../../images/logo/logo3.png'
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const history=useHistory()
    const {user,logout}=useAuth()

    // handle login button
    const handleLogin =()=>{
        history.push('/login')
    }

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
                    <Nav.Link as={Link} to='/myBooking' className='fw-bold'>My-Booking</Nav.Link>
                    <Nav.Link as={Link} to='/admin' className='fw-bold'>Admin</Nav.Link>
                    
                </Nav>
               
                    {
                        user.email?(

                            <div>
                                <span className='text-success fw-bold me-4 '>{user.displayName}</span>
                                <Button 
                                onClick={logout}
                                variant="warning px-4"
                                >Logout</Button>
                            </div>
                        ):(
                            <Button variant="info px-4" onClick={handleLogin}>Login</Button>
                        )
                    } 
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
};

export default Header;