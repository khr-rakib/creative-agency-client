import React from 'react';
import { TextField } from '@material-ui/core';

const MakeAdmin = () => {
    return (
        <div className="order__form">
            <TextField
                placeholder="Your email"
                fullWidth
                margin="normal"
                variant="outlined"
                style={{ background: "white" }}
            />

            <button className="black__btn" style={{ padding: "20px 60px", marginTop: "20px" }}>Send</button>
        </div >
    );
};

export default MakeAdmin;