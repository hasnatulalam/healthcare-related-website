import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = ({doctor}) => {
    const{name,img}=doctor
    return (
        <div className=" col-lg-4 col-md-6 col-sm-12">
             <div className="cart-top">
              <div className="cart-details">
                <img className="w-100 h-100" src={img} alt="" />
              </div>
              <div className="text-area">
                <h4> Name:{name}</h4>
                
                 
                
                 
                  
                <Link to={`/connect/${name}`}>
                    <button className="btn btn-success">Book:{name.toLowerCase()}</button>
                    </Link>
                   
                   
                   
               
               </div>
            </div>
            </div> 
    );
};

export default Doctor;