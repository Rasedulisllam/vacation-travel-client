import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddNewPackage = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    
    // post package data
    const onSubmit = data => {
        data.rating=4;
        data.sale=0;
        const url="http://localhost:5000/packages"
        axios.post(url,data)
            .then(res => {
                if(res.data.insertedId){
                    alert('A NEW PACKAGE ADDED')
                    reset()
                }
            })
    };

    return (
        <div>
            <div className='my-4 mb-5 mx-auto' style={{width:'90%',boxShadow:'1px 1px 20px #ddd'}}>
                <div style={{backgroundColor:'#f9c93bd6'}} className='py-4 bg-info'>
                    <h4 className='text-uppercase text-white'>add a new package</h4>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='px-5 mt-5 pb-5'>
                        <input 
                        type='text'
                        placeholder='PACKAGE NAME' 
                        className={errors.name?'my-input required':'my-input'}
                        {...register("name", { required: true })} 
                        />
                        <input 
                        type='text'
                        placeholder='LOCATION' 
                        className={errors.location?'my-input required':'my-input'}
                        {...register("location", { required: true })} 
                        />                    
                        <input 
                        type='text'
                        placeholder='PACKAGE PRICE ($)' 
                        className={errors.price?'my-input required':'my-input'}
                        {...register("price", { required: true })} 
                        />                    
                        <input 
                        type='text'
                        placeholder='DURATION (days)' 
                        className={errors.days?'my-input required':'my-input'}
                        {...register("days", { required: true })} 
                        />                    
                        <input 
                        type='text'
                        placeholder='IMAGES URL' 
                        className={errors.img?'my-input required':'my-input'}
                        {...register("img", { required: true })} 
                        />                    
                        <textarea 
                        type='text'
                        rows='3'
                        placeholder='PACKAGE DETAILS' 
                        className={errors.details?'my-input required':'my-input'}
                        {...register("details", { required: true })} 
                        />                    
                        <Button
                        className='d-block px-5 text-white fw-bold fs-5 my-5 mb-5'
                        variant='info'
                        type='submit'
                        >Add Package</Button>
                    </form>
            </div>
        </div>
    );
};

export default AddNewPackage;