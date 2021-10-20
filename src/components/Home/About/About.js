import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance,  faClinicMedical,  faPills,  } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  

    return (
        <div id="about">
        <section className="my-5 container">
            <div className="row">
            
                <div className="col-md-5 mb-3">
                    <img className="img-fluid" src="https://i.ibb.co/Mptzj8M/about.jpg" alt="" />
                </div>
                <div className="col-md-6 mb-2">
                {/* <h4 className="text center"><i>About Hospital</i></h4> */}
                   
                    <div className="text-center">
                    <h3 className="fw-bolder text-center text-danger"><i>We always provide <br /> best service in this town</i> </h3>
                    </div>
                   
                    <p>We are providing best doctor in this town. Doctor is our real hero.In pandamic they faces lots of provlem but they do not leave their duty. We are trying to respect all doctors</p>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <div className="overflow-hidden w-25">
                            <h6>Pharmacy</h6>
                            <FontAwesomeIcon icon={faPills} style={{ fontSize: '4em',color:'blue' }}></FontAwesomeIcon>
                            
                            
                        </div>
                        <div className="overflow-hidden w-25">
                            <h6>Ambulance</h6>
                            <FontAwesomeIcon icon={faAmbulance} style={{ fontSize: '4em',color:'blue' }}></FontAwesomeIcon>
                          
                        </div>
                        <div className="overflow-hidden w-25">
                            <h6>Our Cabin</h6>
                            <FontAwesomeIcon icon={faClinicMedical} style={{ fontSize: '4em',color:'blue' }}></FontAwesomeIcon>
                        
                        </div>  
                    </div>

                </div>
            </div>
        </section>
        </div>
    );
};

export default About;