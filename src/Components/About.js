import React from 'react'
import img4 from '../img/ph4.jpg'
import Footer from './Footer'
import Navbar from './Navbar'

export default function About() {
    return (
        <>
            <Navbar />
            <div className="photoA">
                <img src={img4} className="imgA d-block w-100" id='projectImageA' alt="About" />
                <div className="centeredA" id='headdddA'>WHO WE ARE?</div>
            </div>
            <div className="contan">
                <div>
                    We are a professionally managed company undertaking turnkey projects in the field of air-conditioning. 
                    We introduce ourselves as one of the most experienced companies in the field of air-conditioning equipment. 
                    This is an enterprise by a technocrat with over four years of "hands-on" experience in the erection, commissioning, 
                    operation, and maintenance of all types of air-conditioning systems. 
                    We are confident of providing solutions for any type of air-conditioning needs of customers and backup support 
                    for their existing systems.
                </div>
                <br />
                <div>
                    The company was founded in 2020 and has been executing projects of all magnitudes and complexities 
                    for varied clients across the country.
                </div>
                <br />
                <div>
                    Our team believes in alleviating the usual challenges faced by clients, consultants, and PCs such as 
                    poor quality and deadline violations. We believe in delivering projects with the best possible quality, 
                    within the given time frame, on a consistent basis.
                </div>
                <br />
                <h2>OUR MISSION</h2>
                <div>
                    To make available appropriate and quality air-conditioning solutions at nominal costs to the customers 
                    while maintaining the highest standards of service and business ethics. 
                    We strive to achieve this mission by involving ourselves with the customers from the drawing to the 
                    commissioning stage and providing efficient backup support thereafter. 
                    Badri Engineering Services is a company specialized in the testing and certification of HVAC systems. 
                    Using the latest technology, standards, and instrumentation, our specialized group of engineers and 
                    technicians perform all necessary tests and adjustments to certify, modify, or design systems in order 
                    to obtain the required performance standards for industrial, hospital, and commercial applications. 
                    With strong engineering support, Badri Engineering Services is capable of dealing with unexpected situations 
                    where system components or designs have to be altered promptly and effectively. 
                    All work is supervised and certified by licensed engineers specialized in this field, using standards and 
                    procedures from the most recognized agencies and organizations related to testing and balancing specialization.
                </div>
            </div>

            <div className="row" id='rowcon' style={{ margin: "0", marginBottom: "100px" }}>
                <div className="rowleft">
                    <h3>PROJECT EXECUTION</h3>
                    <div>
                        We have a team of highly trained and experienced installation and service technicians. 
                        Using computerized design, estimating, and scheduling technology, we are able to effectively 
                        manage our craftsmen, ensure superior quality control, and meet the most rigorous time schedules.
                    </div>
                </div>
                <div className="rowright">
                    <h3>OUR CORE STRATEGIES</h3>
                    <div>
                        Treat air-conditioning as a 'necessity' rather than a 'luxury' and orient customer attitudes accordingly. 
                        Educate industrial users about the concept of 'service with quality at nominal cost.' 
                        Incorporate service support as an integral part of our business strategy. 
                        The enclosed sheets further detail our company profile and existing organizational setup. 
                        For further clarification, please feel free to revert back.
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
