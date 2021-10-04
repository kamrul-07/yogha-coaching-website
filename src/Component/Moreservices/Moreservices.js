import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Moreservice from '../Moreservice/Moreservice';
import './Moreservices.css'

const Moreservices = () => {
    const [services,setServices]=useState([]);
    useEffect(() =>{
        fetch('./services.JSON')
        .then (res => res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div>
             <h1 className="fst-italic fs-3 fill text-center">Our more services</h1>
         <div  className="row row-cols-1 row-cols-md-3 g-4">
        
           {
               services.map(service => <Moreservice 
               key={service.name}
               service={service}
               ></Moreservice>)
           }
        </div>
        </div>
    );
};

export default Moreservices;