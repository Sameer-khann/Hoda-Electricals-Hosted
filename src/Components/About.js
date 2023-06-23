import React from 'react'
import img4 from '../img/ph4.jpg'
import Footer from './Footer'
import Navbar from './Navbar'

export default function About() {
    return (
        <>
        <Navbar/>
            <div className="photoA" >
                <img src={img4}  className=" imgA d-block w-100" id='projectImageA' alt="Photo" />
                <div className="centeredA" id='headdddA'>WHO WE ARE?</div>
            </div>
            <div className="contan" >
                <div >We are a professionally managed company undertaking turnkey projects in the field of air- conditioning. We introduce ourselves as one of the most experienced in the field of air conditioning equipment's. This is an enterprise by a technocrat with over Four years of "hands on" experience in erection, commissioning, operation and maintenance of all types of air conditioning systems. We are confident of providing solution for any type of air conditioning needs of customers and back-up support for their existing systems.</div>
                <br />
                <div>The company was founded in 2020 and has been executing projects of all magnitudes and complexity for varied clients in all corners of the country.</div>
                <br />
                <div>Our team believes in alleviating the usual maladies that our faced by clients, consultants and PC's such as poor quality, deadline violations etc We believe in delivering the project, with the best possible quality, within the given time frame, on a consistent basis.</div>
                <br />
                <h2 >OUR MISSION</h2>
                <div>To make available appropriate and quality air conditioning solution, at nominal costs to the customers while maintaining the highest standards of service and business ethics"
                    We strive to achieve this mission by involving ourselves with the customers from the drawing to the commissioning stage and providing efficient back-up support thereafter.Badri Engineering Services, is a company specialized in the testing and certification of HVAC systems. Using the latest technology, standards and instrumentation, our specialized group of engineers and technicians perform all necessary tests and adjustments to certify, modity or design in order to obtain required systems performance found for industry, hospital and commercial applications. Due to the engineering support, Badri Engineering Services is capable to deal with unexpected situations where the systems components or design have to be altered with prompt action and effectively. All works are supervised and certified by licensed engineers specialized in this field and using standards and procedures of the most recognized agencies and related organizations for the testing and balancing specialization.</div>
                    </div>
                    
                <div className="row"id='rowcon' style={{ margin: "0" ,marginBottom:"100px"}}>
                    <div className="rowleft">
                        <h3>PROJECT EXECUTION</h3>
                        <div>We have a team of Highly Trained and Experienced Installation and Service Technicians. Using Computerized Design, Estimating and Scheduling Technology, we are able to effectively manage our craftsmen, ensure superior quality control, and meet the most rigorous time schedules.</div>
                    </div>
                    <div className="rowright">
                        <h3>OUR CORE STRATEGIES</h3>
                        <div>Treat air conditioning as 'Necessity' rather than luxury' and orient customer attitude accordingly.
                            Educate the industrial user about the concept of 'Service with quality at nominal cost'. Incorporate service support as an integral part of our business strategy.
                            The enclosed sheets further detail our company profile and existing organizational set-up. Further clarification, please feel free to revert back.</div>

                    </div>
                </div>
                <Footer/>
            </>
            )
}
