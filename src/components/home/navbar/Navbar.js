import React from 'react';
import './Navbar.css'
import { AppBar, Slide, Toolbar, Typography, useScrollTrigger } from "@material-ui/core"
import { Link, useHistory } from "react-router-dom";

import logo from '../../../assets/images/logos/logo.png'


function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar = (props) => {
    const history = useHistory()
    return (
        <div className="app__navbar">
            <HideOnScroll {...props}>
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography style={{ flexGrow: 1 }}>
                            <Link to="/">
                                <img src={logo} className="app__logo" alt="" />
                            </Link>
                        </Typography>

                        <div className="menu__items">
                            <Link to="/">Home</Link>
                            <Link to="/">Our Portfolio</Link>
                            <Link to="/">Our Team</Link>
                            <Link to="/">Contact Us</Link>
                            <button onClick={() => history.replace('/login')} className="black__btn">Login</button>
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
    );
};

export default Navbar;