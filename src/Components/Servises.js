import React from 'react'
import img5 from '../img/ph5.jpg'
import img6 from '../img/ph6.jpg'
import Navbar from './Navbar';
import Footer from './Footer';
import img4 from '../img/Space- cooling-chiller.jpg'
import ServicePageBox from './ServicePageBox';

export default function Services() {
    return (
        <>
            <Navbar />
            <div className="photoS" >
                <img src={img4} className="d-block w-100" id='projectImageS' alt="Service" />
                <div className="centeredS" id='headdddS'>SERVICES</div>
            </div>

            <div className="bohead" >
                <span style={{ textAlign: "center", display: "flex", justifyContent: "center", padding: "70px  30px 20px 30px ", fontSize: "20px" }}>
                    Hoda Air Conditioning & Electricals Service has a dedicated team undertaking regular maintenance and servicing jobs for all its installations. Our engineers and technicians are intensively trained to handle costly, sophisticated air-conditioning installations at client sites. We aim to provide total comfort and peace of mind that incorporates safety, efficiency, and economy.
                </span>
            </div>

            <ServicePageBox />

            <div className="row serviseRow">
                <div className="leftS" >
                    <h1>OUR STRENGTH</h1>

                    <div className="contanS" style={{ fontSize: "18px" }}>
                        <div>1. <span style={{ fontWeight: "bold" }}>Company ethos and guiding principles</span>: As imbibed from our managing director and founding employees, our company DNA speaks of focusing on not compromising on quality, timelines, client satisfaction, and being fair and honest to our suppliers, sub-contractors, and other associated partners.</div>
                        <br />
                        <div>2. <span style={{ fontWeight: "bold" }}>Our key personnel</span>: As it is rightly remarked that an organization is as great as the collective greatness of its employees, we pride ourselves on retaining the most talented and respected workforce in the sector. It is composed of a healthy mix of senior employees who have served us since the inception of the company and also young professionals who strengthen the bench and support teams.</div>
                        <br />
                        <div>3. <span style={{ fontWeight: "bold" }}>Size of the organization</span>: We are an appropriately sized organization, which imparts us flexibility and a much faster response time than our competitors. Also, when push comes to shove, we can adjust better than most other companies in this field to bolster our support staff.</div>
                        <br />
                        <div>4. <span style={{ fontWeight: "bold" }}>Our clients</span>: A man is known by the company he keeps. We wish to be associated with our esteemed clients. This not only reinforces our commitment to work harder and deliver better results but is also a testimonial to the effort we put in as a team to achieve complete client satisfaction.</div>
                        <br />
                        <div>5. <span style={{ fontWeight: "bold" }}>Our commitment</span>: Having successfully bid and completed close to 300 projects, we are proud to state that we do not have any track record of exceeding mutually agreed-upon project completion timelines or client dissatisfaction. We believe in fostering relationships and working in harmony with other contractors to ensure direct as well as indirect support to the project. We steadfastly pursue our goals to achieve 100% client satisfaction and, in the process, further our cause and reputation.</div>
                        <br />
                        <div>6. <span style={{ fontWeight: "bold" }}>Our relationships with other partners</span>: We share an excellent rapport with major vendors, suppliers, contractors, sub-contractors, PMCs, and consultants. This is primarily owing to our transparent culture, which instills a sense of confidence in our partners while dealing with us.</div>
                    </div>
                </div>

                <div className="rightS" >
                    <h1>FOR OPERATION AND MAINTENANCE</h1>

                    <div className="contanS" style={{ fontSize: "18px" }}>
                        <div>
                            • <span style={{ fontWeight: "bold" }}>Trained and skilled engineers</span> / technicians for problem-solving
                            <br />
                            • We have teams of <span style={{ fontWeight: "bold" }}>technicians and helpers</span> to ensure the safety of our employees and faster resolution of issues.
                            <br />
                            • All service personnel are equipped with <span style={{ fontWeight: "bold" }}>mobile phones</span> and <span style={{ fontWeight: "bold" }}>personal</span> conveyance to ensure minimum call revert time.
                            <br />
                            • <span style={{ fontWeight: "bold" }}>Call escalation matrix</span> to ensure that breakdown/service calls are escalated to all levels in case of delays or emergencies.
                        </div>
                        <br />
                        <img src={img5} alt="Operation" style={{ width: "100%", height: "25%" }} />
                        <br /><br />
                        <div>
                            • <span style={{ fontWeight: "bold" }}>Service Level Agreements</span> (SLA) to ensure our commitment is made transparent on paper.
                            <br />
                            • <span style={{ fontWeight: "bold" }}>Skilled technicians and operators for plant and AHU operation</span>. Our operators maintain logbooks to track energy consumption, warnings/alarms generated, and various other operating parameters.
                            <br />
                            • <span style={{ fontWeight: "bold" }}>Latest gadgets/instruments</span> are used by our engineers to measure temperature, humidity, air velocity, and other electrical parameters.
                        </div>
                        <br />
                        <img src={img6} alt="Maintenance" style={{ width: "100%", height: "25%" }} />
                        <br /><br />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
