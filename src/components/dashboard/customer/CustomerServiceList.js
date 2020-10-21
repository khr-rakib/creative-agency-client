import React from 'react';
import { Grid, MenuItem, Select } from '@material-ui/core';
import service1 from '../../../assets/images/icons/service1.png'

const CustomerServiceList = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <div className="customer__order__list__box">
                    <div className="customer__order__list__box__top">
                        <div>
                            <img src={service1} alt="" />
                        </div>
                        <div>
                            <select name="" id="">
                                <option value="Pending">Pending</option>
                                <option value="Pending">Done</option>
                            </select>

                        </div>
                    </div>
                    <div className="customer__order__list__box__botton">
                        <h4>Web & Mobile Design</h4>
                        <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={6}>
                <div className="customer__order__list__box">
                    <div className="customer__order__list__box__top">
                        <div>
                            <img src={service1} alt="" />
                        </div>
                        <div>
                            <select name="" id="">
                                <option value="Pending">Pending</option>
                                <option value="Pending">Done</option>
                            </select>

                        </div>
                    </div>
                    <div className="customer__order__list__box__botton">
                        <h4>Web & Mobile Design</h4>
                        <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

export default CustomerServiceList;