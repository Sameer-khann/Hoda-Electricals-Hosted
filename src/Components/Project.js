import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import image1 from "../img/manu.jpg";

import { MdLocationOn } from "react-icons/md";

export default function Project() {
  return (
    <>
      <Navbar />
      <div className="photoP" >
                <img src={image1} className="d-block w-100" alt="Photo" id="propic"/>
                <div className="centeredP" id="headdddP" >OUR WORK</div>
            </div>
      
      <div className="headdd">
        <h1 style={{ textAlign: "center" ,margin:"30px 0px "}}>Our Previous Projects</h1>
        <div className="tbody" id="tbody">
          <table className="table caption-top " >
            <thead>
              <tr>  
                <th scope="col">Company Name</th>
                <th scope="col">Work Description</th>
                <th scope="col">
                  Location
                  <MdLocationOn
                    size="35px"
                    style={{ position: "relative", bottom: "2px" }}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ministry of India</td>
                <td>Carrier Chiller Plant Repair</td>
                <td>Dwarka (Delhi)</td>
              </tr>
              <tr>
                <td>ICMR Mumbai</td>
                <td>Blue Star Chiller Plant</td>
                <td>Mumbai (MH)</td>
              </tr>
              <tr>
                <td>FCI food</td>
                <td>DG Set Maintenance</td>
                <td>Motihari (Bihar)</td>
              </tr>
              <tr>
                <td>DFM Food Ltd.</td>
                <td>HVAC Electrical Work</td>
                <td>Noida Kasna, UP</td>
              </tr>
              <tr>
                <td>Akums Pharma Pvt Ltd</td>
                <td>HVAC Electricals & MS Piping</td>
                <td>Haridwar, UK</td>
              </tr>
              <tr>
                <td>Pure & Cure Pvt Ltd.</td>
                <td>HVAC Electricals & MS Piping</td>
                <td>Haridwar, UK</td>
              </tr>
              <tr>
                <td>Ankar Pharma Ltd.</td>
                <td>All HVAC Work</td>
                <td>Haridwar, UK</td>
              </tr>
              <tr>
                <td>Accord Pharma Pvt Ltd.</td>
                <td>Electrical & BMS Work</td>
                <td>Kathmandu, Nepal</td>
              </tr>
              <tr>
                <td>National Pharma Pvt Ltd</td>
                <td>Biometric Door Interlocking</td>
                <td>Birgunj, Nepal</td>
              </tr>
              <tr>
                <td>Maruti Pharma Pvt Ltd</td>
                <td>Biometric Door Interlocking</td>
                <td>Birgunj, Nepal</td>
              </tr>
              <tr>
                <td>Arownet Pharma Pvt Ltd</td>
                <td>BMS/ EMS Work</td>
                <td>Bhiwadi, Rajasthan</td>
              </tr>
              <tr>
                <td>Asahi India Glass Ltd</td>
                <td>HVAC BMS Work For AHU</td>
                <td>Rewari Haryana</td>
              </tr>

              <tr>
                <td>IPCA Laboratories Ltd</td>
                <td>BMS Wire Less system</td>
                <td>Indoor, MP</td>
              </tr>

              <tr>
                <td>Sterling & Wilson</td>
                <td>Automation in Parking Exhaust System</td>
                <td>Noida UP</td>
              </tr>

              <tr>
                <td>Step By Step School</td>
                <td>VRF With AHU Ducting & Electrical</td>
                <td>Noida UP</td>
              </tr>

              <tr>
                <td>Sun Pharma Laboratories</td>
                <td>DIS/EMS/BMS</td>
                <td>Sikkim</td>
              </tr>

              <tr>
                <td>Arrow Pharma</td>
                <td>DIS/EMS/BMS</td>
                <td>Kathmandu Nepal</td>
              </tr>

              <tr>
                <td>DMRC</td>
                <td>Data Logger</td>
                <td>Sarita Vihar, Delhi</td>
              </tr>

              <tr>
                <td>Abbott Pharma Pvt Ltd</td>
                <td>DIS/EMS/BMS</td>
                <td>Baddi Himachal</td>
              </tr>

              <tr>
                <td>Alps Pharma</td>
                <td>DX Unite With AHU</td>
                <td>Almora Himachal</td>
              </tr>

              <tr>
                <td>Maurya Sheraton Hotel</td>
                <td>Chiller Plant With AHU</td>
                <td>Agra</td>
              </tr>

              <tr>
                <td>Irish Pharma</td>
                <td>EMS/BMS</td>
                <td>Guwahati Assam</td>
              </tr>

              <tr>
                <td>Intellectual Property of India</td>
                <td>Blue Stare chiller plant Repair</td>
                <td>Dwarka Delhi</td>
              </tr>

              <tr>
                <td>Q Cinema</td>
                <td>AHU Ducting Work</td>
                <td>Shahdara Delhi</td>
              </tr>

              <tr>
                <td>FCI food</td>
                <td>DG Set Repaire AMC with DG</td>
                <td>Motihari, Bihar</td>
              </tr>

              <tr>
                <td>Panacea Biotec</td>
                <td>Door Interlocking</td>
                <td>Lalru Punjab</td>
              </tr>

              <tr>
                <td>Med Therapy India</td>
                <td>EMS Work Room slim Monitor</td>
                <td>Noida UP</td>
              </tr>

              <tr>
                <td>Sapigen Biologix Pvt Ltd</td>
                <td>BMS & EMS Work</td>
                <td>Odisha</td>
              </tr>

              <tr>
                <td>ICMR Building Mumbai</td>
                <td>Chiller Plant With Cassette Unit</td>
                <td>Parel Mumbai</td>
              </tr>

              <tr>
                <td>Iffco Tokio</td>
                <td>VRV With Cassette & Electrical Work</td>
                <td>Lucknow UP</td>
              </tr>

              <tr>
                <td>Vartika Chemicals & Pharma</td>
                <td>All Industrial Electrical & Automation Work</td>
                <td>Bhiwadi Rajisthan</td>
              </tr>

              <tr>
                <td>
                  Radix electrosystems pvt ltd (Dr Reddy pharmaceutical pvt ltd)
                </td>
                <td>Door interlocking system</td>
                <td> Baddi Himachal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
