   
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);

    // Loading Data 
    useEffect(() => {
        fetch('/Services.JSON')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [])
   
    const details =services.filter((s)=>s.id==serviceId)
    console.log(details)
    return (
        <div className="mb-5 col-lg-4 col-sm-6 ">
            <div className="booking">
        <div className="card shadow-lg w-100 h-100 text-center rounded vehicleCard ">
            <div className="d-flex justify-content-center align-items-center h-75 p-2">
                <img src={details[0]?.img} className="card-img-top h-75 w-75" alt="" />
            </div>
            <div className="card-body">
            <h3 className="text-warning fw-bold">Services name: {details[0]?.name}</h3>
                <p className="text-primary">{details[0]?.description}</p>
            </div>
            <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between ">
                    <h3 className="text-warning fw-bold"> Service Booking $ {details[0]?.price}</h3>
                   
                </div>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Booking;