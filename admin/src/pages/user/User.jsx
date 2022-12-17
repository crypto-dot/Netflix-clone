import { MailOutlineOutlined, PermIdentity, Publish } from '@material-ui/icons';
import { React, useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { updateUser } from '../../context/userContext/apiCalls';
import './User.scss';
import { UserContext } from '../../context/userContext/userContext';

const User = () => {
    const { dispatch, error } = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(location.state.user);
    const [newPassword, setNewPassword] = useState('');
    console.log(location.state);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword.length > 8) {
            setUser(prev => { return { ...prev, ["password"]: newPassword } });
        }
        updateUser(user, dispatch);
        if (!error) {

        }
    }
    useEffect(
        () => { console.log(user); }
        , [user]);
    const handleChange = (e) => {
        setUser(prev => { return { ...prev, [e.target.name]: e.target.value } });
    }
    const handlePasswordChange = (e) => {
        if (e.target.value.length < 8) {
            return;
        }
        setNewPassword(e.target.value);
    }
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newUser'>
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop"><img src={user.profilePic} alt="profile pic" className="userShowImg" /> <div className="userShowTopTitle">
                        <span className="userShowUsername">{user.username}</span>   </div></div>
                    <div className="userShowBottom">
                        <ul className="userInfo">
                            <span className="userShowTitle">
                                Account Details
                            </span>
                            <li className='userInfoItem'>
                                <PermIdentity className='userShowIcons' />
                                <span className="userShowInfoTitle">{user.username}</span>
                            </li>
                            <span className="userShowTitle">
                                Contact Details
                            </span>
                            <li className='userInfoItem'>
                                <MailOutlineOutlined className='userShowIcons' />
                                <span className="userShowInfoTitle">{user.email}</span>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form onSubmit={handleSubmit} className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <div className="userInputItem">
                                    <label htmlFor="">Username</label>
                                    <input onChange={handleChange}
                                        defaultValue={user.username} placeholder={user.username} name="username" type="text" className="userUpdateInput" />
                                </div>
                                <div className="userInputItem">
                                    <label htmlFor="">Email</label>
                                    <input defaultValue={user.email} placeholder={user.email} onChange={handleChange} name="email" type="email" className="userUpdateInput" />
                                </div>
                                <div className="userInputItem">
                                    <label htmlFor="">Password (Hashed)</label>
                                    <input onChange={handlePasswordChange} defaultValue="●●●●●●" placeholder="●●●●●●" type="password" className="userUpdateInput" />
                                </div>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateRightContainer">
                                <div className="userUpdateRightTopContainer">
                                    <img className='userUpdateRightImg' src={user.profilePic} alt="profile picture larger" />
                                    <label htmlFor='file'>
                                        <Publish className="publish" />
                                    </label>
                                    <input type="file" id="file" style={{ display: "none" }} />
                                </div>
                                <div className="userUpdateRightBottomContainer">
                                    <button className='userUpdateButton'>Update</button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User