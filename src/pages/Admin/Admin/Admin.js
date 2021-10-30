import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter,Switch,Route, NavLink } from 'react-router-dom';
import ManageBookings from '../ManageBookings/ManageBookings';
import {AiOutlineFileAdd} from 'react-icons/ai'
import {CgCalendarDates} from 'react-icons/cg'
import {MdUpdate} from 'react-icons/md'
import AddNewPackage from '../AddNewPackage/AddNewPackage';
import AllPackageManage from '../AllPackagesManage/AllPackageManage';

const Admin = () => {

    const active={
        color: "#ffc107"
    }

    return (
        <div>
            <div className='py-3 bg-info text-white fw-bold'>
                <h2>VACATION TRAVEL ADMIN PANAL</h2>
            </div>
            <Container>
                <BrowserRouter>
                    <Row>
                        <Col md={3} className='border-end'>
                            <ul>
                                <li className='list-unstyled text-start my-3 '>
                                    <NavLink 
                                    activeStyle={active}
                                    className='text-decoration-none fw-bold'
                                    to='/admin/managebookings' 
                                    >
                                     <CgCalendarDates/>   Manage order packages</NavLink>
                                </li>
                                <li className='list-unstyled text-start my-3'>
                                    <NavLink 
                                    activeStyle={active}
                                    className='text-decoration-none fw-bold'
                                    to='/admin/addPackage'
                                    >
                                     <AiOutlineFileAdd/>   Add package</NavLink>
                                </li>
                                <li className='list-unstyled text-start my-3'>
                                    <NavLink 
                                    activeStyle={active}
                                    className='text-decoration-none fw-bold'
                                    to='/admin/allPackage'
                                    >
                                     <MdUpdate/>  Manage All Package</NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md={9}>
                            <Switch>
                                <Route exact path='/admin'>
                                    <ManageBookings></ManageBookings>
                                </Route>
                                <Route path='/admin/managebookings'>
                                    <ManageBookings></ManageBookings>
                                </Route>
                                <Route path='/admin/addPackage'>
                                    <AddNewPackage></AddNewPackage>
                                </Route>
                                <Route path='/admin/allPackage'>
                                    <AllPackageManage></AllPackageManage>
                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </BrowserRouter>
            </Container>
        </div>
    );
};

export default Admin;