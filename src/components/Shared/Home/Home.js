import React from 'react';
import About from '../../About/About';

import Banner from '../Banner/Banner';
 
 import Services from '../Services/Services'
 import Doctor from '../Doctor/Doctors'

const Home = () => {
    return (
        <div id="home">
           
            <Banner></Banner>
            <About></About>
            
             <Services></Services>
             <Doctor></Doctor>
           
        </div>
    );
};

export default Home;