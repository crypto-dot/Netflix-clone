import "./Login.scss";
import NetflixLogo from "../../assets/NetflixLogo.png";
const Register = () => {

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
                    <input type="email" placeholder="Email or Phone Number" />
                    <input type="password" placeholder="Password" />
                    <button> Sign in</button>
                    <span>New to Netflix? <b>Sign up now.</b></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Register