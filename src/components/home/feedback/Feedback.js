import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import './Feedback.css'
import customer1 from '../../../assets/images/customer-1.png'
import customer2 from '../../../assets/images/customer-2.png'
import customer3 from '../../../assets/images/customer-3.png'

const Feedback = () => {
    return (
        <div className="feedback__area">
            <Container>
                <Typography variant="h3" className="section__title">Here are some of  <span> our works </span></Typography>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <div className="feedback__box">
                            <div className="feedback__box__top">
                                <div>
                                    <img src={customer1} alt="" />
                                </div>
                                <div>
                                    <h4>Nash Patrik</h4>
                                    <span>CEO, Manpol</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <div className="feedback__box">
                            <div className="feedback__box__top">
                                <div>
                                    <img src={customer2} alt="" />
                                </div>
                                <div>
                                    <h4>Nash Patrik</h4>
                                    <span>CEO, Manpol</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <div className="feedback__box">
                            <div className="feedback__box__top">
                                <div>
                                    <img src={customer3} alt="" />
                                </div>
                                <div>
                                    <h4>Nash Patrik</h4>
                                    <span>CEO, Manpol</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </div>

    );
};

export default Feedback;