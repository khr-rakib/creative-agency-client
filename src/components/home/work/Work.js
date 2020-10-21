import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Work.css'

import carousel1 from '../../../assets/images/carousel-1.png'
import carousel2 from '../../../assets/images/carousel-2.png'
import carousel3 from '../../../assets/images/carousel-3.png'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Work = () => {
    return (
        <div className="work__area">
            <Container>
                <Typography variant="h3" className="section__title">Here are some of  <span> our works </span></Typography>
                <Carousel responsive={responsive} showDots={true} >
                    <div className="work__box">
                        <img src={carousel1} alt="" />
                    </div>
                    <div className="work__box">
                        <img src={carousel2} alt="" />
                    </div>
                    <div className="work__box">
                        <img src={carousel3} alt="" />
                    </div>
                    <div className="work__box">
                        <img src={carousel2} alt="" />
                    </div>
                </Carousel>
            </Container>
        </div>

    );
};

export default Work;