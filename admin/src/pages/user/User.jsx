import { MailOutlineOutlined, PermIdentity, Publish } from '@material-ui/icons';
import { React, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { updateUser } from '../../context/userContext/apiCalls';
import './User.scss';
import { UserContext } from '../../context/userContext/userContext';

const User = () => {
    const { dispatch, error, isFetching } = useContext(UserContext);
    const location = useLocation();
    const [oldUser, setOldUser] = useState(location.state.user);
    const [newUser, setNewUser] = useState(location.state.user);
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword.length > 8) {
            setNewUser(prev => { return { ...prev, ["password"]: newPassword } });
        }
        console.log(newUser);
        updateUser(newUser, dispatch);
        if (!error) {
            setOldUser(prev => { return { ...prev, ...newUser } });
        }
    }
    const handleChange = (e) => {
        setNewUser(prev => { return { ...prev, [e.target.name]: e.target.value } });
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
                    <div className="userShowTop"><img src={oldUser.profilePic} alt="profile pic" className="userShowImg" /> <div className="userShowTopTitle">
                        <span className="userShowUsername">{oldUser.username}</span>   </div></div>
                    <div className="userShowBottom">
                        <ul className="userInfo">
                            <span className="userShowTitle">
                                Account Details
                            </span>
                            <li className='userInfoItem'>
                                <PermIdentity className='userShowIcons' />
                                <span className="userShowInfoTitle">{oldUser.username}</span>
                            </li>
                            <span className="userShowTitle">
                                Contact Details
                            </span>
                            <li className='userInfoItem'>
                                <MailOutlineOutlined className='userShowIcons' />
                                <span className="userShowInfoTitle">{oldUser.email}</span>
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
                                        defaultValue={oldUser.username} placeholder={oldUser.username} name="username" type="text" className="userUpdateInput" />
                                </div>
                                <div className="userInputItem">
                                    <label htmlFor="">Email</label>
                                    <input defaultValue={oldUser.email} placeholder={oldUser.email} onChange={handleChange} name="email" type="email" className="userUpdateInput" />
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
                                    <img className='userUpdateRightImg' src={oldUser.profilePic} alt="profile picture larger" />
                                    <label htmlFor='file'>
                                        <Publish className="publish" />
                                    </label>
                                    <input type="file" id="file" style={{ display: "none" }} />
                                </div>
                                <div className="userUpdateRightBottomContainer">
                                    <button disabled={isFetching} className='userUpdateButton'>Update</button>
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