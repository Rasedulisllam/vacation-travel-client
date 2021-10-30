import React from 'react';
import {useLocation,useHistory} from 'react-router'
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import  brand  from '../../images/logo/logo3.png'
import {FcGoogle} from 'react-icons/fc'
import './Login.css'
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const {googleSignIn,setUser,setErr} =useAuth()
    const history= useHistory();
    const location =useLocation();
    const redirect_url=location?.state?.from || '/';


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // handle google sign in system
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then((result) => {
            const user=result.user;
            setUser(user)
            history.push(redirect_url)
        })
        .catch(err =>{
            setErr(err.message)
        })
    }

    return (
        <div className='d-flex justify-content-lg-between align-items-center'>
            <div className='login-form p-4'>
                <img className='mb-3' src={brand} alt="" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                    type='text'
                    placeholder='NAME' 
                    className={errors.name?'my-input required':'my-input'}
                    {...register("name", { required: true })} 
                    />
                    <input 
                    type='password'
                    placeholder='PASSWORD' 
                    className={errors.password?'my-input required':'my-input'}
                    {...register("password", { required: true })} 
                    />                    
                    <Button
                    className='d-block w-100 text-white fw-bold fs-5'
                    variant='info'
                    type='submit'
                    >Login</Button>
                </form>
                <div className='mt-4 text-start'>
                    <h5 >
                    <span>Or, Continue With - </span>
                    <Button 
                    onClick={handleGoogleSignIn}
                    className='bg-transparent border border-secondary text-dark rounded-pill px-3 ' 
                    >
                    <FcGoogle className='me-3'></FcGoogle>
                    Google
                    </Button>
                    </h5> 
                </div>
            </div>
        </div>
    );
};

export default Login;