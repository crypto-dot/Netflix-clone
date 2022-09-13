import { React, useState, useContext } from 'react';
import { login } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/authContext';
import './Login.scss';
const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email: email, password: password }, dispatch);
    }
    return (
        <div className='login'>
            <form>
                <div className="inputItem">
                    <label htmlFor='email'>Email</label>
                    <input name='email' id='email' type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </div>
                <div className="inputItem">
                    <label htmlFor='password'>Password</label>
                    <input name='password' id='password' type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} ></input>
                </div>
                <button disable={String(isFetching)} className='submitButton' onClick={handleLogin}>Submit</button>
            </form>
        </div>
    )
}

export default Login