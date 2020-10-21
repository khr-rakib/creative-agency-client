import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Navbar from '../navbar/Navbar';
import './Hero.css'
import frameImg from '../../../assets/images/logos/Frame.png';


const Hero = () => {
    return (
        <div className="app__hero">
            <Navbar />

            <Container>
                <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                        <div className="hero__left">
                            <h2>
                                Let’s Grow Your <br />
                                Brand To The <br />
                                Next Level <br />
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                            </p>
                            <button className="black__btn">
                                Hire Us
                            </button>
                        </div>
                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <div className="hero__right">
                            <img src={frameImg} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>


        </div>
    );
};

export default Hero;