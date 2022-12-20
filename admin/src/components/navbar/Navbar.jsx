import { React, useContext } from 'react'
import './Navbar.scss';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { AuthContext } from '../../context/authContext/authContext';
import { logout } from '../../context/authContext/authAction';
const Navbar = () => {
    const { dispatch } = useContext(AuthContext);
    const handleOnClick = () => {
        dispatch(logout());
    }
    return (
        <nav className="navbar">
            <div className="navbar-wrapper">
                <div className="leftNav">  <span className="logo">
                    ArbizuAdmin
                </span></div>
                <div className="rightNav">
                    <img src={JSON.parse(localStorage.getItem("user")).profilePic} alt="avatar" className='avatar' />
                    <div className="navRightIcons">
                        <Settings className="icon" />
                    </div>

                    <button className='rightNavButton' onClick={handleOnClick}>Log Out</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar