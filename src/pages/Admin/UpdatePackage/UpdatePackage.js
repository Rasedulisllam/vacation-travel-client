import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';

const UpdatePackage = () => {
    const history=useHistory()
    const {id}=useParams();
    const [packag,setPackag]=useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();

    // update package data on database
    const onSubmit = formData => {
        const data=formData;
        data.rating=parseFloat(data.rating);
        data.price=parseFloat(data.price);
        data.days=parseFloat(data.days);
        // console.log(data)
        const url=`https://warm-atoll-50010.herokuapp.com/packages/${id}`
        axios.put(url,data)
            .then(res =>{
                console.log(res)
                if(res.data.modifiedCount>0){
                    alert('successfully Update')
                    history.push('/admin/allPackage')
                }
            })
    };

    // load package by id
    useEffect(()=>{
        const url=`https://warm-atoll-50010.herokuapp.com/packages/${id}`
        axios.get(url)
            .then(res=>{
                setPackag(res.data);
            })
    },[id])

    // console.log(packag)
    return (
        <div className='package-detais-from my-4'>
            <div  className='py-4 mt-4 bg-info'>
                 <h4 className='text-uppercase text-white'>update package</h4>
            </div>
            <div style={{maxHeight:'250px',overflow:'hidden'}}>
                <img src={packag?.img} className='img-fluid' alt="" />
            </div>
            <div>
                <h3 className='my-2 text-start px-4'>{packag?.name}</h3>
            </div>
            <div>
            <div  className='text-start p-4 mt-4'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='d-flex justify-content-between'>
                        <label htmlFor="name "
                        style={{width:'125px'}}  
                         className='text-warning fw-bold'>Package name:</label>
                        <input 
                        className={errors.name?'my-input required':'my-input'} type="text" 
                        defaultValue={packag?.name}
                        {...register("name", { required:true })} 
                        /> 
                    </div>

                    <div className='d-flex justify-content-between'>
                        <label 
                        htmlFor="location" 
                        style={{width:'125px'}} 
                         className='text-warning fw-bold' >Location:</label>
                        <input 
                        className={errors.location?'my-input required':'my-input'} type="text" 
                        defaultValue={packag?.location}
                        {...register("location", { required: true })} 
                        />                                                  
                    </div>
                    <div className='d-flex justify-content-between'>
                        <label 
                        htmlFor="price"  
                        style={{width:'125px'}}  
                        className='text-warning fw-bold' >Price($):</label>
                        <input 
                        className={errors.price?'my-input required':'my-input'} type="text" 
                        defaultValue={packag?.price}
                        {...register("price", { required: true })} 
                        />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <label 
                        htmlFor="img"  
                        style={{width:'125px'}}  
                        className='text-warning fw-bold' >Images(url):</label>
                        <input 
                        className={errors.img?'my-input required':'my-input'} type="text" 
                        defaultValue={packag?.img}
                        {...register("img", { required: true })} 
                        />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <label
                         htmlFor="days" 
                         style={{width:'125px'}}   
                         className='text-warning fw-bold' >Time(days):</label>
                        <input 
                        className={errors.price?'my-input required':'my-input'} type="text" 
                        defaultValue={packag?.days}
                        {...register("days", { required: true })} 
                        />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <label
                         htmlFor="rating" 
                         style={{width:'125px'}}   
                         className='text-warning fw-bold' >Ratings:</label>
                        <input 
                        className={errors.rating?'my-input required':'my-input'} type="text" 
                        defaultValue={packag?.rating}
                        {...register("rating", { required: true })} 
                        />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <label
                         htmlFor="Review" 
                         style={{width:'125px'}}   
                         className='text-warning fw-bold' >Review:</label>
                        <input 
                        className={errors.Review?'my-input required':'my-input'} type="text" 
                        defaultValue={packag?.Review}
                        placeholder='Review'
                        {...register("review", { required: true })} 
                        />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <label
                         htmlFor="sale" 
                         style={{width:'125px'}}   
                         className='text-warning fw-bold' >Sale:</label>
                        <input 
                        className={errors.sale?'my-input required':'my-input'} type="text" 
                        defaultValue={packag?.sale}
                        placeholder='sale'
                        {...register("sale", { required: true })} 
                        />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <label 
                        htmlFor="details" 
                        style={{width:'125px'}}   
                        className='text-warning fw-bold' >Dateils:</label>
                        <textarea 
                        className={errors.details?'my-input required':'my-input'} type="date" 
                        defaultValue={packag?.details}
                        rows="3"
                        cols="50"
                        {...register("details", { required: true })} 
                        /> 
                    </div>    
                    <Button type="submit" className='text-uppercase mt-4 px-5 text-white fw-bold' variant='info'>Update</Button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default UpdatePackage;