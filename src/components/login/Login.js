import React, { useContext } from 'react';
import './Login.css'
import logo from '../../assets/images/logos/logo.png'
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase'
import fireApp from '../../firebase_config';
import { userContext } from '../../App';

const googleProvider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const checkAdmin = async (email, displayName) => {
        await fetch('http://localhost:8000/checkAdmin', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                displayName
            })
        })
            .then(res => res.json())
            .then(data => {
                setLoggedInUser(data)

                if (data.isAdmin === true) {
                    history.replace('/dashboard/service');
                } else {
                    history.replace('/dashboard/order')
                }
            })
    }

    const handleLogin = () => {
        fireApp.signInWithPopup(googleProvider)
            .then((result) => {
                // const token = result.credential.accessToken;
                const user = result.user;

                checkAdmin(user.email, user.displayName)
            }).catch((error) => {
                alert(error.message)
            });
    }


    return (
        <div className="login__area">
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <div className="login__box">
                <h3>Login With</h3>
                <button onClick={handleLogin}> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png" alt="" /> Continue with Goodle</button>
                <p>Don’t have an account? <Link to="/">Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;