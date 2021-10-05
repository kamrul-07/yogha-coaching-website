import React from 'react';
import './Moreservice.css'

const Moreservice = (props) => {
    const {name,img,describe}=props.service;
    return (
        <div>
            
            <div className="container">
             <div className="col  mt-3 shadow-lg p-3 mb-5 bg-body rounded card">
             <div>
             <img src={img} className="card-img-top img-style  p-2 " alt=".."/>
                   </div>
                <div className="card h-100 card-style">
                    <div className="card-body">
                       <h3 className="fw-bold card-text ">{name}</h3>
                       <p>{describe}</p>
                        <button className="p-1 rounded bg-primary text-white">Detailes</button>
                    </div>
                </div>
             </div>
        </div>
        </div>
    );
};

export default Moreservice;