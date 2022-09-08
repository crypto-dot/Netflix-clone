import { CalendarTodayOutlined, LocationOn, MailOutlineOutlined, PermIdentity, PhoneAndroidOutlined, Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom'
import './User.scss';
const User = () => {
    const handleInput = (e) => {
        return e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');
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
                    <div className="userShowTop"><img src="https://www.w3schools.com/w3images/avatar6.png " alt="profile pic" className="userShowImg" /> <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Packer</span>
                        <span className="userShowTitle">Software Engineer</span></div></div>
                    <div className="userShowBottom">
                        <ul className="userInfo">
                            <span className="userShowTitle">
                                Account Details
                            </span>
                            <li className='userInfoItem'>
                                <PermIdentity className='userShowIcons' />
                                <span className="userShowInfoTitle">annaPacker221</span>
                            </li>
                            <li className='userInfoItem'>
                                <CalendarTodayOutlined className='userShowIcons' />
                                <span className="userShowInfoTitle">10.12.1999</span>
                            </li>
                            <span className="userShowTitle">
                                Contact Details
                            </span>
                            <li className='userInfoItem'>
                                <PhoneAndroidOutlined className='userShowIcons' />
                                <span className="userShowInfoTitle">+1 214 828 5082</span>
                            </li>
                            <li className='userInfoItem'>
                                <MailOutlineOutlined className='userShowIcons' />
                                <span className="userShowInfoTitle">anna@gmail.com</span>
                            </li>
                            <li className='userInfoItem'>
                                <LocationOn className='userShowIcons' />
                                <span className="userShowInfoTitle">New York, NY</span>
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
                                    <input placeholder="annaPacker221" type="text" className="userUpdateInput" />
                                </div>
                                <div className="userInputItem">
                                    <label htmlFor="">Full Name</label>
                                    <input placeholder="Anna Packer" type="text" className="userUpdateInput" />
                                </div>
                                <div className="userInputItem">
                                    <label htmlFor="">Email</label>
                                    <input placeholder="anna@gmail.com" type="email" className="userUpdateInput" />
                                </div>
                                <div className="userInputItem">
                                    <label htmlFor="">Phone</label>
                                    <input placeholder="+1 214 828 5082" type="text" onInput={handleInput} maxLength={10} className="userUpdateInput" />
                                </div>
                                <div className="userInputItem">
                                    <label htmlFor="">Location</label>
                                    <input placeholder="New York, NY" type="text" className="userUpdateInput" />
                                </div>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateRightSpaceContainer"></div>
                            <div className="userUpdateRightContainer">
                                <div className="userUpdateRightTopContainer">
                                    <img className='userUpdateRightImg' src="https://www.w3schools.com/w3images/avatar6.png" alt="profile picture larger" />
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