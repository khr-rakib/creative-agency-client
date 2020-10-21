import React from 'react';
import { TextField } from '@material-ui/core';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';


const CustomerReview = () => {
    return (
        <div className="order__form">
            <TextField
                placeholder="Your name"
                fullWidth
                margin="normal"
                variant="outlined"
                style={{ background: "white" }}
            />

            <TextField
                placeholder="Company’s name / Designation"
                fullWidth
                margin="normal"
                variant="outlined"
                style={{ background: "white" }}
            />


            <TextField
                placeholder="Description"
                fullWidth
                multiline
                margin="normal"
                variant="outlined"
                rows={3}
                style={{ background: "white" }}
            />

            <button className="black__btn" style={{ padding: "20px 60px", marginTop: "20px" }}>Send</button>

        </div >
    );
};

export default CustomerReview;