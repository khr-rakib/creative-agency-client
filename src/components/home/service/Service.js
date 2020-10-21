import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { useSpring, animated } from 'react-spring'
import './Service.css'

import service1 from '../../../assets/images/icons/service1.png'
import service2 from '../../../assets/images/icons/service2.png'
import service3 from '../../../assets/images/icons/service3.png'
import { Link } from 'react-router-dom';


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Service = () => {
    const [service, setService] = useState([])
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    useEffect(() => {
        fetch('http://localhost:8000/getService')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <Container>
            <Typography variant="h3" className="section__title">Provide awesome <span> services </span></Typography>

            <Grid container spacing={5}>

                {
                    service && service.map(item => (
                        <Grid key={Math.random()} item sm={4} xs={12}>
                            <Link to={`/dashboard/order/${item.title}`}>
                                <animated.div
                                    className="card"
                                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                    style={{ transform: props.xys.interpolate(trans) }}
                                >
                                    <div className="service__box">
                                        <img src={`data:image/png;base64,${item.icon.img}`} alt="" />
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </animated.div>
                            </Link>

                        </Grid>
                    ))
                }

            </Grid>

        </Container>
    );
};

export default Service;