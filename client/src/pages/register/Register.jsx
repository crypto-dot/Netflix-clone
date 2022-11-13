import "./Register.scss";
import NetflixLogo from "../../assets/NetflixLogo.png";
import { useRef, useState } from "react";
import React from 'react';
import { redirect } from 'react-router-dom';
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const emailRef = useRef();
    const navigate = useNavigate();
    const handleStart = () => {
        setEmail(emailRef.current.value);
    }
    const handleFinish = (e) => {
        e.preventDefault();
        try {

        } catch (err) {
            alert(err);
        }
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src={NetflixLogo} alt="logo" />
                    Register
                    <button onClick={() => {
                        navigate('/login')
                    }} className="login-button">Sign In</button>
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
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleFinish} className="registerButton">Start</button>
                </form>)}
            </div>
        </div>
    )
}

export default Register