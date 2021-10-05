import React from 'react';
import '../Gallary/Gallary.css'
import img from '../Gallary/Images/aerial-different-inversion-antigravity-yoga-with-a-hammock-1.jpg'
import imge from '../Gallary/Images/aerial-different-inversion-antigravity-yoga-with-a-hammock-3.jpg'
import imag from '../Gallary/Images/aerial-different-inversion-antigravity-yoga-with-a-hammock-4.jpg'
import image from '../Gallary/Images/aerial-different-inversion-antigravity-yoga-with-a-hammock-e1615619455406.jpg'
import photo from '../Gallary/Images/girl-practicing-yoga-e1615619527135.jpg'
import pic from '../Gallary/Images/group-of-multinational-women-attending-outdoor-yoga-practice-at-park-e1615619404397.jpg'

import '../Gallary/Gallary.css'

const Gallary = () => {
    return (
        <div>
           <p className="fst-italic fill2 text-center fs-4">gallery <i className="fab fa-fly fs-1"></i></p>
            <h2 className="text-center fst-italic fill">The Best Moment Captured in Our Yoga Studio.</h2>

            <div className="container mt-3 mt-3">
            <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100 border-0">
      <img src={img} className="card-img-top shadow p-3 mb-5 bg-body rounded" alt="..."/>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border-0">
      <img src={imge} className="card-img-top shadow p-3 mb-5 bg-body rounded" alt="..."/>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border-0">
      <img src={imag} className="card-img-top shadow p-3 mb-5 bg-body rounded" alt="..."/>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border-0">
      <img src={image} className="card-img-top shadow p-3 mb-5 bg-body rounded" alt="..."/>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border-0">
      <img src={photo} className="card-img-top shadow p-3 mb-5 bg-body rounded" alt="..."/>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border-0">
      <img src={pic} className="card-img-top shadow p-3 mb-5 bg-body rounded" alt="..."/>
    </div>
  </div>
</div>
  </div>   
  </div>
    );
};

export default Gallary;