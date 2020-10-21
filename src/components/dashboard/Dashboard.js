import React, { useContext } from 'react';
import { Container, Grid } from '@material-ui/core'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import AddIcon from '@material-ui/icons/Add';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import './Dashboard.css'
import logo from '../../assets/images/logos/logo.png'
import { Link, NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';

import MakeAdmin from './admin/MakeAdmin';
import AddService from './admin/AddService';
import ServiceList from './admin/ServiceList';
import CustomerOrder from './customer/CustomerOrder'
import CustomerReview from './customer/CustomerReview'
import CustomerServiceList from './customer/CustomerServiceList'
import { userContext } from '../../App';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    let { path, url } = useRouteMatch();

    return (
        <div className="customer__area">
            <Container maxWidth={false}>

                <Grid container>
                    <Grid item xs={12} sm={3}>
                        <div className="customer__area__left">
                            <div className="customer__area__left__top">
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                            <div className="customer__area__left__bottom">
                                {
                                    loggedInUser && loggedInUser.isAdmin ?
                                        <div>
                                            <NavLink activeStyle={{ color: "#009444", fontWeight: "bold" }} to={`${url}/service`}>
                                                <NoteOutlinedIcon /> Service List
                                            </NavLink>
                                            <NavLink activeStyle={{ color: "#009444", fontWeight: "bold" }} to={`${url}/addService`}>
                                                <AddIcon /> Add Service
                                            </NavLink>
                                            <NavLink activeStyle={{ color: "#009444", fontWeight: "bold" }} to={`${url}/makeAdmin`}>
                                                <GroupAddOutlinedIcon /> Make Admin
                                            </NavLink>
                                        </div>
                                        :
                                        <div>
                                            <NavLink to={`${path}/order`} activeStyle={{ color: "#009444", fontWeight: "bold" }}>
                                                <ShoppingCartOutlinedIcon /> Order
                                            </NavLink>
                                            <NavLink to={`${path}/serviceList`} activeStyle={{ color: "#009444", fontWeight: "bold" }}>
                                                <NoteOutlinedIcon /> Service List
                                            </NavLink>
                                            <NavLink to={`${path}/review`} activeStyle={{ color: "#009444", fontWeight: "bold" }}>
                                                <SmsOutlinedIcon /> Review
                                            </NavLink>
                                        </div>
                                }
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={9}>
                        <div className="customer__area__right">
                            <div className="customer__area__right__top">
                                <div>Dashboard</div>
                                <div>{loggedInUser.displayName}</div>
                            </div>
                            <div className="customer__area__right__bottom">

                                <Switch>
                                    <Route exact path={`${path}/service`}>
                                        <ServiceList />
                                    </Route>

                                    <Route exact path={`${path}/addService`}>
                                        <AddService />
                                    </Route>

                                    <Route exact path={`${path}/makeAdmin`}>
                                        <MakeAdmin />
                                    </Route>

                                    <Route exact path={`${path}/order`}>
                                        <CustomerOrder />
                                    </Route>

                                    <Route exact path={`${path}/serviceList`}>
                                        <CustomerServiceList />
                                    </Route>

                                    <Route exact path={`${path}/review`}>
                                        <CustomerReview />
                                    </Route>

                                </Switch>



                                {/* <CustomerServiceList /> */}
                                {/* <CustomerReview /> */}
                            </div>
                        </div>
                    </Grid>
                </Grid>

            </Container>
        </div>
    );
};

export default Dashboard;