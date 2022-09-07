import React from 'react'
import './Navbar.scss';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
const Navbar = () => {
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
                </div>
            </div>
        </nav>
    )
}

export default Navbar