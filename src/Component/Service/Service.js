import React from 'react';
import "./Service.css"
const Service = (props) => {
    const {name,price,img}=props.service;
    return (
        <div>
             <div className="container">
             <div className="col  mt-3 shadow-lg p-3 mb-5 bg-body rounded card">
             <div>
                   <img src={img} className="card-img-top img-style  p-2 " alt=".."/>
                   </div>
                <div className="card h-100 card-style border-0">
                    <div className="card-body">
                       <h3 className="fw-bold card-text ">{name}</h3>
                       <h3>Price:${price}
                       </h3>
                       <p className="fst-italic fw-bold">per month only</p>
                        <button className="p-2 rounded fill-style fst-italic">Addmisson Now</button>
                    </div>
                </div>
             </div>
        </div>
        </div>
    );
};

export default Service;