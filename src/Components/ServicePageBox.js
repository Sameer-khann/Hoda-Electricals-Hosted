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
                        <p className="card-text">1. Chiller Plant Repair maintanence Installation
                            <br />
                            2. Pipe Line Laying
                            <br />
                            3. Duting Febricating
                            <br />
                            4. Fire Fiting
                            <br />
                            5. Pumpe Room Set Installation
                            <br />
                            6. DG Set Repaire
                            <br />
                            7. VRV/RF Sysyem Installation & maintanance</p>
                    </div>
                </Link>

                <Link className="card" id='card'  style={{textDecoration:"none",color:"black"}}  to="/Servises">
                    <div className="ico" style={{ display: "flex", justifyContent: "center", margin: "20px 5px" }}>
                        <BsFillLightbulbFill size="5rem" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontWeight:"bolder"}}>ELECTRICAL</h5>
                        <p className="card-text">1. Electricals Panel Manufacture
                            <br />
                            2. MCC Panel LT Panel
                            <br />
                            3. AMF Panel
                            <br />
                            4. Cable Tray Laying
                            <br />
                            5. Cable Laying
                            <br />
                            6. Industrial Electrical Wireng
                            <br />
                            7. Fire Alarm, Smock Sensor
                            <br />
                            8. Smock Ditactor, Fire Panel  <br />
                            9. And All Electrical Equpment
                            Installation</p>
                    </div>
                </Link>

                <Link className="card" id='card'  style={{textDecoration:"none",color:"black"}} to="/Servises">
                    <div className="ico" style={{ display: "flex", justifyContent: "center", margin: "20px 5px" }}>
                        <GiAutoRepair size="5rem" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontWeight:"bolder"}}>AUTOMATION</h5>
                        <p className="card-text">1. BMS Work AHU Auto metion
                            <br />
                            2. EMS
                            <br />
                            3. Clean Room Monitor
                            <br />
                            4. DP Installation Scada Programing
                            <br />
                            5. And All Type Auto Metion Door
                            Inter Locking System</p>
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
