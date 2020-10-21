import React from 'react';
import Client from './client/Client';
import Feedback from './feedback/Feedback';
import Footer from './footer/Footer';
import Hero from './hero/Hero';
import Service from './service/Service';
import Work from './work/Work';

const Home = () => {
    return (
        <div>
            <Hero />
            <Client />
            <Service />
            <Work />
            <Feedback />
            <Footer />
        </div>
    );
};

export default Home;