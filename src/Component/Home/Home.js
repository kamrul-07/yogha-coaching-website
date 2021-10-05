
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import img from '../Home/home.jpg'
import Service from '../Service/Service';
import picture from '../Home/image/pretty-woman-doing-yoga-exercises-800x533 (1).jpg'
import './Home.css'
import Button from '@restart/ui/esm/Button';

const Home = () => {
const [service,setService]=useState([])
useEffect(() => {
    fetch('./service.JSON')
    .then(res => res.json())
    .then (data => setService(data))
},[])

    return (
      

        <div className="mt-1 mb-3">

            <Card className="bg-dark text-white">
            
            <Card.Img className="img-fluid img-style" src={img} alt="Card image" />
            
            <div >
            <Card.ImgOverlay className="margin container p-2 ">
            <Card.Title> <h1 className="fs-1 fw-bolder ">Let's Get  
            <span> The Balance Of Living.</span></h1></Card.Title>
            <br />
            <Card.Text className="text-white ">
                 Life is often so busy and hectic that its hard to carve out time to meditate.But science shows that whether you're looking to de-stress,curb anxiety,or boost your confidence,even five minutes of meditation can beeffective.And we're here to help.Outside + members ger  acces to the full library.
            </Card.Text>
            <br />
            <button className="fill p-3 fw-bold fs-5 rounded bg-primary text-white "> Discover More</button>
            </Card.ImgOverlay>

            </div>
            </Card>
            <div>
                
            <div className="d-flex mt-5 container mb-5">
                <div >
                    <h5 className="text-style fst-italic text-center fs-1">Welcome <i className="fab fa-canadian-maple-leaf "></i></h5>
                    <h2 className="fiver text-center ">We Are Professional Yoga Studio.</h2>
                    <p>Taciti fames lacinia orci finibus metus elit tempus faucibus urna nunc dui rhoncus bibendum vel porttitor volutpat felis massa feugiat.Taciti fames lacinia orci finibus metus elit tempus faucibus urna nunc dui rhoncus bibendum vel porttitor volutpat felis massa feugiat.</p>
                    <br />
                    <br />
                    <Button className="rounded p-3 fs-4 bg-primary text-white fw-bold text-center"> Discover More</Button>
                </div>
                <div>
                    <img className="img-fluid img-thumbnil" src={picture} alt="" />
                </div>
            </div>
            </div>

            
            <h1 className="fst-italic text-style text-center">Our Service <i className="fab fa-pagelines fs-1 "></i></h1>
            <h1 className="fs-2 tex-style text-center">Our Service That You Can Choose.</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4"> 

            {
                service.map(serve => <Service key={serve.name}
                service={serve}
                ></Service> )
            }
            </div>
        </div>
        
    );
};

export default Home;