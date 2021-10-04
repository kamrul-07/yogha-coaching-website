import React from 'react';
import "../About/About.css"
import pic from '../About/images/man-meditating-on-yoga-mat-e1615490393771.jpg'
import pictu from '../About/images/man-practicing-yoga-at-his-home-e1615490632825.jpg'
import picture from '../About/images/man-relaxing-with-yoga-in-bedroom--e1615490473756.jpg'
import imge from '../About/images/woman-holds-yoga-mat-e1615486417218.jpg'
import img from '../About/images/yoga-1-e1615490356785.jpg'
import image from '../About/images/yoga-e1615490322241.jpg'

const About = () => {
    return (
        <div>
            <h1 className="text-style fst-italic text-center">Awesome Instructors</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 shadow-lg p-3 mb-5 bg-body rounded">
  <div class="col">
    <div class="card h-100">
      <img src={pic} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body text-center">
        <h5 class="card-title">Nathan D Olsen</h5>
        <p class="card-text">Instructor</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={pictu} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body text-center">
        <h5 class="card-title">Shayne J Weekley</h5>
        <p class="card-text">Instructor</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={picture} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body text-center">
        <h5 class="card-title">Michael C Davis</h5>
        <p class="card-text">Trainer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={imge} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body text-center">
        <h5 class="card-title">Brittany R Hartzler</h5>
        <p class="card-text">Trainer</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={img} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body text-center">
        <h5 class="card-title">Nikki W Elder
</h5>
        <p class="card-text">Trainer</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={image} class="card-img-top" alt="..."/>
      <div class="card-body text-center">
        <h5 class="card-title">Judith B Wright</h5>
        <p class="card-text">Trainer</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;