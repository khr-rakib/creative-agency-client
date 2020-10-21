import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const AddService = () => {
    const history = useHistory()
    const [service, setService] = useState({
        title: "",
        icon: null,
        description: ""
    })

    const handleAddService = () => {
        const formData = new FormData();
        formData.append("title", service.title);
        formData.append("icon", service.icon);
        formData.append("description", service.description);

        fetch('http://localhost:8000/addService', {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(data => {
                setService({
                    title: "",
                    icon: null,
                    description: ""
                })
                history.replace('/dashboard/service')
            })
    }

    return (
        <div className="order__form">
            <TextField
                placeholder="Service Title"
                margin="normal"
                variant="outlined"
                style={{ background: "white", width: "70%" }}
                onChange={e => setService({ ...service, title: e.target.value })}
                value={service.title}
            />

            <div className="uploadBtn__area">
                <input style={{ display: "none" }} type="file" accept="image/*" id="imageUpload" onChange={e => setService({ ...service, icon: e.target.files[0] })} />
                <label htmlFor="imageUpload">
                    <span className="upload__btn">
                        <BackupOutlinedIcon />
                    Upload project file
                </span>

                </label>
            </div>

            <TextField
                placeholder="Enter Description"
                fullWidth
                multiline
                margin="normal"
                variant="outlined"
                rows={5}
                style={{ background: "white" }}
                onChange={e => setService({ ...service, description: e.target.value })}
                value={service.description}
            />

            <button type="button" onClick={handleAddService} className="black__btn" style={{ padding: "20px 60px", marginTop: "20px" }}>Submit</button>
        </div>
    );
};

export default AddService;