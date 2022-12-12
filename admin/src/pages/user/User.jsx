import { CalendarTodayOutlined, LocationOn, MailOutlineOutlined, PermIdentity, PhoneAndroidOutlined, Publish } from '@material-ui/icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import './User.scss';
const User = () => {
    const handleInput = (e) => {
        return e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');
    }
    const location = useLocation();
    const user = location.state.user;
    console.log(user);
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
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <div className="userInputItem">
                                    <label htmlFor="">Username</label>
                                    <input placeholder={user.username} type="text" className="userUpdateInput" />
                                </div>
                                <div className="userInputItem">
                                    <label htmlFor="">Email</label>
                                    <input placeholder={user.email} type="email" className="userUpdateInput" />
                                </div>
                                <div className="userInputItem">
                                    <label htmlFor="">Password (Hashed)</label>
                                    <input placeholder="******" type="email" className="userUpdateInput" />
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