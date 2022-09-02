import "./Register.scss";
import NetflixLogo from "../../assets/NetflixLogo.png";
import { useRef, useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const passwordRef = useRef();
    const emailRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src={NetflixLogo} alt="logo" />
                    Register
                    <button className="login-button">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership</p>
                {!email ? (<div className="input">
                    <input type="email" placeholder="Email Address" ref={emailRef} />
                    <button onClick={handleStart} className="registerButton">Get Started</button>
                </div>) : (<form className="input">
                    <input type="password" placeholder="Password" ref={passwordRef} />
                    <button onClick={handleFinish} className="registerButton">Start</button>
                </form>)}
            </div>
        </div>
    )
}

export default Register