import React from 'react';
import { TextField } from '@material-ui/core';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';

const CustomerOrder = () => {
    return (
        <div className="order__form">
            <TextField
                placeholder="Your name / company’s name"
                fullWidth
                margin="normal"
                variant="outlined"
                style={{ background: "white" }}
            />
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
                rows={5}
                style={{ background: "white" }}
            />

            <TextField
                placeholder="Your name / company’s name"
                margin="normal"
                variant="outlined"
                style={{ background: "white", width: "70%" }}
            />

            <div className="uploadBtn__area">
                <button className="upload__btn">
                    <BackupOutlinedIcon />
                    Upload project file
                </button>
            </div>


            <button className="black__btn" style={{ padding: "20px 60px", marginTop: "20px" }}>Send</button>

        </div>
    );
};

export default CustomerOrder;