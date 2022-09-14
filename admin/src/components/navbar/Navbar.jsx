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
                    <div className="navRightIcons">
                        <NotificationsNone className="icon" />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="navRightIcons">
                        <Language className="icon" />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="navRightIcons">
                        <Settings className="icon" />
                    </div>
                    <img src="https://www.w3schools.com/w3images/avatar6.png" alt="avatar" className='avatar' />
                    <button className='rightNavButton' onClick={handleOnClick}>Log Out</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar