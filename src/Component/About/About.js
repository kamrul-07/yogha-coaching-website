import React from 'react';
import "../About/About.css"
import pic from '../About/images/man-meditating-on-yoga-mat-e1615490393771.jpg'
import pictu from '../About/images/man-practicing-yoga-at-his-home-e1615490632825.jpg'
import picture from '../About/images/man-relaxing-with-yoga-in-bedroom--e1615490473756.jpg'
import imge from '../About/images/woman-holds-yoga-mat-e1615486417218.jpg'
import img from '../About/images/yoga-1-e1615490356785.jpg'
import image from '../About/images/yoga-e1615490322241.jpg'
import photo from '../About/images/photo-1562088287-bde35a1ea917.jpg'

const About = () => {
    return (
        <div className="container">
          <div className="border p-4 text-dark fill-colour rounded">
            <h1>ABOUT BEGINNERS YOGA </h1>
            <small className="fst-italic fw-bold">We also firmly believe that it really doesn’t matter how long your hamstrings are or whether you can touch your knees or toes or if you’re already in the cirque de soleil. Really that’s not what yoga is about. So what is yoga about?To Movement for Modern Life, yoga is simply a tool. It is a tool which is guaranteed to make you feel better. Guaranteed. Starting with a little stretch and a little strength, you will find you feel a lot better in your body, and then you may start to breathe. You may start to feel some space in your head. In your life. You may start to feel that things feel possible that you never even knew were. But don’t take our word for it. Just get moving. Forwards ever, backwards never. Get moving and keep on moving a little bit every day. We have online yoga videos to ensure that you don’t have to even go out of your way to feel a little better. Watch the videos in your time. Anytime. Anywhere. Any wear.</small>
          </div>
          
          <h1 className="text-center fst-italic text-style mt-3 mb-4">Location <i className="fas fa-map-marker-alt"></i></h1>
          
          <div className='container d-flex mt-3 mb-4'>
           
          <div className="me-5">
          <img src={photo} className="img-fluid " alt="" />
          </div>
          <div className="align-items-center mt-1 me-3 border p-5 blue-style">
            <h1 className="fs-1 text-white fst-italic ">Address:</h1>
            <br />
            <br />
            <p className=" text-white fst-italic">Feel free to contact us at any need.
            <p className='fs-4 fw-bold'><i className="fas fa-phone-square"></i> +8801870621592</p>
            <p className='fs-4 fw-bold'><i className="fas fa-envelope"></i> Email:kamrul.i.akib@gmail.com</p>
          <p className='fs-5 fw-bold'>  <i className="fas fa-street-view"></i>Kadhurkhil, Boalkhali, Chattogram, Bangladesh</p></p>
          <br />
          <br />
          <br />
          <div>
            <p className="fst-italic fw-bold">If u want to talk for advise,information and discuss to admiison,please send your email....</p>
            <br />
            <br />
            <input type="text" className="fst-italic p-1 rounded" placeholder="Enter your email"/> <button className="rounded bg-primary p-1 fw-bold">Send Mail</button>
          </div>
          </div>
          </div>


            <h1 className="text-style fst-italic text-center mt-3 mb-4">Our Awesome Instructors to guide</h1>
            
            <div className=" mt-3 row row-cols-1 row-cols-md-3 g-4 shadow-lg p-3 mb-5 bg-body rounded">
  <div className="col rounded">
    <div className="card h-100 border-0">
      <img src={pic} className="card-img-top img-fluid rounded-circle p-3" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title">Nathan D Olsen</h5>
        <p className="card-text">Instructor</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border-0">
      <img src={pictu} className="card-img-top img-fluid rounded-circle p-3" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title">Shayne J Weekley</h5>
        <p className="card-text">Instructor</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border-0">
      <img src={picture } className="card-img-top img-fluid rounded-circle p-3" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title">Michael C Davis</h5>
        <p className="card-text">Trainer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border-0">
      <img src={imge} className="card-img-top img-fluid rounded-circle p-3" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title">Brittany R Hartzler</h5>
        <p className="card-text">Trainer</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border-0">
      <img src={img} className="card-img-top img-fluid rounded-circle p-3" alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title">Nikki W Elder
</h5>
        <p className="card-text">Trainer</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border-0">
      <img src={image} className="card-img-top rounded-circle p-3 " alt="..."/>
      <div className="card-body text-center">
        <h5 className="card-title">Judith B Wright</h5>
        <p className="card-text">Trainer</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;