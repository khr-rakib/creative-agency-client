import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="app__notfound">
            <div>
                Not Found
                <br />
                <Link to="/">Go Home</Link>
            </div>
        </div>
    );
};

export default NotFound;