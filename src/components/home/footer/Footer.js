import React from 'react';
import { Container, Grid, TextField } from '@material-ui/core';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer__area">
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <div className="footer__left">
                            <h3>
                                Let us handle your project, professionally.
                            </h3>
                            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <form >

                            <TextField
                                placeholder="Your email address"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                style={{ background: "white" }}
                            />

                            <TextField
                                placeholder="Your name / company’s name"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                style={{ background: "white" }}
                            />

                            <TextField
                                placeholder="Your name / company’s name"
                                fullWidth
                                multiline
                                margin="normal"
                                variant="outlined"
                                rows={10}
                                style={{ background: "white" }}
                            />

                            <button className="black__btn">Send</button>

                        </form>
                    </Grid>

                    <Grid item xs={12}>
                        <p style={{ marginTop: "20px", marginBottom: 0, textAlign: "center" }}>copyright Orange labs 2020</p>
                    </Grid>

                </Grid>
            </Container>

        </div>
    );
};

export default Footer;