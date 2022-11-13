import "./Login.scss";
import NetflixLogo from "../../assets/NetflixLogo.png";
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/authContext/authContext";
import { login } from "../../context/authContext/apiCalls";
const Register = () => {
    const navigate = useNavigate('/register');
    const { dispatch, isFetching } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email, password }, dispatch);
    }

    return (

        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src={NetflixLogo} alt="logo" />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input onChange={handleEmail} type="email" placeholder="Email or Phone Number" />
                    <input onChange={handlePassword} type="password" placeholder="Password" />
                    <button disabled={isFetching} onClick={handleLogin}> Sign in</button>
                    <span>New to Netflix? <b onClick={() => {
                        navigate('/register')
                    }}>Sign up now.</b></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Register