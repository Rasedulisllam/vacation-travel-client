import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading}=useAuth();

    // waiting auth observer
    if(isLoading){
        return(
            <div style={{height:'100vh'}} className=' w-100 d-flex justify-content-center align-items-center'>
                <Spinner animation="border" variant="danger" />
            </div>
        )
    }

    return (
        <Route
            {...rest}
            render={({location})=>user?.email?children:(
                <Redirect
                    to={{
                        pathname:'/login',
                        state:{from:location}
                    }}
                >
                </Redirect>
            )}
        >
            
        </Route>
    );
};

export default PrivateRoute;