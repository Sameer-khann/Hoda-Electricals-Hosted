import React from 'react'
import Navbar from './Navbar';
import img1 from '../img/ph9.jpg'
import img2 from '../img/eng-image2.jpg'
import img3 from '../img/ph3.jpg'
import Footer from './Footer';
import ServicePageBox from './ServicePageBox';
// import img4 from '../img/ph4.jpg'
// import img5 from '../img/ph5.jpg'
// import img6 from '../img/.jpg'
// import img3 from '../img/notebg2.jpg'
import { Link } from "react-router-dom";
import Current from './Current';
import Homepage2 from './Homepage2';


export default function Carousel() {

  return (
    <>
      <Navbar/>

      <div id="carouselExampleSlidesOnly" className="carousel carousel-fade" data-bs-ride="carousel" >
  <div className="carousel-inner" id='carousel-inner' >
    <div className="carousel-item active" id='carousel-item' >
    <img src={img1} className=" img d-block " id='img' alt="..." />
    <div className="carousel-caption ">
        <h1 className='display-1 text-capitalize'>HODA</h1>
        <p className='text-uppercase'>Air Conditioning & Electricals Service</p>
        <button  className='btn btn-primary'>
        <Link className="nav-link active " to="/Contact">CONTACT US</Link>
        </button>        
      </div>
    </div>
    <div className="carousel-item" id='carousel-item'>
    <img src={img2} className="img d-block "  id='img' alt="..." />
    <div className="carousel-caption ">
        <h1 className='display-1 text-capitalize'>HODA</h1>
        <p className='text-uppercase'>Air Conditioning & Electricals Service</p>
        <button  className='btn btn-primary '>
        <Link className="nav-link active " to="/Contact">CONTACT US</Link>
        </button>        
      </div>
    </div>
    <div className="carousel-item" id='carousel-item'>
    <img src={img3} className=" img d-block "  id='img' alt="..."/>
    <div className="carousel-caption ">
        <h1 className='display-1  text-capitalize'>HODA</h1>
        <p className='text-uppercase'>Air Conditioning & Electricals Service</p>
        <button  className='btn btn-primary'>
        <Link className="nav-link active " to="/Contact">CONTACT US</Link>
        </button>        
      </div>

    </div>
  </div>
</div>

<div className='aboutContant' id='aboutContant'><h4>We specialize in the sales, erection, and commissioning of centralized air-conditioning systems, serving clients across NCR and India. We also provide maintenance and services at various sites and undertake direct projects from clients related to the erection, commissioning, maintenance, and operation of AC equipment.</h4></div>
<ServicePageBox/>
<Current/>

<Homepage2/>

<br/>
<br/>
<Footer/>
    </>
  )
}
