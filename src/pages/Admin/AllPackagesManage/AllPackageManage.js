import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllPackage from '../AllPackage/AllPackage';

const AllPackageManage = () => {
    const [Packages,setPackages]=useState([]);

    // load all packages 
    useEffect(()=>{
        const url='http://localhost:5000/packages'
        axios.get(url)
            .then(res =>{
                setPackages(res.data)
            })
    },[])

    // handle delete package
    const handleDeletePackage =(id)=>{
            const passCode=window.prompt("ENTER ADMIN PASS CODE")
            if(passCode==='Admin#my'){
                const url=`http://localhost:5000/Packages/${id}`;
                axios.delete(url)
                    .then(res =>{
                        if(res.data.deletedCount>0){
                            alert('Successfutty delete Package')
                            const restPackage =Packages.filter(packag => packag._id !== id)
                            setPackages(restPackage)
                        }
                    })
            }
            else{
                alert('Wrong pass code')
            }
    }

    return (
        <div>
            <div  className='py-4 my-4 bg-info'>
                 <h4 className='text-uppercase text-white'>Our ALL packages</h4>
            </div>

            {
                Packages.map(packag => <AllPackage 
                    handleDeletePackage={handleDeletePackage}
                    packag={packag}
                    key={packag._id}
                    ></AllPackage>)
            }

        </div>
    );
};

export default AllPackageManage;