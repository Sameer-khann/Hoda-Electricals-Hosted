import React from "react";
import photo1 from "../img/Maruti.jpeg";
import photo2 from "../img/dfm.png";
import photo3 from "../img/Govt.jpeg";
import photo4 from "../img/DMRC.jpg";
import photo5 from "../img/AKUMS.jpg";

import { BsFacebook } from "react-icons/bs";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";

// import Fade from "react-reveal/Fade";
import { Fade } from 'react-awesome-reveal';

export default function Homepage2() {
  return (
    <>
      <div className="image">
        <div className="imagePlace">
        </div>
    
        <div
          className=""
          style={{ justifyContent: "center", marginTop: "40px" }}
        >
         
        </div>
        <h3 style={{ textAlign: "center", marginTop: "60px",fontWeight:"bolder" }}>WE WORK WITH</h3>
        <div
          className="companies d-flex justify-content-around"
          style={{ marginTop: "40px", flexBasis: "20%" }}
        >
          <Fade left>

            <img
            className="imgg" 
              src={photo1}
              alt="image1"
              id="imgg" />

            <img
            className="imgg"
              src={photo2}
              alt="image2"
              id="imgg" />
          </Fade>

          <Fade big duration={1500}>

            <img
            className="imgg"
              src={photo3}
              alt="image3"
              id="imgg" />
          </Fade>

          <Fade right>

            <img
            className="imgg"
              src={photo4}
              alt="image4"
              id="imgg" />

            <img
            className="imgg"
              src={photo5}
              alt="image5"
              id="imgg" />
          </Fade>
        </div>
        <Fade bottom>

          <div  className="links "style={{  marginTop: "50px",display:"flex",alignItems:"center", justifyContent:"center" ,cursor:"pointer"}} >
            <BsFacebook size="4rem"/>
            <TiSocialYoutubeCircular size="5.2rem" style={{margin:"0 40px "}} />
            <AiFillTwitterCircle size="4.7rem"/>
          </div>
        </Fade>
        <div>
          
        </div>
      </div>
    </>
  );
}
