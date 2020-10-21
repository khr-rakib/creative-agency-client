import React from 'react';
import { Container, Grid } from '@material-ui/core';
import slack from '../../../assets/images/logos/slack.png';
import uber from '../../../assets/images/logos/uber.png';
import netflix from '../../../assets/images/logos/netflix.png';
import google from '../../../assets/images/logos/google.png';
import airbnb from '../../../assets/images/logos/airbnb.png';


const Client = () => {
    return (
        <Container>
            <Grid container spacing={3} style={{ margin: "50px 0" }}>
                <Grid item xs={6} sm={2} style={{ textAlign: "center" }}>
                    <img style={{ width: "140px", height: "45px" }} src={slack} alt="" />
                </Grid>

                <Grid item xs={6} sm={2} style={{ textAlign: "center" }}>
                    <img style={{ width: "140px", height: "45px" }} src={google} alt="" />
                </Grid>

                <Grid item xs={6} sm={2} style={{ textAlign: "center" }}>
                    <img style={{ width: "140px", height: "45px" }} src={uber} alt="" />
                </Grid>

                <Grid item xs={6} sm={2} style={{ textAlign: "center" }}>
                    <img style={{ width: "140px", height: "45px" }} src={netflix} alt="" />
                </Grid>

                <Grid item xs={6} sm={2} style={{ textAlign: "center" }}>
                    <img style={{ width: "140px", height: "45px" }} src={airbnb} alt="" />
                </Grid>
                <Grid item xs={6} sm={2} style={{ textAlign: "center" }}>
                    <img style={{ width: "140px", height: "45px" }} src={slack} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Client;