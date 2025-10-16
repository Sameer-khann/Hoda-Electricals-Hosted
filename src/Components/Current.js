import React from "react";

import img1 from "../img/ICMR.jpg";
import img2 from "../img/iffco.jpg";
import img3 from "../img/Vartika.png";
import img4 from "../img/radix.png";
import { Link } from "react-router-dom";

export default function Current() {
  return (
    <>

      <h3 style={{ textAlign: "center", marginTop: "80px",fontWeight:"bolder" }}>CURRENT PROJECTS</h3>
      <div
        className="row servise"
        style={{ justifyContent: "center", marginTop: "50px" }}
      >
        <Link className="card" id="card" style={{textDecoration:"none",color:"black"}}  to="/Project">
          <div className="ico" style={{ display: "flex", justifyContent: "center", margin: "20px 5px" }}>
            <img src={img1} className="d-block w-100" alt="..." style={{ width: "100%", height: "200px" }} />
          </div>
          <div className="card-body" style={{textAlign:"center"}}>
            <h5 className="card-title">ICMR Building Mumbai</h5>
            <p className="card-text">Chiller Plant With Cassette Unit </p>
            <p className="card-text">Parel, Mumbai</p>
          </div>
        </Link>

        <Link className="card" id="card" style={{textDecoration:"none",color:"black"}}  to="/Project">
          <div className="ico" style={{ display: "flex", justifyContent: "center", margin: "20px 5px", }}>
            <img src={img2} className="d-block w-100" alt="..." style={{ width: "100%", height: "200px" }} />
          </div>
          <div className="card-body" style={{textAlign:"center"}}>
            <h5 className="card-title">Iffco Tokio</h5>
            <p className="card-text">VRV With Cassette & Electrical Work</p>
            <p className="card-text">
              Lucknow UP
            </p>
          </div>
        </Link>

        <Link className="card" id="card" style={{textDecoration:"none",color:"black"}}  to="/Project">
          <div className="ico" style={{ display: "flex", justifyContent: "center", margin: "20px 5px", }} >
            <img src={img3} className="d-block w-100" alt="..." style={{ width: "100%", height: "200px" }} />
          </div>
          <div className="card-body" style={{textAlign:"center"}}>
            <h5 className="card-title">Vartika Chemicals & Pharma</h5>
            <p className="card-text">All Industrial Electrical & Automation Work</p>
            <p className="card-text">
              Bhiwadi, Rajasthan
            </p>
          </div>
        </Link>

        <Link className="card" id="card" style={{textDecoration:"none",color:"black"}}  to="/Project">
          <div className="ico" style={{ display: "flex", justifyContent: "center", margin: "20px 5px", }} >
            <img src={img4} className="d-block w-100" alt="..." style={{ width: "200%", height: "150px", marginBottom: "40px" }} />
          </div>
          <div className="card-body" style={{textAlign:"center"}}>
            <h5 className="card-title">Radix Electrosystems Pvt. Ltd. (Dr Reddy pharmaceutical pvt ltd)</h5>
            <p className="card-text"> Door interlocking system</p>
            <p className="card-text">
              Baddi, Himachal Pradesh
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
