import React from 'react'
import { FaTools } from 'react-icons/fa';
import { BsFillLightbulbFill } from 'react-icons/bs';
import { GiAutoRepair } from 'react-icons/gi';
import { GrUserWorker } from 'react-icons/gr';
import { Link } from "react-router-dom";


export default function ServicePageBox() {
  return (
    <>
            <h3 style={{textAlign:"center",marginTop: "50px",fontWeight:"bolder"}}>OUR SERVICES</h3>
        <div className="row servise" >
                <Link className="card" id='card' style={{textDecoration:"none",color:"black"}} to="/Servises">
                    <div className="ico" style={{ display: "flex", justifyContent: "center", margin: "20px 5px" }}>
                        <FaTools size="5rem" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontWeight:"bolder"}}>MECHANICAL</h5>
                        <p className="card-text">1. Chiller Plant Repair, Maintenance & Installation
                            <br />
                            2. Pipeline Laying
                            <br />
                            3. Ducting Fabrication
                            <br />
                            4. Fire Fitting
                            <br />
                            5. Pump Room Set Installation
                            <br />
                            6. DG Set Repair
                            <br />
                            7. VRV/VRF System Installation & Maintenance</p>
                    </div>
                </Link>

                <Link className="card" id='card'  style={{textDecoration:"none",color:"black"}}  to="/Servises">
                    <div className="ico" style={{ display: "flex", justifyContent: "center", margin: "20px 5px" }}>
                        <BsFillLightbulbFill size="5rem" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontWeight:"bolder"}}>ELECTRICAL</h5>
                        <p className="card-text">1. Electrical Panel Manufacturing
                            <br />
                            2. MCC Panel / LT Panel
                            <br />
                            3. AMF Panel
                            <br />
                            4. Cable Tray Laying
                            <br />
                            5. Cable Laying
                            <br />
                            6. Industrial Electrical Wiring
                            <br />
                            7. Fire Alarm, Smoke Sensor
                            <br />
                            8. Smoke Detector, Fire Panel  <br />
                            9. All Electrical Equipment Installation</p>
                    </div>
                </Link>

                <Link className="card" id='card'  style={{textDecoration:"none",color:"black"}} to="/Servises">
                    <div className="ico" style={{ display: "flex", justifyContent: "center", margin: "20px 5px" }}>
                        <GiAutoRepair size="5rem" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontWeight:"bolder"}}>AUTOMATION</h5>
                        <p className="card-text">1. BMS Work / AHU Automation
                            <br />
                            2. EMS
                            <br />
                            3. Clean Room Monitoring
                            <br />
                            4. DP Installation / SCADA Programming
                            <br />
                            5. All Types of Automation for Door Interlocking Systems</p>
                    </div>
                </Link>

                <Link className="card" id='card'  style={{textDecoration:"none",color:"black"}} to="/Servises">
                    <div className="ico" style={{ display: "flex", justifyContent: "center", margin: "20px 5px" }}>
                        <GrUserWorker size="5rem" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontWeight:"bolder"}}>TESTING AND COMMISSIONING</h5>
                        <p className="card-text">1. Air and Water Balancing
                            <br />
                            2. Functional Performance Testing
                            <br />
                            3. Control System Verification
                            <br />
                            4. Clean Room Testing
                            <br />
                            5. Sound and Vibration
                            <br />
                            6. Duct Leakage Testing
                            <br />
                            7. Indoor Environmental Testing
                            <br />
                            8. Pre-Construction Plan Review</p>
                    </div>
                </Link>
            </div>
    </>
  )
}
