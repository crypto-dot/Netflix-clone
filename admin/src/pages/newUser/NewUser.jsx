import React, { useContext, useState, useEffect } from 'react';
import { createUser } from '../../context/userContext/apiCalls';
import { UserContext } from '../../context/userContext/userContext';
import './NewUser.scss';
const NewUser = () => {
    const { dispatch, isFetching } = useContext(UserContext);
    const [newUser, setNewUser] = useState({ admin: false });
    const [inputError, setInputError] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newUser.email || !newUser.username || !newUser.password) {
            setInputError(true);
            return;
        }
        createUser(newUser, dispatch);
    }
    const handleChange = (e) => {
        if (e.target.checkValidity()) {
            setNewUser(prev => { return { ...prev, [e.target.name]: e.target.value } });
        } else {
            const user = newUser;
            delete user[e.target.name];
            setNewUser(user);
        }
    }
    const handleChangeBoolean = (e) => {
        const booleanVal = e.target.value === "true";
        setNewUser(prev => { return { ...prev, [e.target.name]: booleanVal } });
    }
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form onSubmit={handleSubmit} className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="">Username</label>
                    <input name="username" onChange={handleChange} type="text" placeholder='Johnsmith99' />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Email</label>
                    <input onChange={handleChange} name="email" type="email" placeholder='John@gmail.com' />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Password</label>
                    <input minLength={8} onChange={handleChange} name="password" type="password" placeholder='Password' />
                </div>

                <div className="newUserItem">
                    <label htmlFor="active">Admin</label>
                    <select onChange={handleChangeBoolean} name="admin" id="active" className="newUserSelect">
                        <option value={false}>No</option>
                        <option value={true}>Yes</option>
                    </select>
                </div>
                <div className="newUserItem">
                    <button disabled={isFetching} className="newUserButton">Create</button>
                </div>
                {inputError && <div className='errorModal'>Please fill out a valid username, password (8 chars), and email </div>}
            </form>
        </div>
    )
}

export default NewUser